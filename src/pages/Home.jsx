import { motion } from 'framer-motion'; 
import React, { useState, useEffect } from 'react';

// ... (لینک‌های دانلود ثابت سر جای خودشون) ...
const DOWNLOAD_LINKS = {
  android_v8a: "http://app.azadnet.com/content/download/latest/android/v8a/", 
  android_universal: "http://app.azadnet.com/content/download/latest/android/universal/",
  windows: "http://app.azadnet.com/content/download/latest/windows/",
  linux: "http://app.azadnet.com/content/download/latest/linux/",
  macos: "http://app.azadnet.com/content/download/latest/macos/"
};

const HomePage = () => {
  const [androidVersion, setAndroidVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.azadnet.com/content/versions/?platform=android')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setAndroidVersion(data[0].version_number);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // تعریف انیمیشن
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pb-20 md:pb-0 overflow-hidden">
       {/* Background Blobs */}
       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neonPurple/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neonBlue/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
       </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* 👇 تغییر مهم: استفاده از motion.div به جای div معمولی */}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex-1 text-center md:text-right z-10"
        >
          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-neonBlue/30 bg-neonBlue/5 text-neonBlue text-xs font-bold backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neonBlue"></span>
            </span>
            {loading ? "در حال بررسی..." : `نسخه رسمی ${androidVersion || 'جدید'}`}
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
            اینترنت آزاد <br/>
            برای <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">همه</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
             با زیرساخت قدرتمند <span className="text-white font-bold">V2Ray</span> و رمزنگاری پیشرفته، بدون محدودیت و با امنیت کامل به دنیای آزاد وصل شوید.
          </p>
          
          {/* Buttons & Links ... (کد دکمه‌ها بدون تغییر) ... */}
          <div className="flex flex-col gap-6 mt-8">
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-start">
                 <div className="flex flex-col items-center md:items-start gap-2 w-full sm:w-auto">
                     <a href={DOWNLOAD_LINKS.android_v8a} className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-neonBlue text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] hover:scale-105 transition-all relative overflow-hidden">
                       <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine transition-all"></div>
                       <span>دانلود مستقیم (Arm64)</span>
                     </a>
                     <a href={DOWNLOAD_LINKS.android_universal} className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1 pr-2 cursor-pointer">
                        مشکل در نصب؟ <span className="underline decoration-dotted hover:text-neonBlue">نسخه یونیورسال</span>
                     </a>
                 </div>
                 <a href={DOWNLOAD_LINKS.windows} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:border-neonPurple hover:text-neonPurple hover:bg-white/5 transition-all h-[60px]">
                    نسخه ویندوز
                 </a>
             </div>
          </div>
        </motion.div>

        {/* 👇 تغییر مهم: استفاده از motion.div برای عکس موبایل */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center relative w-full"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neonPurple/30 rounded-full filter blur-[80px] animate-pulse"></div>
            <img 
              src="/phone-mockup.png" 
              alt="AzadNet App" 
              className="relative z-10 w-[280px] md:w-[320px] rounded-[2.5rem] border-4 border-gray-900 shadow-2xl animate-float"
            />
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-md">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
                 { title: "No Logs", sub: "امنیت مطلق", icon: "🛡️" },
                 { title: "V2Ray", sub: "هسته قدرتمند", icon: "⚡" },
                 { title: "+۵۰", sub: "سرور فعال", icon: "🌍" },
                 { title: "24/7", sub: "پشتیبانی", icon: "🎧" },
             ].map((item, idx) => (
                 // 👇 تغییر مهم: استفاده از motion.div برای کارت‌ها
                 <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="p-4"
                 >
                     <div className="text-3xl mb-2">{item.icon}</div>
                     <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                     <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                 </motion.div>
             ))}
         </div>
      </section>
      
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 pb-6 safe-area-bottom">
        <a href={DOWNLOAD_LINKS.android_v8a} className="flex w-full bg-gradient-to-r from-neonBlue to-neonPurple text-black font-extrabold py-3.5 rounded-xl justify-center items-center gap-2 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
            دانلود مستقیم
        </a>
      </div>
    </div>
  );
};

export default HomePage;