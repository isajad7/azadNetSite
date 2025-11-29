import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Clarity from '@microsoft/clarity';

// 👇 ایمپورت ابزارهای ورسل
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// Layouts & Pages
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import PrivacyPage from './pages/Privacy';
import SupportPage from './pages/Support';
import NotFound from './pages/NotFound';

const CLARITY_PROJECT_ID = "ub89u210sm";

// ScrollToTop Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    if(CLARITY_PROJECT_ID) Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-gray-200 selection:bg-neonBlue selection:text-black flex flex-col justify-between bg-darkBg">
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />

        {/* 👇 ابزارهای مانیتورینگ ورسل (هر دو کنار هم) */}
        <SpeedInsights />
        <Analytics />
        
      </div>
    </Router>
  );
}

export default App;