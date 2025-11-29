import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-gray-300"
    >
      <h1 className="text-4xl font-black text-white mb-8 border-b border-white/10 pb-4">
        <span className="text-neonBlue">Privacy</span> Policy
      </h1>
      
      <div className="space-y-8 text-justify leading-relaxed bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3 flex items-center gap-2">
            <span className="w-2 h-8 bg-neonBlue rounded-full"></span>
            1. Introduction
          </h2>
          <p>
            Welcome to AzadNet ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a secure experience while using our VPN application. 
            This Privacy Policy explains how we handle your data in compliance with Google Play Developer Policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonPurple mb-3 flex items-center gap-2">
            <span className="w-2 h-8 bg-neonPurple rounded-full"></span>
            2. No-Logs Policy
          </h2>
          <p className="font-bold text-white mb-2">We adhere to a strict No-Logs Policy.</p>
          <div className="bg-black/40 p-4 rounded-xl border-l-4 border-neonPurple">
            <p>This means we explicitly do NOT:</p>
            <ul className="list-disc pr-6 mt-2 space-y-1 text-sm">
              <li>Track, store, or share your browsing history.</li>
              <li>Collect traffic destination, data content, or DNS queries.</li>
              <li>Store your original IP address after the VPN session ends.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3 flex items-center gap-2">
             <span className="w-2 h-8 bg-neonBlue rounded-full"></span>
             3. Use of VpnService
          </h2>
          <p>
            Our application utilizes the Android <code>VpnService</code> API to create a secure, encrypted tunnel (using V2Ray core) for your internet traffic. 
            This is the core functionality of AzadNet, allowing us to protect your data from interception on public networks and censorship.
            The VpnService is used strictly for routing traffic locally on your device to our secure servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neonBlue mb-3 flex items-center gap-2">
             <span className="w-2 h-8 bg-neonBlue rounded-full"></span>
             4. Data Security
          </h2>
          <p>
            We use industry-standard encryption protocols (VMess, VLESS, Trojan) to protect your data during transmission. While no service can guarantee 100% security, we implement robust measures to safeguard your connection against surveillance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us via:
            <br />Telegram Support: <a href="https://t.me/Azadnet_support_01" className="text-neonBlue hover:underline">@Azadnet_support_01</a>
          </p>
        </section>
        
        <p className="text-xs text-gray-500 mt-8 pt-4 border-t border-white/10">Last Updated: October 2025 | AzadNet Team</p>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;