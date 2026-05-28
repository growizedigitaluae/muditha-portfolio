"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Layers, 
  Cpu, 
  Printer, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Palette,
  Megaphone,
  CheckCircle2,
  Briefcase,
  Clock,
  Check
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-6 md:px-12 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white antialiased overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* ================================================================= */}
          {/* 1. HERO SECTION WITH CINEMATIC SPLIT ARCHITECTURE                 */}
          {/* ================================================================= */}
          <section className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full mb-28 relative z-10">
            
            {/* Left Column: Headings & Executive Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-7/12 space-y-6 flex-shrink-0"
            >
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-slate-300">
                <Sparkles size={12} className="text-[#FF5A09]" />
                <span>Executive Briefing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-tight">
                High-End Design<span className="text-[#FF5A09]">.</span><br />
                Data-Driven Growth.
              </h1>
              <p className="text-base sm:text-lg text-slate-400 font-normal max-w-xl leading-relaxed">
                Fusing sophisticated visual identity systems with performance web structures and aggressive multi-channel digital marketing matrices to dominate the UAE corporate landscape Muditha Sri is a Senior Graphic Designer and Digital Marketing Executive., The user has over 15 years of professional experience in branding, advertising, web development, and digital campaigns., The user prioritizes high-performance, minimalist web development using Next.js, Astro, Tailwind CSS, and Framer Motion to ensure speed and SEO optimization.
              </p>
            </motion.div>
            
            {/* Right Column: Profile Frame Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-5/12 flex justify-center lg:justify-end items-center flex-shrink-0 relative"
            >
              {/* Luxury Glowing Motif Behind the Image */}
              <div className="absolute w-[300px] aspect-square bg-orange-500/10 rounded-full blur-3xl z-0"></div>
              
              <div className="relative w-full max-w-sm aspect-[4/5] bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 group z-10">
                <Image 
                  src="/about-hero.jpg" 
                  alt="Muditha Sri Professional Profile Showcase"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-in-out scale-105 group-hover:scale-100 brightness-[0.85] contrast-[1.05]"
                />
                {/* Sleek bottom card overlay for structural context */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F19]/90 backdrop-blur-md p-5 rounded-2xl border border-slate-800/80 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-widest font-extrabold text-[#FF5A09]">Operational Focus</p>
                  <p className="text-xs font-bold text-white mt-1 leading-snug">Corporate Identity & Conversion Marketing Systems</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ================================================================= */}
          {/* 2. GLOWING PERFORMANCE DATA SUMMARY BAR                           */}
          {/* ================================================================= */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#111827] border border-slate-800/80 rounded-3xl p-8 mb-28 shadow-2xl relative z-20">
            <div className="space-y-1 text-center md:text-left md:border-r md:border-slate-800/80 md:last:border-0">
              <p className="text-3xl font-black text-white font-heading tracking-tight">15+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Years Active Mastery</p>
            </div>
            <div className="space-y-1 text-center md:text-left md:border-r md:border-slate-800/80">
              <p className="text-3xl font-black text-white font-heading tracking-tight">100%</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Industrial Brand Alignment</p>
            </div>
            <div className="space-y-1 text-center md:text-left md:border-r md:border-slate-800/80">
              <p className="text-3xl font-black text-[#FF5A09] font-heading tracking-tight">Next.js</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Engineered Architecture</p>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <p className="text-3xl font-black text-white font-heading tracking-tight">ROI</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Digital Campaign Mandate</p>
            </div>
          </section>

          {/* ================================================================= */}
          {/* 3. PROFESSIONAL SUMMARY (CAREER STORY)                            */}
          {/* ================================================================= */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-28 pb-16 border-b border-slate-800/60">
            <div className="md:col-span-4">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-heading mt-1">
                The Career Narrative
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-base text-slate-400 leading-relaxed font-normal">
              <p>
                With over 15 years of deep-rooted expertise intersecting elite corporate design, performance web engineering, and highly targeted digital marketing matrices, I build high-impact asset ecosystems tailored explicitly for the competitive UAE market [cite: Muditha Sri is a Senior Graphic Designer and Digital Marketing Executive., The user has over 15 years of professional experience in branding, advertising, web development, and digital campaigns., The user prioritizes high-performance, minimalist web development using Next.js, Astro, Tailwind CSS, and Framer Motion to ensure speed and SEO optimization.]. My discipline focuses purely on absolute asset engineering—transforming raw, heavy industrial concepts into refined, world-class graphic languages that instill market trust and accelerate high-value enterprise pipelines.
              </p>
              <p>
                As a <strong className="text-white font-semibold">Senior Graphic Designer</strong>, my philosophy maps aesthetic precision to clear business goals, producing high-fidelity advertising materials and cohesive corporate identity systems. As a <strong className="text-white font-semibold">Digital Marketing Executive</strong>, I ensure those assets don't just sit there beautifully—I back them with strong search positioning, automated conversion setups, and cross-channel B2B visibility strategies to generate actionable corporate inbound traffic flows.
              </p>
            </div>
          </section>

          {/* ================================================================= */}
          {/* 4. CORE STRENGTHS CAPABILITY GRID                                 */}
          {/* ================================================================= */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-28">
            <div className="md:col-span-4">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-heading">
                Core Capabilities
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Highlighted Core Graphic Design Card */}
              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 hover:border-[#FF5A09]/40 transition-all duration-300 space-y-4 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Palette className="text-purple-400 relative z-10" size={24} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading relative z-10">Graphic Design & Art Direction</h3>
                <p className="text-xs text-slate-400 leading-relaxed relative z-10">Crafting high-fidelity, world-class vector architectures, luxury corporate presentation models, and high-impact digital design assets.</p>
              </div>

              {/* Highlighted Core Digital Marketing Card */}
              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 hover:border-[#FF5A09]/40 transition-all duration-300 space-y-4 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Megaphone className="text-[#FF5A09] relative z-10" size={24} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading relative z-10">Performance Digital Marketing</h3>
                <p className="text-xs text-slate-400 leading-relaxed relative z-10">Formulating end-to-end client acquisition blueprints, high-yielding LinkedIn lead pipelines, performance advertising, and rigorous audience split testing.</p>
              </div>

              {/* Standard Core Matrix Components */}
              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 shadow-xl space-y-4">
                <Layers className="text-slate-500" size={22} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">Industrial Branding</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Translating highly technical, complex heavy-industry verticals into premium, scalable design architectures and visual frameworks.</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 shadow-xl space-y-4">
                <Printer className="text-slate-500" size={22} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">Print Production</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Absolute precision in high-end collateral engineering, large-format configurations, layout design, and technical material output.</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 shadow-xl space-y-4">
                <Globe className="text-slate-500" size={22} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">Website Management</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Architecting rapid-loading Next.js dynamic architectures integrated with premium, modern animations and absolute SEO infrastructure.</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#111827] border border-slate-800/80 shadow-xl space-y-4">
                <TrendingUp className="text-slate-500" size={22} />
                <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">Campaign Execution</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Formulating and coordinating targeted B2B and B2C digital operations built entirely to secure premium lead generation pipelines.</p>
              </div>

              {/* High-Performance AI Box Integration */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111827] to-[#1a1625] border border-purple-500/20 sm:col-span-2 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Cpu className="text-purple-400" size={22} />
                    <h3 className="text-sm font-black text-white uppercase tracking-wider font-heading">AI-Assisted Workflows</h3>
                  </div>
                  <span className="bg-purple-500/10 text-purple-400 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest border border-purple-500/20">Efficiency Multiplier</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                  Leveraging the absolute leading edge of AI-driven tools for high-speed code generation support, algorithmic performance tuning, programmatic audience mapping, and lightning-fast visual asset iterations to maximize execution speeds.
                </p>
              </div>

            </div>
          </section>

          {/* ================================================================= */}
          {/* 5. EXPERIENCES JOURNEY TIMELINE                                   */}
          {/* ================================================================= */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800/60">
            
            <div className="md:col-span-4 space-y-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 font-heading">
                Experience Journey
              </h2>
              
              {/* Secondary Cinematic Context Image */}
              <div className="hidden md:block relative w-full aspect-[3/4] bg-[#111827] rounded-3xl overflow-hidden border border-slate-800/80 group shadow-2xl">
                <Image 
                  src="/about-corporate.jpg" 
                  alt="Corporate Media Deployment Graphics"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-12">
              
              {/* Timeline Item 1: CURRENT POSITION */}
              <div className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#FF5A09] ring-4 ring-orange-950" />
                
                <div className="space-y-5">
                  <div>
                    <span className="bg-[#FF5A09]/10 text-[#FF5A09] text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded border border-[#FF5A09]/20">Active Position</span>
                    <h3 className="text-xl font-extrabold text-white font-heading tracking-tight mt-2.5">Senior Graphic Designer & Digital Marketing Executive</h3>
                    <p className="text-sm text-slate-400 font-semibold">Regal Group of Companies</p>
                  </div>
                  
                  <ul className="space-y-3.5 text-xs text-slate-400">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mr-3 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span><strong className="text-white font-semibold">Graphic Design:</strong> Engineering high-fidelity branding components, creative corporate ad mockups, and complex vector layouts across physical and interactive touchpoints.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mr-3 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span><strong className="text-white font-semibold">Campaigns:</strong> Launching highly synchronized performance marketing operations to boost enterprise engagement metrics within the local commercial sectors.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mr-3 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span><strong className="text-white font-semibold">Websites:</strong> Directing front-end user experience developments, deploying highly performant web applications to preserve optimal speed, scalability, and clean visibility.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mr-3 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span><strong className="text-white font-semibold">Branding:</strong> Designing and protecting robust multi-channel corporate asset consistency parameters ensuring pristine narrative tone alignment.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mr-3 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span><strong className="text-white font-semibold">Marketing Materials:</strong> Assembling custom enterprise profile print deliverables, high-end lookbooks, and intricate layout matrices optimized for multi-region distributions.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 2: PREVIOUS COMPANIES */}
              <div className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950" />
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-white font-heading tracking-tight">Creative Designer & Branding Consultant</h3>
                    <p className="text-xs text-[#FF5A09] font-bold uppercase tracking-wider mt-0.5">Al Safa Lubricants | Volvic Lubricants</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                     Spearheaded complex visual identities, specialized industrial package designs, and localized regional campaigns within the lubricant export trade sector. Created marketing collateral architectures that enhanced wholesale distributor acquisition metrics across the Middle East regions.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3: FREELANCE */}
              <div className="relative pl-8 border-l border-slate-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950" />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-white font-heading tracking-tight">Independent Digital Solutions Provider</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Freelance Client Deployments</p>
                  </div>
                  
                  <ul className="space-y-3 text-xs text-slate-400">
                    <li className="flex items-start">
                      <span className="text-[#FF5A09] mr-3 font-black text-sm leading-none">•</span>
                      <span><strong className="text-white font-semibold">Web Development:</strong> Crafting tailored, highly responsive frontend layouts focused on extreme performance optimization and intuitive user experiences.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF5A09] mr-3 font-black text-sm leading-none">•</span>
                      <span><strong className="text-white font-semibold">Branding:</strong> Ideating and launching fresh identity definitions, logo structures, and design foundations for regional startups and expanding enterprises.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF5A09] mr-3 font-black text-sm leading-none">•</span>
                      <span><strong className="text-white font-semibold">Digital Marketing:</strong> Auditing and calibrating search positioning parameters and performance marketing systems to generate measurable corporate inbound traffic flows.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ================================================================= */}
          {/* 6. CLOSING CALL TO ACTION                                         */}
          {/* ================================================================= */}
          <section className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-extrabold text-white font-heading tracking-tight">Ready to discuss your brand pipeline?</h4>
              <p className="text-xs text-slate-500 font-normal">Let's coordinate an optimized strategic approach for your next project deployment.</p>
            </div>
            <Link 
              href="/contact"
              className="group inline-flex items-center space-x-3 bg-[#FF5A09] hover:bg-[#E04F08] text-white text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-full transition-all shadow-lg shadow-orange-500/10"
            >
              <span>Initiate Briefing</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </section>

        </div>
      </main>

       </>
  );
}