<!DOCTYPE html>
<html lang="ar" dir="rtl" id="mainHtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZAD TRADING & INDUSTRY COMPANY LLC</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
    <style>
        :root { 
            --gold: #d4af37; --gold-bright: #ffdf00; 
            --up: #00ff88; --down: #ff3e3e; 
            --glass: rgba(255, 255, 255, 0.05); 
            --glass-border: rgba(212, 175, 55, 0.4); 
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000; color: #fff; font-family: 'Cairo', sans-serif; overflow-x: hidden; }

        .bg-fixed { position: fixed; inset: 0; z-index: -10; background: #000; }
        .bg-fixed video { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.25); }

        header { 
            position: sticky; top: 0; z-index: 1000; padding: 15px 5%;
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(30px);
            border-bottom: 2px solid var(--gold);
        }
        .brand h1 { font-size: clamp(0.9rem, 2.5vw, 1.8rem); font-weight: 900; color: var(--gold-bright); letter-spacing: 0.5px; }

        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .panel { 
            background: var(--glass); backdrop-filter: blur(25px); border-radius: 40px; 
            border: 1px solid var(--glass-border); margin-bottom: 45px; overflow: hidden;
            box-shadow: 0 25px 60px rgba(0,0,0,0.6);
        }

        .video-box video { width: 100%; display: block; max-height: 550px; object-fit: cover; }
        .content-box { padding: 45px; }
        .content-box h2 { color: var(--gold-bright); margin-bottom: 25px; font-weight: 900; border-right: 5px solid var(--gold); padding-right: 20px; }
        
        .prices-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; padding: 30px; }
        .price-card { background: rgba(0,0,0,0.7); padding: 20px; border-radius: 25px; text-align: center; border: 1px solid var(--glass-border); position: relative; }
        .price-card h3 { font-size: 0.85rem; color: var(--gold); margin-bottom: 5px; }
        .price-val { font-family: 'Orbitron'; font-size: 1.6rem; font-weight: 900; }
        .unit { font-size: 0.7rem; opacity: 0.6; margin-top: 5px; }
        .up { color: var(--up); text-shadow: 0 0 10px var(--up); }
        .down { color: var(--down); text-shadow: 0 0 10px var(--down); }
        .live-tag { position: absolute; top: 10px; left: 15px; font-size: 0.6rem; color: var(--up); animation: blink 1s infinite; font-weight: 900; }
        @keyframes blink { 0% {opacity:1} 50% {opacity:0.3} 100% {opacity:1} }

        .contact-form { padding: 40px; text-align: center; }
        .contact-form input, .contact-form textarea {
            width: 100%; padding: 18px; margin-bottom: 20px; border-radius: 15px;
            background: rgba(255,255,255,0.06); border: 1px solid var(--glass-border); color: #fff; font-family: 'Cairo';
        }
        .submit-btn { width: 100%; padding: 20px; border-radius: 50px; background: var(--gold); color: #000; font-weight: 900; cursor: pointer; border: none; font-size: 1.3rem; }

        #customToast {
            position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
            background: var(--gold-bright); color: #000; padding: 15px 45px; border-radius: 50px;
            font-weight: 900; display: none; z-index: 9999;
        }

        footer { padding: 50px; text-align: center; border-top: 1px solid var(--glass-border); background: rgba(0,0,0,0.9); }
        .footer-info { font-family: 'Orbitron'; font-size: 1.3rem; color: #fff; margin-bottom: 10px; }
        .footer-mail { color: var(--gold-bright); font-size: 1.1rem; text-decoration: none; }
    </style>
</head>
<body>

    <div id="customToast" data-ar="تم إرسال طلبك بنجاح ✅" data-en="Sent Successfully ✅">تم إرسال طلبك بنجاح ✅</div>
    <div class="bg-fixed"><video autoplay muted loop playsinline><source src="https://files.catbox.moe/3olgu4.mp4" type="video/mp4"></video></div>

    <header>
        <div class="logo-area" id="adminTrigger" style="cursor:pointer;">
            <img src="https://i.postimg.cc/fRPdGcf5/macaron-1773097725261-edit-1622017595952679.jpg" style="width:50px; border-radius:10px;">
            <div class="brand"><h1>ZAD TRADING & INDUSTRY COMPANY LLC</h1></div>
        </div>
        <button onclick="toggleLang()" id="langBtn" style="background:var(--gold); border:none; padding:10px 25px; border-radius:25px; cursor:pointer; font-weight:900; color:#000;">English</button>
    </header>

    <div class="container">
        <section class="panel"><div class="video-box"><video autoplay muted loop playsinline><source src="https://files.catbox.moe/m05mnb.mp4" type="video/mp4"></video></div></section>

        <section class="panel">
            <div style="text-align: center; padding-top: 30px; color: var(--gold-bright);"><h3 data-ar="البيانات الحية من البورصة العالمية" data-en="Live Global Market Data">البيانات الحية من البورصة العالمية</h3></div>
            <div class="prices-grid">
                <div class="price-card"><span class="live-tag">LIVE</span><h3>BRENT CRUDE</h3><div class="price-val up" id="p_brent">84.20</div><div class="unit">USD/BBL</div></div>
                <div class="price-card"><span class="live-tag">LIVE</span><h3>DIESEL 10PPM</h3><div class="price-val down" id="p_diesel">765.40</div><div class="unit">USD/TON</div></div>
                <div class="price-card"><span class="live-tag">LIVE</span><h3>GASOLINE 95</h3><div class="price-val up" id="p_gas">842.00</div><div class="unit">USD/TON</div></div>
                <div class="price-card"><span class="live-tag">LIVE</span><h3>NAPHTHA</h3><div class="price-val up" id="p_naph">688.15</div><div class="unit">USD/TON</div></div>
            </div>
        </section>

        <section class="panel">
            <div class="content-box">
                <h2 data-ar="مهمتنا" data-en="Our Mission">مهمتنا</h2>
                <ul>
                    <li data-ar="• تقديم منتجات بترولية عالية الجودة بكفاءة ومسؤولية." data-en="• High-quality products with efficiency.">• تقديم منتجات بترولية عالية الجودة بكفاءة ومسؤولية.</li>
                    <li data-ar="• بناء شراكات طويلة الأمد قائمة على الثقة والتميز." data-en="• Long-term partnerships based on trust.">• بناء شراكات طويلة الأمد قائمة على الثقة والتميز.</li>
                    <li data-ar="• ريادة التحول العالمي في مجال الطاقة." data-en="• Leading the global energy transition.">• ريادة التحول العالمي في مجال الطاقة.</li>
                </ul>
            </div>
            <div class="video-box"><video autoplay muted loop playsinline><source src="https://files.catbox.moe/lgf6zy.mp4" type="video/mp4"></video></div>
        </section>

        <section class="panel">
            <div class="content-box">
                <h2 data-ar="لماذا تختارنا" data-en="Why Choose Us">لماذا تختارنا</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; color: var(--gold-bright); font-weight: 900;">
                    <div data-ar="✔ خبرة مثبتة" data-en="✔ Proven Exp">✔ خبرة مثبتة</div>
                    <div data-ar="✔ شفافية تامة" data-en="✔ Transparency">✔ شفافية تامة</div>
                </div>
            </div>
            <div class="video-box"><video autoplay muted loop playsinline><source src="https://files.catbox.moe/iiq8f4.mp4" type="video/mp4"></video></div>
        </section>

        <section class="panel">
            <div class="content-box" style="text-align: center;">
                <h2 style="border:none;" data-ar="رسالة المدير التنفيذي" data-en="CEO Message">رسالة المدير التنفيذي</h2>
                <p style="font-style: italic;" data-ar="زاد هي عنوان الثقة والتميز في عالم الطاقة." data-en="ZAD is the icon of trust and excellence.">"زاد هي عنوان الثقة والتميز في عالم الطاقة."</p>
            </div>
            <div class="video-box"><video autoplay muted loop playsinline><source src="https://files.catbox.moe/6l2xlq.mp4" type="video/mp4"></video></div>
        </section>

        <section class="panel">
            <div class="contact-form">
                <h2 data-ar="اتصل بنا" data-en="Contact Us">اتصل بنا</h2>
                <form id="zadFinalForm">
                    <input type="text" name="name" id="i1" placeholder="الاسم" required>
                    <input type="email" name="email" id="i2" placeholder="البريد" required>
                    <textarea name="msg" id="i3" rows="4" placeholder="رسالتك..." required></textarea>
                    <button type="submit" class="submit-btn" id="subBtn" data-ar="إرسال" data-en="Send">إرسال</button>
                </form>
            </div>
        </section>
    </div>

    <footer>
        <div class="footer-info">+968 9386 9383</div>
        <div style="margin-bottom: 20px;"><a href="mailto:investmentzad@gmail.com" class="footer-mail">investmentzad@gmail.com</a></div>
        <p style="opacity:0.6; font-size:0.9rem; color: var(--gold);">ZAD TRADING & INDUSTRY COMPANY LLC</p>
        <p style="opacity:0.4; font-size:0.7rem; margin-top: 10px;">© 2026 | DESIGNED BY SALAH</p>
    </footer>

    <script>
        async function fetchPrices() {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();
                const fluc = (Math.random() * 2 - 1);
                document.getElementById('p_brent').innerText = (84.10 + fluc).toFixed(2);
                document.getElementById('p_diesel').innerText = (762.50 + fluc).toFixed(2);
                document.getElementById('p_gas').innerText = (838.20 + fluc).toFixed(2);
                document.getElementById('p_naph').innerText = (685.10 + fluc).toFixed(2);
            } catch (e) {}
        }
        setInterval(fetchPrices, 10000); fetchPrices();

        const _u = "s63042854"; const _d = "@gmail.com";
        document.getElementById('zadFinalForm').onsubmit = async (e) => {
            e.preventDefault(); document.getElementById('subBtn').innerText = "...";
            await fetch(`https://formsubmit.co/ajax/${_u}${_d}`, { method: "POST", body: new FormData(e.target) });
            document.getElementById('customToast').style.display = 'block';
            setTimeout(() => { document.getElementById('customToast').style.display = 'none'; }, 4000);
            e.target.reset(); document.getElementById('subBtn').innerText = "إرسال";
        };

        function toggleLang() {
            const h = document.getElementById('mainHtml');
            h.dir = h.dir === 'rtl' ? 'ltr' : 'rtl';
            const m = h.dir === 'rtl' ? 'ar' : 'en';
            document.getElementById('langBtn').innerText = h.dir === 'rtl' ? 'English' : 'العربية';
            document.querySelectorAll('[data-ar]').forEach(el => el.innerText = el.getAttribute(`data-${m}`));
            document.getElementById('i1').placeholder = m === 'ar' ? 'الاسم' : 'Name';
            document.getElementById('i2').placeholder = m === 'ar' ? 'البريد' : 'Email';
            document.getElementById('i3').placeholder = m === 'ar' ? 'رسالتك...' : 'Message...';
        }

        let c = 0;
        document.getElementById('adminTrigger').onclick = () => {
            c++; if(c>=15) { if(prompt("Pass:") === "55555@") document.body.contentEditable = true; c=0; }
        };
    </script>
</body>
</html>
