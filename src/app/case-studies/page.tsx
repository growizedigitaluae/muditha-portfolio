"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, Filter, Briefcase, BarChart3, Globe, FolderOpen } from "lucide-react";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "branding", name: "Brand Identity" },
    { id: "web", name: "Next.js Web Development" },
    { id: "marketing", name: "Growth Marketing" }
  ];

  const projects = [
    /* ================================================================= */
    /* CATEGORY: BRAND IDENTITY                                          */
    /* ================================================================= */
    {
      title: "Al Safa Industrial Brand Realignment",
      client: "Al Safa Lubricants",
      category: "branding",
      tags: ["Industrial Branding", "Packaging Design", "Enterprise Identity"],
      description: "Transforming heavy industrial manufacturing concepts into an elite, high-end visual corporate identity system tailored for global trade markets.",
      image: "/case-safa-01.webp",
      link: "/case-studies/al-safa"
    },
    {
      title: "Luitage Premium Tea Artisanal Brand Architecture",
      client: "Luitage Tea",
      category: "branding",
      tags: ["Luxury Packaging", "Visual Storytelling", "Brand Guidelines"],
      description: "Developing robust visual languages and premium package design frameworks to cultivate absolute enterprise market trust within the high-end consumer tea export sector.",
      image: "/case-luitage.webp",
      link: "/case-studies/luitage-tea"
    },

    /* ================================================================= */
    /* CATEGORY: NEXT.JS WEB DEVELOPMENT                                 */
    /* ================================================================= */
    {
      title: "Sauda B2B Wholesale Digital Ecosystem",
      client: "Sauda Abaya B2B Export",
      category: "web",
      tags: ["Next.js Architecture", "Tailwind CSS", "High-Performance Grid"],
      description: "Architecting a rapid, ultra-performant Next.js digital platform engineered to showcase premium global inventory to international wholesale distributors without platform bloat.",
      image: "/case-sauda-web-01.webp",
      link: "/case-studies/sauda-web"
    },
    {
      title: "Texlubricant Enterprise Performance Engine",
      client: "Texlubricant",
      category: "web",
      tags: ["Next.js", "SEO Optimization", "Cinematic Motion UI"],
      description: "Deploying a highly optimized, lightning-fast dynamic interface built with semantic code blueprints to ensure flawless organic search visibility and premium asset presentation.",
      image: "/next -js-webapp.webp",
      link: "/case-studies/texlubricant-web"
    },

    /* ================================================================= */
    /* CATEGORY: GROWTH MARKETING                                        */
    /* ================================================================= */
    {
      title: "Regal Corporate Asset Marketing Pipeline",
      client: "Regal Group of Companies",
      category: "marketing",
      tags: ["Lead Optimization", "B2B Campaigns", "Conversion Automations"],
      description: "Formulating end-to-end synchronized digital acquisition blueprints and performance campaigns built to secure qualified corporate inbound traffic pipelines.",
      image: "/packaging.webp",
      link: "/case-studies/regal-group"
    },
    {
      title: "Sauda Abaya Cross-Channel Acquisition System",
      client: "Sauda Abaya B2B Export",
      category: "marketing",
      tags: ["Performance Marketing", "Audience Targeting", "ROI Mandate"],
      description: "Designing a synchronized cross-channel lead generation framework that optimized high-value wholesale client acquisition across global channels.",
      image: "/gallery-graphic-01.webp",
      link: "/case-studies/sauda-marketing"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-4 sm:px-8 lg:px-16 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white scroll-smooth antialiased overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* ================================================================= */}
          {/* 1. HERO HEADER SECTION                                            */}
          {/* ================================================================= */}
          <section className="flex flex-col md:flex-row items-start justify-between gap-8 w-full mb-20 border-b border-slate-800 pb-12 relative z-10">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#FF5A09]">
                <FolderOpen size={11} />
                <span>Proven Case History</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-none">
                Case <span className="text-[#FF5A09]">Studies</span>
              </h1>
            </div>
            <div className="w-full md:w-1/2 md:pt-6">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-normal">
                An analytical review detailing conversion-driven web engines, premium asset alignment, and high-impact corporate design frameworks optimized for the enterprise landscape.
              </p>
            </div>
          </section>

          {/* ================================================================= */}
          {/* 2. FILTER ENGINE INTERACTIVE INTERFACE                             */}
          {/* ================================================================= */}
          <section className="flex flex-wrap items-center gap-2.5 mb-16 w-full relative z-20">
            <div className="flex items-center text-slate-500 mr-2 text-xs font-bold uppercase tracking-wider">
              <Filter size={13} className="mr-2 text-[#FF5A09]" />
              <span>Filter Engine:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 border ${
                    activeFilter === cat.id
                      ? "bg-[#FF5A09] text-white border-[#FF5A09] shadow-lg shadow-orange-500/10"
                      : "bg-[#111827] text-slate-400 border-slate-800/80 hover:border-slate-700/80 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* 3. ASYMMETRICAL CARD CONTAINER GRID WITH framer-motion ENGINES   */}
          {/* ================================================================= */}
          <motion.section 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="group bg-[#111827] rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl hover:border-[#FF5A09]/30 transition-all duration-500 flex flex-col h-full relative"
                >
                  {/* Media Preview Box */}
                  <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-800/60">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} Preview Framework`} 
                      fill 
                      className="object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Micro-Badge */}
                    <div className="absolute top-4 left-4 bg-[#0B0F19]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-800/80 shadow-md">
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">
                        {categories.find(c => c.id === project.category)?.name || project.category}
                      </p>
                    </div>
                  </div>

                  {/* Text Description Content Block */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest font-extrabold text-[#FF5A09]">{project.client}</p>
                        <h3 className="text-xl font-black text-white tracking-tight font-heading leading-tight group-hover:text-[#FF5A09] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Render Technical Matrix Tokens */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="bg-slate-900 text-slate-400 text-[10px] font-semibold px-3 py-1 rounded-lg border border-slate-800/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Anchor */}
                    <Link 
                      href={project.link}
                      className="pt-5 border-t border-slate-800/60 flex items-center justify-between group/link pointer-events-auto cursor-pointer"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-white group-hover/link:text-[#FF5A09] transition-colors duration-300">
                        Explore Implementation
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-center text-white group-hover/link:bg-[#FF5A09] group-hover/link:border-[#FF5A09] group-hover/link:text-white transition-all duration-300 shadow-xl">
                        <ArrowUpRight size={14} className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 duration-300" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.section>

          {/* ================================================================= */}
          {/* 4. BOTTOM METRICS ARCHITECTURE BANNER                             */}
          {/* ================================================================= */}
          <section className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#111827] text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800/80">
            <div className="space-y-4 flex flex-col justify-between">
              <Briefcase className="text-[#FF5A09]" size={24} />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-heading text-white">Absolute Precision</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Converting technically dense heavy-industry blueprints into clear, world-class professional asset standards.</p>
              </div>
            </div>
            <div className="space-y-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800/60 pt-6 md:pt-0 md:pl-8">
              <BarChart3 className="text-purple-400" size={24} />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-heading text-white">Conversion Driven</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Backing modern aesthetic design frameworks with aggressive conversion structures and calculated B2B audience pipelines.</p>
              </div>
            </div>
            <div className="space-y-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800/60 pt-6 md:pt-0 md:pl-8">
              <Globe className="text-blue-400" size={24} />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-heading text-white">Modern Performance</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Building clean Next.js architectures that achieve flawless optimization metrics without compromising visual luxury assets.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

          </>
  );
}