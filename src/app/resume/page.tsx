"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Download, 
  Briefcase, 
  Layers, 
  ArrowUpRight,
  CheckCircle2,
  FileText
} from "lucide-react";

export default function ResumePage() {
  // Core Skill Categories
  const skillsMatrix = [
    {
      category: "Creative Brand Architecture",
      items: ["Corporate Identity Systems", "Industrial Packaging Labeling", "Corporate Profiles & Brochures", "Advertising Collateral", "Vector Asset Engineering"]
    },
    {
      category: "Digital Growth & Automation",
      items: ["B2B Lead Generation Funnels", "Multi-Channel Campaign Strategy", "Social Media Matrixing", "Conversion Tracking Metrics", "SEO Optimization Support"]
    },
    {
      category: "Modern Web Infrastructure",
      items: ["Next.js Architecture", "Tailwind CSS Layouts", "Responsive Frontend Interface", "Framer Motion Animations", "WordPress Custom Systems"]
    }
  ];

  // Professional History Timeline Entries
  const experienceTimeline = [
    {
      role: "Senior Graphic Designer & Digital Marketing Executive",
      company: "Regal Group of Companies",
      location: "United Arab Emirates",
      period: "Present",
      description: "Directing high-fidelity corporate brand alignment, industrial product assets, and conversion-optimized lead capture frameworks across the GCC region."
    },
    {
      role: "Graphic Designer / IT Coordinator",
      company: "Al Safa",
      location: "United Arab Emirates",
      period: "2 Years",
      description: "Managed end-to-end industrial visual positioning, corporate marketing materials, and internal digital network systems. Coordinated cross-departmental creative operations and optimized localized IT architectures to maximize corporate productivity."
    },
    {
      role: "Corporate Creative & Digital Strategy Director",
      company: "Enterprise Design & Media Frameworks",
      location: "UAE & International",
      period: "15+ Years Combined Experience",
      description: "Over a decade and a half of dedicated expertise engineering high-end design assets, print literature, and multi-channel performance digital campaigns for corporate ecosystems."
    }
  ];

  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="bg-[#0B0F19] text-slate-200 antialiased pt-36 pb-24 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white scroll-smooth">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* ================================================================= */}
          {/* HEADER ACTION BLOCK                                               */}
          {/* ================================================================= */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#FF5A09]">
                <FileText size={11} />
                <span>Executive Profile</span>
              </div>
              <h1 className="font-heading text-4xl font-black text-white tracking-tight leading-none sm:text-5xl">
                Professional <span className="text-[#FF5A09]">Ledger</span>
              </h1>
              <p className="text-sm text-slate-400 max-w-xl font-normal leading-relaxed">
                A 15-year record of corporate brand transformations, high-performance web systems, and strategic lead validation systems built for the UAE marketplace.
              </p>
            </div>
            
            <div className="shrink-0">
              <a 
                href="/muditha-resume.pdf" 
                download="Muditha_Sri_Resume.pdf"
                className="inline-flex items-center space-x-2.5 bg-[#FF5A09] hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 text-xs tracking-widest uppercase shadow-xl shadow-orange-500/10 group"
              >
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Executive CV</span>
              </a>
            </div>
          </div>

          {/* ================================================================= */}
          {/* CONNECTIVITY MATRIX (SOCIAL PROFILES)                             */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 pb-12">
            
            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/muditha-dayasena-822565365/" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#111827] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between group hover:border-[#FF5A09]/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-slate-800/60 flex items-center justify-center text-[#FF5A09]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs text-white uppercase tracking-wide">LinkedIn Network</h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Professional Briefings</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-[#FF5A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/GrowizeUAE" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#111827] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between group hover:border-[#FF5A09]/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-slate-800/60 flex items-center justify-center text-[#FF5A09]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs text-white uppercase tracking-wide">Facebook Channel</h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Regional Campaigns</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-[#FF5A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* WhatsApp Core */}
            <a 
              href="https://wa.me/971566004689" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-[#111827] border border-slate-800/80 rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-slate-800/60 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  <span className="mb-1.5">•</span>
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs text-white uppercase tracking-wide">WhatsApp Core</h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Instant UAE Pipeline</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            
            {/* ================================================================= */}
            {/* LEFT COLUMN: EXPERIENCE & BACKGROUND                             */}
            {/* ================================================================= */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-8">
                <div className="flex items-center space-x-3 text-white">
                  <Briefcase size={18} className="text-[#FF5A09]" />
                  <h2 className="font-heading text-base font-black uppercase tracking-wider">
                    Corporate Milestones
                  </h2>
                </div>

                <div className="relative border-l border-slate-800/80 pl-6 ml-2.5 space-y-10">
                  {experienceTimeline.map((exp, idx) => (
                    <div key={idx} className="relative space-y-2">
                      <div className="absolute left-[-30.5px] top-1.5 w-2 h-2 rounded-full bg-[#0B0F19] border-2 border-[#FF5A09]" />
                      
                      <div>
                        <span className="text-[9px] font-black text-[#FF5A09] tracking-widest uppercase bg-orange-500/10 border border-[#FF5A09]/20 rounded-md px-2.5 py-1 inline-block">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-lg font-black text-white tracking-tight leading-tight pt-1">
                        {exp.role}
                      </h3>
                      
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {exp.company} <span className="text-slate-700 mx-1.5">•</span> {exp.location}
                      </p>
                      
                      <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed pt-1.5">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: TECHNICAL SKILLS TOOLKIT                           */}
            {/* ================================================================= */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-[#111827] border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center space-x-3 text-white pb-3 border-b border-slate-800/60">
                  <Layers size={16} className="text-[#FF5A09]" />
                  <h2 className="font-heading text-xs font-black uppercase tracking-wider">
                    Core Asset Toolkit
                  </h2>
                </div>

                {skillsMatrix.map((matrix, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-heading">
                      {matrix.category}
                    </h3>
                    <ul className="space-y-2">
                      {matrix.items.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2.5 text-xs text-slate-300 font-normal leading-normal">
                          <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < skillsMatrix.length - 1 && <div className="h-px bg-slate-800/40 pt-3" />}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}