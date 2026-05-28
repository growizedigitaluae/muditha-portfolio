"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowUpRight, 
  Palette, 
  Layers, 
  Megaphone, 
  Globe,
  Compass,
  X,
  Maximize2
} from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  accentClass: string;
}

export default function PortfolioPage() {
  // Lightbox dynamic tracking states
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { name: "Graphic Design", anchor: "#graphic-design", img: "/cat-graphic.webp", icon: <Palette size={16} /> },
    { name: "Brand Identity", anchor: "#brand-identity", img: "/cat-brand.webp", icon: <Layers size={16} /> },
    { name: "Digital Marketing", anchor: "#digital-marketing", img: "/cat-marketing.webp", icon: <Megaphone size={16} /> },
    { name: "Web Development", anchor: "#web-development", img: "/cat-web.webp", icon: <Globe size={16} /> },
  ];

  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-4 sm:px-8 lg:px-16 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white scroll-smooth antialiased overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* ================================================================= */}
          {/* 1. HERO SECTION: PREMIUM TWO-COLUMN ARCHITECTURE                 */}
          {/* ================================================================= */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-12 w-full mb-24 relative z-10">
            
            {/* Left Column: Headings & Strategic Context */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 space-y-4 flex-shrink-0"
            >
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-slate-300">
                <Compass size={12} className="text-[#FF5A09]" />
                <span>Engineered Artifacts</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-none">
                Muditha <span className="text-[#FF5A09]">Sri</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-400 tracking-tight leading-tight">
                Industrial Case Studies & Creative Deployments
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-xl pt-2">
                With over 15 years of deep-rooted expertise intersecting elite corporate design and performance-focused web development, I build high-impact asset ecosystems tailored explicitly for the competitive UAE market. My discipline focuses purely on absolute asset engineering—transforming heavy industrial blueprints into refined, world-class corporate identities that close enterprise pipelines.
              </p>
            </motion.div>
            
            {/* Right Column: Profile Shape Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2 flex justify-center md:justify-end items-center flex-shrink-0 relative"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Glowing Premium Backdrop Mesh */}
                <div className="absolute inset-0 text-[#FF5A09]/10 transform scale-110 blur-xl">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                    <path d="M44.7,-76.3C57.4,-69.1,67,-56.9,74.5,-43.5C82,-30.1,87.4,-15,86,-0.8C84.6,13.4,76.4,26.8,68.4,39.4C60.4,52,52.6,63.7,41.4,70.9C30.2,78.1,15.1,80.7,-0.4,81.4C-15.9,82.1,-31.8,80.9,-44.6,74.3C-57.4,67.6,-67,55.5,-74.6,41.9C-82.1,28.3,-87.6,13.2,-87.5,0.1C-87.3,-13.1,-81.4,-26.2,-73.6,-38C-65.7,-49.7,-55.8,-60.1,-43.6,-67.7C-31.5,-75.3,-15.7,-80.1,0.3,-80.5C16.3,-81,32.1,-83.4,44.7,-76.3Z" transform="translate(100, 100)" />
                  </svg>
                </div>
                {/* Profile Wrapper Frame */}
                <div className="absolute inset-2 rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 bg-[#111827]">
                  <Image 
                    src="/about-hero.jpg" 
                    alt="Muditha Sri Executive Creative Workspace Context"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ================================================================= */}
          {/* 2. MODERN IMAGE NAVIGATION CARDS                                  */}
          {/* ================================================================= */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-20 relative z-20">
            {categories.map((cat, idx) => (
              <Link 
                key={idx}
                href={cat.anchor}
                className="bg-[#111827] rounded-2xl p-3 pb-4 shadow-xl border border-slate-800/80 hover:border-[#FF5A09]/40 transition-all duration-300 group flex flex-col space-y-3"
              >
                {/* Top Image Preview Box with clean hover scale */}
                <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-xl overflow-hidden">
                  <Image 
                    src={cat.img} 
                    alt={`${cat.name} Category Preview`} 
                    fill 
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                {/* Bottom Anchor Link Linkage */}
                <div className="flex items-center justify-between px-1.5 pt-0.5">
                  <span className="text-slate-500 group-hover:text-[#FF5A09] transition-colors">{cat.icon}</span>
                  <h3 className="text-xs font-bold text-white font-heading tracking-tight group-hover:text-[#FF5A09] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </section>

          {/* Structural Geometric Grid Break Divider */}
          <div className="w-full h-px bg-slate-800/60 mb-20" />

          {/* ================================================================= */}
          {/* 3. INTERSTITIAL INTRODUCTORY HEADLINES                            */}
          {/* ================================================================= */}
          <section className="text-center space-y-3 mb-24 max-w-2xl mx-auto w-full">
            <p className="text-[#FF5A09] font-heading font-semibold text-xs tracking-widest uppercase">
              Production Matrix
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
              Proven Commercial Deployment Frameworks
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed px-4 font-normal">
              Explore live asset architecture outputs engineered to fulfill strict operational requirements, capture corporate search visibility, and accelerate conversion pipelines across the GCC region.
            </p>
          </section>

          {/* ================================================================= */}
          {/* 4. TRUE MASONRY GALLERY SYSTEMS WITH CLEAN VISUAL CARDS            */}
          {/* ================================================================= */}
          <div className="space-y-28 w-full">

            {/* GALLERY 01: GRAPHIC DESIGN */}
            <section id="graphic-design" className="scroll-mt-32 space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h3 className="text-sm font-black text-white uppercase tracking-widest font-heading">
                  Gallery 01 <span className="text-slate-600 mx-2">—</span> Graphic Design Architecture
                </h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Print & Packaging Assets</span>
              </div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 [column-fill:_balance] w-full">
                
                {/* Case Card Sample 1 */}
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-graphic-1.webp",
                    alt: "Industrial Asset Labeling Variant",
                    category: "Lubricant Engineering",
                    title: "Can Packaging Label Configuration",
                    accentClass: "text-[#FF5A09]"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[3/4] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-graphic-1.webp" alt="Industrial Asset Labeling Variant" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#FF5A09] uppercase">Lubricant Engineering</p>
                      <h4 className="text-sm font-bold text-white mt-1">Can Packaging Label Configuration</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                {/* Case Card Sample 2 */}
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-graphic-2.webp",
                    alt: "Corporate Specification Brochure Layout",
                    category: "Print Production",
                    title: "Multi-page Corporate Literature",
                    accentClass: "text-purple-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-square shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-graphic-2.webp" alt="Corporate Specification Brochure Layout" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Print Production</p>
                      <h4 className="text-sm font-bold text-white mt-1">Multi-page Corporate Literature</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                {/* Case Card Sample 3 */}
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-graphic-3.webp",
                    alt: "Vector Asset Assembly Render",
                    category: "Asset Engineering",
                    title: "Industrial High-Fidelity Vector Lineage",
                    accentClass: "text-[#FF5A09]"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[16/10] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-graphic-3.webp" alt="Vector Asset Assembly Render" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#FF5A09] uppercase">Asset Engineering</p>
                      <h4 className="text-sm font-bold text-white mt-1">Industrial High-Fidelity Vector Lineage</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                {/* Case Card Sample 4 */}
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-brand-1.webp",
                    alt: "Commercial Trade Marketing Signage",
                    category: "Trade Advertising",
                    title: "Large-Format Point of Purchase Matrix",
                    accentClass: "text-blue-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[2/3] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-brand-1.webp" alt="Commercial Trade Marketing Signage" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Trade Advertising</p>
                      <h4 className="text-sm font-bold text-white mt-1">Large-Format Point of Purchase Matrix</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

              </div>
            </section>

            {/* GALLERY 02: BRAND IDENTITY */}
            <section id="brand-identity" className="scroll-mt-32 space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h3 className="text-sm font-black text-white uppercase tracking-widest font-heading">
                  Gallery 02 <span className="text-slate-600 mx-2">—</span> Brand Identity Systems
                </h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enterprise Brand Guidelines</span>
              </div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 [column-fill:_balance] w-full">
                
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-brand-2.webp",
                    alt: "Asset frame",
                    category: "Corporate Books",
                    title: "Enterprise Guideline Architectures",
                    accentClass: "text-purple-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-square shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-brand-2.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Corporate Books</p>
                      <h4 className="text-sm font-bold text-white mt-1">Enterprise Guideline Architectures</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-marketing-1.webp",
                    alt: "Asset frame",
                    category: "Asset Ecosystems",
                    title: "Unified Logotype Implementations",
                    accentClass: "text-[#FF5A09]"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[4/5] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-marketing-1.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#FF5A09] uppercase">Asset Ecosystems</p>
                      <h4 className="text-sm font-bold text-white mt-1">Unified Logotype Implementations</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-marketing-2.webp",
                    alt: "Asset frame",
                    category: "Stationery Systems",
                    title: "Premium Corporate Collateral Suite",
                    accentClass: "text-emerald-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[16/9] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-marketing-2.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Stationery Systems</p>
                      <h4 className="text-sm font-bold text-white mt-1">Premium Corporate Collateral Suite</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-web-1.webp",
                    alt: "Asset frame",
                    category: "Visual Foundations",
                    title: "Industrial Brand Book Guidelines",
                    accentClass: "text-blue-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[3/4] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-web-1.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Visual Foundations</p>
                      <h4 className="text-sm font-bold text-white mt-1">Industrial Brand Book Guidelines</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

              </div>
            </section>

            {/* GALLERY 03: DIGITAL MARKETING */}
            <section id="digital-marketing" className="scroll-mt-32 space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h3 className="text-sm font-black text-white uppercase tracking-widest font-heading">
                  Gallery 03 <span className="text-slate-600 mx-2">—</span> Digital Marketing Matrices
                </h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Performance Campaigns</span>
              </div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 [column-fill:_balance] w-full">
                
                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-marketing-3.webp",
                    alt: "Asset frame",
                    category: "Lead Funnels",
                    title: "LinkedIn Campaign Acquisition Assets",
                    accentClass: "text-orange-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[4/3] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-marketing-3.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">Lead Funnels</p>
                      <h4 className="text-sm font-bold text-white mt-1">LinkedIn Campaign Acquisition Assets</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-web-2.webp",
                    alt: "Asset frame",
                    category: "Performance Social",
                    title: "Multichannel Campaign Ad Visuals",
                    accentClass: "text-blue-400"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-[2/3] shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-web-2.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Performance Social</p>
                      <h4 className="text-sm font-bold text-white mt-1">Multichannel Campaign Ad Visuals</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveImage({
                    src: "/gallery-graphic-01.webp",
                    alt: "Asset frame",
                    category: "B2B Tracking",
                    title: "Wholesale Distributor Creative Inbounds",
                    accentClass: "text-[#FF5A09]"
                  })}
                  className="break-inside-avoid bg-[#111827] rounded-2xl overflow-hidden relative group aspect-square shadow-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/gallery-graphic-01.webp" alt="Asset frame" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 size={12} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end bg-slate-950/80 p-4 rounded-xl backdrop-blur-sm border border-slate-800/50">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#FF5A09] uppercase">B2B Tracking</p>
                      <h4 className="text-sm font-bold text-white mt-1">Wholesale Distributor Creative Inbounds</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"><ArrowUpRight size={14} /></div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>

      {/* ================================================================= */}
      {/* 5. LIGHTBOX MODAL OVERLAY ARCHITECTURE                             */}
      {/* ================================================================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12"
          >
            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="text-left">
                <span className={`text-[10px] font-black uppercase tracking-widest ${activeImage.accentClass}`}>
                  {activeImage.category}
                </span>
                <h3 className="text-base font-bold text-white tracking-tight mt-0.5">{activeImage.title}</h3>
              </div>
              <button 
                onClick={() => setActiveImage(null)}
                className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Stage View Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0F19]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={activeImage.src} 
                alt={activeImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}