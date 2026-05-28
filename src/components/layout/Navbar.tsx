"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle subtle background transitions on window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      
      {/* ================================================================= */}
      {/* TOP UTILITY BAR (KEPT LIGHT THEME AS REQUESTED)                   */}
      {/* ================================================================= */}
      <div className="w-full bg-[#111420] text-slate-300 text-xs py-2 px-6 border-b border-slate-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left Side Connect Details */}
          <div className="flex items-center space-x-5 font-medium">
            <a href="mailto:hello@muditha.online" className="flex items-center space-x-1.5 hover:text-[#FF5A09] transition-colors">
              <Mail size={13} className="text-[#FF5A09]" />
              <span>hello@muditha.online</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="tel:+971566004689" className="flex items-center space-x-1.5 hover:text-[#FF5A09] transition-colors">
              <Phone size={13} className="text-[#FF5A09]" />
              <span>+971 56 600 4689</span>
            </a>
          </div>

          {/* Right Side Action Indicators & Authentic WhatsApp Logo Link */}
          <div className="flex items-center space-x-4 font-semibold tracking-wide">
            <a 
              href="https://wa.me/971566004689" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1.5 text-[#25D366] hover:text-[#20ba5a] transition-colors"
            >
              {/* Authentic Inline WhatsApp SVG Logo Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="flex-shrink-0"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 1.98 14.16 .954 11.53.954c-5.441 0-9.865 4.371-9.87 9.8c-.002 1.748.476 3.456 1.385 4.975l-.946 3.454 3.548-.929zM17.46 14.73c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">Open to UAE Opportunities</span>
          </div>

        </div>
      </div>

      {/* ================================================================= */}
      {/* PRINCIPAL NAVIGATION BAR (CHANGED TO DARK THEME)                  */}
      {/* ================================================================= */}
      <div className={`w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-[#0B0F19]/95 backdrop-blur-md border-slate-800/60 shadow-lg py-3" 
          : "bg-[#0B0F19]/80 backdrop-blur-sm border-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* Identity Core Logo (White & Orange Split Customization) */}
          <Link href="/" className="font-heading text-xl font-black tracking-tight text-white select-none group">
            MUDITHA<span className="text-[#FF5A09] group-hover:text-white transition-colors">.SRI</span>
          </Link>

          {/* Premium Navigation Menu (White Links) */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-light uppercase tracking-widest text-white">
            <Link href="/" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/portfolio" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/case-studies" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>Case Studies</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/resume" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>Resume</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="relative py-1 group hover:text-[#FF5A09] transition-colors duration-300">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A09] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Call to Action CTA Trigger */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="group inline-flex items-center space-x-2 bg-[#FF5A09] hover:bg-[#E04F08] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-orange-500/5"
            >
              <span>Let's Talk</span>
              <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Responsive Mobile Hamburger Button (Adjusted for Dark Theme Visibility) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-slate-300 p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* ================================================================= */}
      {/* MOBILE EXPANDED MENU DRAWER (CHANGED TO DARK THEME)              */}
      {/* ================================================================= */}
      {isOpen && (
        <div className="w-full bg-[#0B0F19] border-b border-slate-800/80 px-6 py-6 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top duration-200">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            Portfolio
          </Link>
          <Link 
            href="/case-studies" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            Case Studies
          </Link>
          <Link 
            href="/resume" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            Resume
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-light uppercase tracking-widest text-white hover:text-[#FF5A09] py-1.5 transition-colors border-b border-slate-900"
          >
            Contact
          </Link>
          
          <div className="pt-2">
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block bg-[#FF5A09] hover:bg-[#E04F08] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}