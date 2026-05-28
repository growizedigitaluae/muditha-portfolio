"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
const lastUpdated = "May 2026";

const securityMeasures = [
"SSL/TLS secure data encryption protocols for form submissions.",
"Isolated storage databases with strict access permission matrices.",
"Routine automated vulnerability audits across server infrastructure.",
"Zero persistent storage of sensitive data beyond verification metrics."
];

return (
<>




  <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-6 md:px-12 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white antialiased scroll-smooth">
    <div className="max-w-4xl mx-auto">
      
      {/* ================================================================= */}
      {/* POLICY HEADER SECTION                                            */}
      {/* ================================================================= */}
      <section className="mb-12 space-y-4 pb-8 border-b border-slate-800/80">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#FF5A09]">
          <ShieldCheck size={12} />
          <span>Security Protocols</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
          Privacy <span className="text-[#FF5A09]">Policy</span>
        </h1>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
          Last Updated: {lastUpdated} &bull; UAE Compliance Matrix
        </p>
      </section>

      {/* ================================================================= */}
      {/* MAIN LEGAL CONTENT LAYOUT                                        */}
      {/* ================================================================= */}
      <div className="space-y-10 text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
        
        {/* Introductory Statement */}
        <p className="text-slate-400 font-light text-base sm:text-lg">
          We operate a transparent, security-first environment to protect corporate client datasets, business inquiry parameters, and operational design briefs collected on our platform.
        </p>

        {/* Section 1: Data Acquisition */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3 font-heading">
            1. Data Acquisition Metrics
          </h2>
          <p>
            We collect personal and professional identifiers only when voluntarily submitted through our secure project briefing structures. This transmission includes:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-slate-400">
            <li>Corporate identity identifiers (Full Name, Professional Title).</li>
            <li>Digital connection interfaces (Corporate Email Address, Phone Number).</li>
            <li>Strategic parameters (Company Overview, Operational Budgets, Timelines).</li>
          </ul>
        </div>

        {/* Section 2: Storage and System Protection */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3 font-heading">
            2. Storage & System Protection
          </h2>
          <p>
            To secure critical enterprise project blueprints, our network architecture incorporates rigorous security boundaries:
          </p>
          
          {/* Premium Checklist Box */}
          <div className="bg-[#111827] border border-slate-800/80 p-6 rounded-2xl space-y-3 shadow-xl">
            {securityMeasures.map((measure, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-400">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{measure}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Intended Data Use */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3 font-heading">
            3. Intended Data Use
          </h2>
          <p>
            The information compiled through secure briefings is isolated and processed strictly to generate custom technical asset audits, coordinate preliminary strategies, and facilitate secure communications regarding corporate partnerships. We do not distribute, rent, or trade compiled databases with third-party consumer networks.
          </p>
        </div>

        {/* Section 4: Analytical Protocols */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3 font-heading">
            4. Analytical Tracking Protocols
          </h2>
          <p>
            We execute minimal tracking scripts to analyze anonymous interface interactions. This telemetry helps optimize Next.js rendering paths, measure overall user journeys, and refine our interface loading performance.
          </p>
        </div>

        {/* Section 5: Legal Framework Jurisdiction */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider border-l-2 border-[#FF5A09] pl-3 font-heading">
            5. Compliance & Regulatory Jurisdiction
          </h2>
          <p>
            All processed datasets are managed under strict regulatory compliance with the Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) of the United Arab Emirates. Disputes arising from terms on this platform are governed strictly by the laws of Ajman and federal UAE statutes.
          </p>
        </div>

        {/* Section 6: Contact & Audit Inquiries */}
        <div className="bg-[#111827] border border-slate-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <Lock size={16} className="text-[#FF5A09]" /> System Security Inquiries
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            If you require a complete data purge from our systems or wish to inspect the specific records tied to your corporate identity, submit a secure verification request directly to:
          </p>
          <div className="pt-2 text-sm">
            <a href="mailto:hello@muditha.online" className="font-bold text-[#FF5A09] hover:underline">
              hello@muditha.online
            </a>
          </div>
        </div>

      </div>

    </div>
  </main>

</>


);
}