import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 pt-20 overflow-hidden relative">
      
      {/* Background Glitch Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-neonPurple pointer-events-none select-none blur-sm"
      >
        404
      </motion.div>

      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 z-10"
      >
        مسیر را گم کرده‌اید؟
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 mb-8 max-w-md mx-auto z-10 text-lg"
      >
        متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-10"
      >
        <Link to="/" className="inline-flex items-center gap-2 bg-neonBlue text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          بازگشت به صفحه اصلی
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;