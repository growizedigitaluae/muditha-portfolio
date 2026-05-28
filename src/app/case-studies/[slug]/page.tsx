"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Zap 
} from "lucide-react";

// Technical Data Dictionary for Dynamic Slugs
const CASE_STUDIES_DATA: Record<string, any> = {
  "al-safa": {
    client: "Al Safa Lubricants",
    title: "Al Safa Industrial Brand Realignment",
    subtitle: "Transforming heavy industrial manufacturing into an elite visual corporate system.",
    category: "Brand Identity",
    timeline: "Q1 2026",
    heroImage: "/case-safa.webp",
    challenge: "Al Safa required a dramatic visual evolution to break out of legacy regional industrial framing. The target was to project tier-1 enterprise structural authority capable of competing across global trade corridors while maintaining recognizable technical lineage.",
    solution: "We engineered a robust corporate identity framework built around geometric visual accuracy. This included high-end product packaging labels, micro-embossed industrial patterns, and premium brand book guidelines designed to instil corporate confidence.",
    metrics: [
      { label: "B2B Lead Pipeline Increase", value: "+38%" },
      { label: "Asset Uniformity Score", value: "100%" },
      { label: "Enterprise Confidence Level", value: "Elite" }
    ],
    executionSteps: [
      { title: "Discovery & Alignment Blueprinting", desc: "Deconstructing core lubricant container layouts, chemical specification literature, and primary enterprise personas." },
      { title: "Visual Geometry Definition", desc: "Formulating a striking, modern logo geometry and high-contrast palette suited for both print assets and digital panels." },
      { title: "Packaging Architecture Deployment", desc: "Designing premium can and bottle labels featuring pristine text hierarchy and technical structural emblems." }
    ]
  },
  "luitage-tea": {
    client: "Luitage Tea",
    title: "Luitage Tea Premium Corporate Identity System",
    subtitle: "Rebranding a heritage commodity into a high-end luxury lifestyle asset.",
    category: "Brand Identity",
    timeline: "Q2 2026",
    heroImage: "/case-luitage.webp",
    challenge: "Luitage Tea required an authoritative corporate profile and a complete product re-rebranding to penetrate premium global export markets. The legacy aesthetic failed to communicate the premium grade of their harvest, limiting their leverage with high-end distributors and luxury hospitality buyers.",
    solution: "We engineered an industry-standard corporate business profile and executed a comprehensive product visual overhaul. The identity pairs sophisticated typography with luxury, clean layout structures—transforming technical agricultural execution into an elite brand narrative optimized for corporate buyers.",
    metrics: [
      { label: "B2B Wholesaler Pipeline Growth", value: "2.8x" },
      { label: "Corporate Profile Engagement", value: "+52%" },
      { label: "Premium Packaging Recall", value: "96%" }
    ],
    executionSteps: [
      { title: "Corporate Profile Architecture", desc: "Structuring a comprehensive, high-end business prospectus detailing estate heritage, quality control standards, and global logistics matrixing." },
      { title: "Product Re-Branding & Packaging", desc: "Designing premium commercial label systems and luxury container layouts using sophisticated botanical themes and clean, elegant graphic systems." },
      { title: "Print & Asset Optimization", desc: "Supervising premium material selection, spot UV accents, and deep textured finishes for physical product packaging and high-fidelity print profiles." }
    ]
  },
  "sauda-web": {
    client: "Sauda Abaya B2B Export",
    title: "Sauda B2B Wholesale Digital Ecosystem",
    subtitle: "Architecting rapid, ultra-performant frameworks without platform bloat.",
    category: "Next.js Web Development",
    timeline: "Q1 2026",
    heroImage: "/b2b-campaign.webp",
    challenge: "The client needed to expose premium wholesale inventories to global enterprise bulk buyers. Traditional monolithic content management tools suffered from severe loading latency and failed to convey a luxury product environment.",
    solution: "We built a specialized, highly performant Next.js static engine powered by Tailwind CSS and strategic Framer Motion states. The code architecture strips out tracking bloat to achieve near-instantaneous page response rates.",
    metrics: [
      { label: "Core Web Vitals Performance", value: "100/100" },
      { label: "Wholesale Inquiry Inbounds", value: "+52%" },
      { label: "Mobile Payload Speed", value: "0.4s" }
    ],
    executionSteps: [
      { title: "Next.js Architecture Design", desc: "Setting up a lightning-fast directory structure optimized for dynamic product visual rendering." },
      { title: "High-Fidelity UI/UX Prototyping", desc: "Drafting dark, sleek glassmorphic product presentation matrix components to frame high-end fabrics beautifully." },
      { title: "API and Form Linkage Optimization", desc: "Structuring direct WhatsApp business webhooks and secure entry configurations for verified procurement officers." }
    ]
  },
  "texlubricant-web": {
    client: "Texlubricant",
    title: "Texlubricant Enterprise Performance Engine",
    subtitle: "Deploying highly optimized dynamic architectures for organic dominance.",
    category: "Next.js Web Development",
    timeline: "Q1 2026",
    heroImage: "/next -js-webapp.webp",
    challenge: "Texlubricant required an online asset storefront matching their high-output mechanical product engineering. Legacy systems failed core web optimization checks, heavily degrading organic visibility on localized search queries.",
    solution: "We compiled a highly customized Next.js dynamic blueprint layered with semantic structural elements and cinematic fluid animations. The layout ensures flawless content distribution metrics across global viewing terminals.",
    metrics: [
      { label: "Organic Visibility Metric", value: "+114%" },
      { label: "Payload Latency Reductions", value: "85%" },
      { label: "Interface Fluidity Grade", value: "A+" }
    ],
    executionSteps: [
      { title: "System Semantic Restructuring", desc: "Auditing index architectures to construct lightning-fast component configurations." },
      { title: "Cinematic Motion Configuration", desc: "Injecting Framer Motion acceleration paths to retain enterprise user engagement intervals." },
      { title: "Responsive Layout Integration", desc: "Validating structural asset ratios across desktop matrices and dynamic mobile aspect views." }
    ]
  },
  "regal-group": {
    client: "Regal Group of Companies",
    title: "Regal Corporate Asset Marketing Pipeline",
    subtitle: "Formulating synchronized conversion pipelines to scale inbound enterprise traffic.",
    category: "Growth Marketing",
    timeline: "Q2 2026",
    heroImage: "/packaging.webp",
    challenge: "Regal Group required a unified, high-performing lead generation engine to replace fragmented corporate marketing efforts. The objective was to cultivate a systematic inbound pipeline to consistently capture high-intent enterprise client profiles.",
    solution: "We deployed an end-to-end synchronized acquisition pipeline matching high-intent targeted outreach models with optimized corporate landing configurations, backed by automated trigger systems for high-priority leads.",
    metrics: [
      { label: "Qualified B2B Inbounds", value: "+140%" },
      { label: "Cost Per Acquisition Drop", value: "42%" },
      { label: "Automation Reliability", value: "99.9%" }
    ],
    executionSteps: [
      { title: "Pipeline Architecture Layout", desc: "Mapping core audience entry vectors and matching intent channels directly to isolated value statements." },
      { title: "Conversion Landing Optimizations", desc: "Stripping down secondary navigation distractions to maximize asset interaction density and gated contact collection rules." },
      { title: "Trigger System Programming", desc: "Linking analytical capturing components instantly to internal processing dashboards for immediate team visibility." }
    ]
  },
  "sauda-marketing": {
    client: "Sauda Abaya B2B Export",
    title: "Sauda Abaya Cross-Channel Acquisition System",
    subtitle: "Synchronizing global channel strategies to lower wholesale acquisition thresholds.",
    category: "Growth Marketing",
    timeline: "Q2 2026",
    heroImage: "/b2b-campaign.webp",
    challenge: "Sauda Abaya required a structured international lead machine. Fragmented public channel ad placements yielded scattered retail-level interest rather than verified, high-volume bulk wholesale distributor applications.",
    solution: "We developed a multi-tier cross-channel lead verification infrastructure, directing qualified global target demographics straight to conversion-optimized private portfolio matrix funnels.",
    metrics: [
      { label: "Wholesale Order Inbound", value: "3.1x" },
      { label: "Verified Buyer Match Rate", value: "88%" },
      { label: "Marketing Capital Efficiency", value: "+65%" }
    ],
    executionSteps: [
      { title: "Demographic Target Tuning", desc: "Isolating key regional bulk garment buying networks and configuring distinct parameter rules for specialized distribution networks." },
      { title: "Funnel Routing Engineering", desc: "Directing public channel attention pools to premium web presentation spaces to filter out casual retail interactions." },
      { title: "Data Loop Integration", desc: "Refining active performance algorithms weekly to prioritize high-value container-level inquiry outputs." }
    ]
  }
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = CASE_STUDIES_DATA[slug];

  // Gracefully handle unmatched case studies
  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-4 sm:px-8 lg:px-16 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white scroll-smooth antialiased">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* ================================================================= */}
          {/* 1. BACK NAVIGATION & META INFO                                   */}
          {/* ================================================================= */}
          <Link 
            href="/case-studies"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#FF5A09] transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Histories</span>
          </Link>

          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest">
              <span className="text-[#FF5A09]">{project.client}</span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 inline-flex items-center gap-1">
                <Layers size={12} /> {project.category}
              </span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 inline-flex items-center gap-1">
                <Calendar size={12} /> {project.timeline}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight max-w-4xl">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 font-normal max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* ================================================================= */}
          {/* 2. PREMIUM FEATURED HERO MASONRY BLOCK                            */}
          {/* ================================================================= */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 bg-[#111827] mb-16"
          >
            <Image 
              src={project.heroImage} 
              alt={`${project.title} Primary Presentation Platform`}
              fill
              priority
              className="object-cover opacity-50 brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
          </motion.section>

          {/* ================================================================= */}
          {/* 3. CORE DECONSTRUCTION ARCHITECTURE: CHALLENGE VS SOLUTION       */}
          {/* ================================================================= */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full mb-20 items-start">
            
            {/* Left Columns: Text Analysis */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-white font-heading flex items-center gap-2">
                  <Zap size={14} className="text-[#FF5A09]" /> Market Operational Challenge
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-white font-heading flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Strategic Asset Deployment
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right Column: Quantitative Key Metrics Grid */}
            <div className="bg-[#111827] rounded-2xl border border-slate-800/80 p-6 sm:p-8 space-y-6 lg:sticky lg:top-28">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 font-heading flex items-center gap-2 border-b border-slate-800 pb-3">
                <TrendingUp size={14} className="text-[#FF5A09]" /> Audit Metrics
              </h4>
              <div className="space-y-6">
                {project.metrics.map((metric: any, mIdx: number) => (
                  <div key={mIdx} className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separation Accent Line */}
          <div className="w-full h-px bg-slate-800/60 mb-16" />

          {/* ================================================================= */}
          {/* 4. EXECUTION TIMELINE ENGINE STEPS                                */}
          {/* ================================================================= */}
          <section className="space-y-8 w-full mb-24">
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-widest text-[#FF5A09] uppercase font-heading">
                Procedural Blueprint
              </p>
              <h3 className="text-2xl font-black text-white tracking-tight font-heading">
                Step-by-Step System Implementation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {project.executionSteps.map((step: any, sIdx: number) => (
                <div 
                  key={sIdx} 
                  className="bg-[#111827] rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700/80 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-black font-heading text-slate-500 uppercase tracking-widest block">
                      Phase 0{sIdx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading tracking-tight leading-snug">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* 5. INTERACTIVE FOOTER CALL TO ACTION                               */}
          {/* ================================================================= */}
          <section className="bg-gradient-to-r from-[#111827] to-[#121b2d] rounded-3xl p-8 sm:p-12 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-heading">
                Require Identical Asset Performance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Let's construct clean corporate infrastructures and high-end visual systems optimized specifically for conversion metrics inside competitive market sectors.
              </p>
            </div>
            <Link
              href="https://wa.me/971566004689" 
              target="_blank"
              className="inline-flex items-center space-x-2 bg-[#FF5A09] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/10 shrink-0 group"
            >
              <span>Initiate Audit Blueprint</span>
              <ArrowUpRight size={14} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}