import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-sm font-medium hover:text-neonBlue transition-colors">خانه</Link>
            <Link to="/support" className="text-sm font-medium hover:text-neonBlue transition-colors">آموزش و پشتیبانی</Link>
            <Link to="/privacy" className="text-sm font-medium hover:text-gray-300 transition-colors text-gray-500">حریم خصوصی</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </div>
      
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
};

export default Navbar;