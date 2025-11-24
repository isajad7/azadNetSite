import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Components ---

// 1. Scroll To Top (برای اینکه وقتی صفحه عوض میشه بره بالا)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 2. Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkBg/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-2xl font-black italic tracking-wider bg-gradient-to-r from-neonBlue to-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,243,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] transition-all">
              AZAD<span className="text-white">NET</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-sm font-medium hover:text-neonBlue transition-colors">خانه</Link>
            <Link to="/support" className="text-sm font-medium hover:text-neonBlue transition-colors">آموزش و پشتیبانی</Link>
            <Link to="/privacy" className="text-sm font-medium hover:text-gray-300 transition-colors text-gray-500">حریم خصوصی</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-darkBg border-b border-white/10 absolute w-full">
           <div className="flex flex-col p-4 space-y-4 text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white py-2">صفحه اصلی</Link>
              <Link to="/support" onClick={() => setIsMenuOpen(false)} className="text-white py-2">پشتیبانی و سوالات</Link>
              <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="text-gray-400 py-2 text-sm">Privacy Policy</Link>
           </div>
        </div>
      )}
    </nav>
  );
}

// 3. Footer Component
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-12 pb-8 text-center px-4">
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://t.me/Azadlandvpnbot" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all text-gray-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
        <a href="https://instagram.com/vpnAzadnet" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all text-gray-400">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>
      <p className="text-gray-500 text-sm">© ۲۰۲۵ آزادنت - اینترنت آزاد برای همه یا هیچکس</p>
    </footer>
  );
}

// --- Pages ---

// PAGE 1: HOME
function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
       {/* Background */}
       <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-64 h-64 md:w-96 md:h-96 bg-neonPurple rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
          <div className="absolute bottom-[20%] right-[-20%] w-72 h-72 md:w-96 md:h-96 bg-neonBlue rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
       </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-right z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-neonBlue/30 bg-neonBlue/5 text-neonBlue text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neonBlue"></span>
            </span>
            تکنولوژی V2Ray بدون لاگ
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            اینترنت آزاد <br/>
            برای <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">همه یا هیچکس</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
             آزادنت با استفاده از زیرساخت قدرتمند V2Ray و رمزنگاری پیشرفته، امن‌ترین مسیر را برای دسترسی شما به اینترنت آزاد فراهم می‌کند.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             {/* Android Button */}
             <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 bg-neonBlue text-black font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 transition-all">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM6.47698 15.3414C6.47698 15.3414 6.47698 15.3414 6.47698 15.3414C6.47698 15.3414 6.47698 15.3414 6.47698 15.3414ZM3.59398 12.3364L3.19098 12.3364C3.19098 12.3364 3.19098 12.3364 3.19098 12.3364L3.59398 12.3364ZM20.406 12.3364L20.809 12.3364C20.809 12.3364 20.809 12.3364 20.809 12.3364L20.406 12.3364Z"/></svg>
               دانلود اندروید (APK)
             </a>
             {/* Windows Button */}
             <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:border-neonPurple hover:text-neonPurple transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.68L24 0v11.4h-13.051V1.769zM0 12.6h9.75v9.451L0 20.55V12.6zm10.949 0H24v11.4l-13.051-1.631V12.6z"/></svg>
                نسخه ویندوز
             </a>
          </div>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
             <span>🐧 نسخه لینوکس موجود است</span>
             <span>🛡️ اسکن شده و امن</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neonPurple/40 rounded-full filter blur-[60px] animate-pulse"></div>
            <img 
              src="/phone-mockup.png" 
              alt="AzadNet App" 
              className="relative z-10 w-[280px] md:w-[320px] rounded-[2.5rem] border-4 border-gray-900 shadow-2xl animate-float"
              onError={(e) => {e.target.src = 'https://placehold.co/320x650/0a0a0a/00f3ff?text=AZADNET&font=roboto'; e.target.style.borderRadius = '2.5rem';}}
            />
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h3 className="text-3xl font-bold text-white">بدون لاگ</h3><p className="text-gray-500 text-sm">حریم خصوصی مطلق</p></div>
            <div><h3 className="text-3xl font-bold text-white">V2Ray</h3><p className="text-gray-500 text-sm">هسته قدرتمند</p></div>
            <div><h3 className="text-3xl font-bold text-white">+۵۰ سرور</h3><p className="text-gray-500 text-sm">در لوکیشن‌های متنوع</p></div>
            <div><h3 className="text-3xl font-bold text-white">پشتیبانی</h3><p className="text-gray-500 text-sm">پاسخگویی سریع</p></div>
         </div>
      </section>
      
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 pb-6">
        <a href="#" className="flex w-full bg-gradient-to-r from-neonBlue to-neonPurple text-black font-extrabold py-3.5 rounded-xl justify-center items-center gap-2 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
            دانلود مستقیم اندروید
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </a>
      </div>
    </div>
  );
}

