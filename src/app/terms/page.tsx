"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, Gavel, AlertCircle, RefreshCw } from "lucide-react";

export default function TermsOfServicePage() {
const lastUpdated = "May 2026";

return (
<>




  <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-6 md:px-12 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white antialiased scroll-smooth">
    <div className="max-w-4xl mx-auto">
      
      {/* ================================================================= */}
      {/* TERMS HEADER SECTION                                             */}
      {/* ================================================================= */}
      <section className="mb-12 space-y-4 pb-8 border-b border-slate-800/80">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#FF5A09]">
          <Gavel size={12} />
          <span>Legal Charter</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
          Terms of <span className="text-[#FF5A09]">Service</span>
        </h1>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
          Effective Date: {lastUpdated} &bull; Operational Terms
        </p>
      </section>

      {/* ================================================================= */}
      {/* MAIN LEGAL CONTENT LAYOUT                                        */}
      {/* ================================================================= */}
      <div className="space-y-10 text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
        
        <p className="text-slate-400 font-light text-base sm:text-lg">
          Welcome to our platform. By accessing this platform, submitting project parameter files, or coordinating B2B creative consulting briefings with us, you agree to comply with the terms of service outlined below.
        </p>

        {/* Section 1: Intellectual Property Rights */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3">
            1. Intellectual Property Protection
          </h2>
          <p>
            All content, vector design representations, proprietary Next.js component layouts, visual mockups, and layout structures hosted on this platform are the exclusive intellectual property of Muditha Sri. 
          </p>
          <p className="text-slate-400">
            Unauthorised reproduction, mechanical scraping, code extraction, or commercial rebranding of these design files without explicit written authorization is strictly prohibited.
          </p>
        </div>

        {/* Section 2: Advisory Consulting Engagement */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3">
            2. Advisory Consulting Engagement
          </h2>
          <p>
            The initiation of project parameter forms, audit requests, or preliminary calls establishes an advisory inquiry phase. It does not construct a binding work agreement. Official design delivery timelines, print specifications, and software development SLA schedules are governed exclusively by distinct bilateral contracts.
          </p>
        </div>

        {/* Section 3: Client Submissions */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3">
            3. Client Parameter Submissions
          </h2>
          <p>
            When using our submission systems, you warrant that all transmitted details—including industrial briefs, target metrics, and existing corporate identities—are accurate and that you possess full legal authorization to use and share those assets. We reserve the right to decline strategic briefings that don't match our corporate verification filters.
          </p>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3">
            4. Limitation of Liability
          </h2>
          <p>
            While we strive for absolute accuracy in our optimization and architectural frameworks, all diagnostic audit insights and metrics displayed on this platform serve educational, case-history purposes. We make no guarantees of identical results across variable market conditions. We are not liable for direct, indirect, or incidental performance drops resulting from external system updates.
          </p>
        </div>

        {/* Section 5: Governing Law */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3">
            5. Governing Law & Dispute Resolution
          </h2>
          <p>
            These terms, along with the operational use of this digital platform, are governed strictly by the laws of Ajman and the federal statutes of the United Arab Emirates. Any formal dispute arising from these terms will be settled exclusively within the competent courts of Ajman, UAE.
          </p>
        </div>

        {/* Warning Callout Card */}
        <div className="bg-[#111827] border border-slate-800 p-6 sm:p-8 rounded-3xl flex items-start gap-4 shadow-2xl">
          <AlertCircle size={24} className="text-[#FF5A09] flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">Modification of Terms</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We reserve the right to refine or rewrite portions of these terms of service as search parameters, system requirements, or local regulations change. Your continued use of this platform following updates signifies your formal agreement to the revised terms.
            </p>
          </div>
        </div>

      </div>

    </div>
  </main>

</>


);
}