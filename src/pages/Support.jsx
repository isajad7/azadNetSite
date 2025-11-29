import React from 'react';
import { motion } from 'framer-motion';

const SupportPage = () => {
  const faqs = [
    { q: "چرا آزادنت وصل نمی‌شود؟", a: "ابتدا اتصال اینترنت خود را چک کنید (وای‌فای یا دیتا). سپس مطمئن شوید که آخرین نسخه اپلیکیشن را نصب کرده‌اید. اگر مشکل ادامه داشت، سرور را تغییر دهید." },
    { q: "آیا آزادنت اطلاعات من را ذخیره می‌کند؟", a: "خیر. ما خط مشی 'عدم ذخیره لاگ' (No-Logs) داریم. هیچکدام از فعالیت‌های شما در اینترنت توسط ما رصد یا ذخیره نمی‌شود." },
    { q: "چگونه اپلیکیشن را آپدیت کنم؟", a: "بهترین راه، دانلود نسخه جدید از همین وب‌سایت یا کانال تلگرام رسمی ماست. اگر نسخه جدیدی بیاید، داخل اپلیکیشن هم اعلان دریافت می‌کنید." },
    { q: "تکنولوژی V2Ray چیست؟", a: "یک تکنولوژی پیشرفته و متن‌باز برای عبور از محدودیت‌های اینترنت است که سرعت و امنیت بسیار بالاتری نسبت به VPNهای قدیمی دارد." },
  ];

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 min-h-screen">
       <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-12"
       >
         <h1 className="text-3xl md:text-5xl font-black mb-4">مرکز <span className="text-neonBlue">پشتیبانی</span></h1>
         <p className="text-gray-400">سوالات متداول و راهنمای اتصال سریع</p>
       </motion.div>

       <div className="space-y-4">
         {faqs.map((item, index) => (
           <motion.details 
             key={index}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: index * 0.1 }} // انیمیشن نوبتی (آبشاری)
             className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neonPurple/50 hover:bg-white/10"
           >
             <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-white marker:content-none select-none">
               <span className="flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-neonBlue/20 text-neonBlue flex items-center justify-center text-sm">{index + 1}</span>
                 {item.q}
               </span>
               <svg className="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
             </summary>
             <div className="px-6 pb-6 pl-16 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
               {item.a}
             </div>
           </motion.details>
         ))}
       </div>

       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.5 }}
         className="mt-16 text-center bg-gradient-to-br from-neonBlue/10 to-neonPurple/10 p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
       >
          <h3 className="text-2xl font-bold text-white mb-4">پاسخ خود را پیدا نکردید؟</h3>
          <p className="text-gray-400 mb-8">تیم پشتیبانی فنی ما در تلگرام آماده حل مشکلات شماست.</p>
          <a href="https://t.me/Azadnet_support_01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-neonBlue text-black font-bold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:-translate-y-1">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
             ارتباط با ادمین
          </a>
       </motion.div>
    </div>
  );
};

export default SupportPage;