// PAGE 2: PRIVACY POLICY (Google Play Compliant)
function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">Privacy Policy</h1>
      
      <div className="space-y-8 text-justify leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/10">
        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3">1. Introduction</h2>
          <p>
            Welcome to AzadNet ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a secure experience while using our VPN application. 
            This Privacy Policy explains how we handle your data in compliance with Google Play Developer Policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3">2. No-Logs Policy</h2>
          <p className="font-bold text-white">We adhere to a strict No-Logs Policy.</p>
          <p>This means:</p>
          <ul className="list-disc pr-6 mt-2 space-y-1">
            <li>We do NOT track, store, or share your browsing history.</li>
            <li>We do NOT collect traffic destination or data content.</li>
            <li>We do NOT store your original IP address after the session ends.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3">3. Use of VpnService</h2>
          <p>
            Our application utilizes the Android <code>VpnService</code> to create a secure, encrypted tunnel for your internet traffic. 
            This is the core functionality of AzadNet, allowing us to protect your data from interception and provide secure access to the global internet.
            The VpnService is used strictly for routing traffic locally on your device to our secure servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3">4. Data Security</h2>
          <p>
            We use industry-standard encryption (V2Ray protocols) to protect your data during transmission. While no service can guarantee 100% security, we implement robust measures to safeguard your connection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via:
            <br />Email/Support: <span className="text-white">@Azadnet_support_01 (Telegram)</span>
          </p>
        </section>
        
        <p className="text-xs text-gray-500 mt-8 pt-4 border-t border-white/10">Last Updated: October 2025</p>
      </div>
    </div>
  );
}

// PAGE 3: SUPPORT & FAQ
function SupportPage() {
  const faqs = [
    { q: "چرا آزادنت وصل نمی‌شود؟", a: "ابتدا اتصال اینترنت خود را چک کنید. سپس مطمئن شوید که آخرین نسخه اپلیکیشن را نصب کرده‌اید. اگر مشکل ادامه داشت، سرور را تغییر دهید یا اشتراک خود را بررسی کنید." },
    { q: "آیا آزادنت اطلاعات من را ذخیره می‌کند؟", a: "خیر. ما خط مشی 'عدم ذخیره لاگ' (No-Logs) داریم. هیچکدام از فعالیت‌های شما در اینترنت توسط ما رصد یا ذخیره نمی‌شود." },
    { q: "چگونه اپلیکیشن را آپدیت کنم؟", a: "بهترین راه، دانلود نسخه جدید از همین وب‌سایت یا کانال تلگرام رسمی ماست. به زودی در گوگل پلی نیز در دسترس خواهیم بود." },
    { q: "تکنولوژی V2Ray چیست؟", a: "یک تکنولوژی پیشرفته برای عبور از محدودیت‌های اینترنت است که سرعت و امنیت بسیار بالاتری نسبت به VPNهای قدیمی دارد." },
  ];

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
       <h1 className="text-3xl md:text-5xl font-black text-center mb-4">مرکز <span className="text-neonBlue">پشتیبانی</span></h1>
       <p className="text-center text-gray-400 mb-12">سوالات متداول و راهنمای اتصال</p>

       <div className="space-y-4">
         {faqs.map((item, index) => (
           <details key={index} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-neonPurple/50">
             <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-white marker:content-none">
               <span>{item.q}</span>
               <svg className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
             </summary>
             <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
               {item.a}
             </div>
           </details>
         ))}
       </div>

       <div className="mt-16 text-center bg-gradient-to-br from-neonBlue/10 to-neonPurple/10 p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">هنوز مشکل دارید؟</h3>
          <p className="text-gray-400 mb-6">تیم پشتیبانی ما در تلگرام آماده پاسخگویی به شماست.</p>
          <a href="https://t.me/Azadnet_support_01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-neonBlue text-black font-bold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
             تماس با پشتیبانی
          </a>
       </div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-gray-200 selection:bg-neonBlue selection:text-black flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;