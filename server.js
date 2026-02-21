
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const SOURCE_URL = "https://qamaralfajr.com/production/exchange_rates.php";

function num(v){
  const s = String(v ?? "").replace(/[^\d.]/g,"");
  if(!s) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}
function extractList(data){
  if(Array.isArray(data)) return data;
  return data?.data || data?.rates || data?.exchange_rates || [];
}
function pick(row, keys){
  for(const k of keys) if(row && row[k] != null) return row[k];
  return null;
}

app.get("/", (req,res) => {
  res.json({ ok:true, name:"dinar-tracker-server", endpoints:["/api/rates"] });
});

app.get("/api/rates", async (req,res) => {
  try{
    const r = await fetch(SOURCE_URL, { cache:"no-store" });
    const txt = await r.text();

    let data;
    try { data = JSON.parse(txt); }
    catch {
      const m = txt.match(/\{[\s\S]*\}/);
      if(!m) throw new Error("bad_json");
      data = JSON.parse(m[0]);
    }

    const list = extractList(data);
    if(!Array.isArray(list) || !list.length) throw new Error("empty");

    const usdRow =
      list.find(x => String(x.code||x.currency||x.symbol||x.name||"").toUpperCase().includes("IQD")) ||
      list[0];

    const sell100 = num(pick(usdRow, ["sell","SELL","Sell"]));
    const buy100  = num(pick(usdRow, ["buy","BUY","Buy"]));
    if(!sell100 || !buy100) throw new Error("no_usd");

    const fx = list.map(x => ({
      code: String(x.code||x.currency||x.symbol||x.name||"").toUpperCase().trim(),
      sell: num(pick(x, ["sell","SELL","Sell"]))
    })).filter(x => x.code && x.code !== "IQD" && x.sell);

    res.json({
      ok:true,
      source:"S1",
      timestamp: Date.now(),
      sell100: Math.round(sell100),
      buy100: Math.round(buy100),
      fx
    });
  }catch(e){
    res.status(502).json({ ok:false, error:String(e?.message||e) });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on", port));
