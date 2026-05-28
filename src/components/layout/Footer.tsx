"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2538] text-[#FAF8F5] pt-20 pb-8 px-6 border-t border-slate-800 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
        
        {/* Column 1: Brand & Bio Statement */}
        <div className="md:col-span-5 space-y-5">
          <h4 className="font-heading text-2xl font-black tracking-tight text-white">
            MUDITHA<span className="text-[#FF5A09]">.</span>SRI
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
            Senior Graphic Designer & Digital Marketing Executive. Delivering elite corporate identity frameworks, high-conversion Next.js applications, and multi-channel lead validation pipelines optimized for the competitive UAE market.
          </p>
          
          {/* Robust Inline Social Media Integration */}
          <div className="flex items-center space-x-3 pt-2">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/muditha-dayasena-822565365/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF5A09] flex items-center justify-center text-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/GrowizeUAE" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF5A09] flex items-center justify-center text-white transition-all duration-300"
              aria-label="Facebook Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/971566004689" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF5A09] flex items-center justify-center text-white transition-all duration-300"
              aria-label="WhatsApp Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 8M14.05 6A5 5 0 0 1 18 10"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Matrices */}
        <div className="md:col-span-3 space-y-4">
          <p className="text-white text-xs font-extrabold uppercase tracking-widest font-heading">
            Navigation
          </p>
          <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
            <li><Link href="/about" className="hover:text-[#FF5A09] transition-colors">About Details</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#FF5A09] transition-colors">Featured Showcases</Link></li>
            {/* CHANGED THIS LINK ONLY */}
            <li><Link href="/case-studies" className="hover:text-[#FF5A09] transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-[#FF5A09] transition-colors">Get In Touch</Link></li>
          </ul>
        </div>

        {/* Column 3: Regional Operational Hub Details */}
        <div className="md:col-span-4 space-y-4">
          <p className="text-white text-xs font-extrabold uppercase tracking-widest font-heading">
            Corporate Hub
          </p>
          <ul className="space-y-3.5 text-sm text-slate-400 font-medium">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-[#FF5A09] mt-0.5 flex-shrink-0" />
              <span>Ajman, United Arab Emirates</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-[#FF5A09] flex-shrink-0" />
              <a href="mailto:hello@muditha.online" className="hover:text-[#FF5A09] transition-colors">hello@muditha.online</a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-[#FF5A09] flex-shrink-0" />
              <span>+971 56 600 4689</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Sub-Footer Copyright & Compliance Block */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
        <p>© {new Date().getFullYear()} Muditha.Sri,  All corporate and asset engineering rights reserved.</p>
        <div className="flex items-center space-x-6">
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}