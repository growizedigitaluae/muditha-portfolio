"use client";
import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Sparkles,
  Building2,
  Send
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiryType: "Web Development",
    message: ""
  });
  
  // State to manage loading spinners or success visibility if needed
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the transmission payload for Web3Forms
    const payload = {
      // TODO: REPLACE THIS VALUE STRING WITH YOUR ACTUAL COPIED KEY FROM WEB3FORMS
      access_key: "e4af21cc-0956-4ef2-94f7-157cbd4cb06c", 
      name: formData.name,
      email: formData.email,
      subject: `New Portfolio Lead: ${formData.inquiryType} - ${formData.company || 'No Company'}`,
      from_name: "Portfolio Portal",
      company: formData.company,
      objective: formData.inquiryType,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        alert("Briefing initiated successfully. We will be in contact shortly.");
        // Clear out the entry tracking inputs gracefully upon successful submission
        setFormData({
          name: "",
          company: "",
          email: "",
          inquiryType: "Web Development",
          message: ""
        });
      } else {
        alert("Transmission pipeline issue: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network exception error. Please contact directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="w-full bg-[#0B0F19] text-slate-200 pt-36 pb-24 px-6 md:px-12 min-h-screen font-sans selection:bg-[#FF5A09] selection:text-white antialiased scroll-smooth">
      <div className="max-w-6xl mx-auto">
        
        {/* ================================================================= */}
        {/* CONTACT HEADER ARCHITECTURE                                       */}
        {/* ================================================================= */}
        <section className="mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800/80 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#FF5A09]">
            <Sparkles size={12} />
            <span>Initiate Project</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-none">
            Establish Contact<span className="text-[#FF5A09]">.</span><br />
            Accelerate Growth.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Ready to deploy high-performance web architecture or scale your corporate identity? Submit your project parameters below to coordinate a strategic briefing.
          </p>
        </section>

        {/* ================================================================= */}
        {/* TWO-COLUMN CONTACT LAYOUT                                         */}
        {/* ================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Lead Generation Form */}
          <div className="lg:col-span-7 bg-[#111827] p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-2xl">
            <h2 className="text-xl font-bold text-white font-heading mb-8">Project Briefing Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Full Name <span className="text-[#FF5A09]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0B0F19] border border-slate-800 text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A09]/20 focus:border-[#FF5A09] transition-all placeholder:text-slate-700"
                    placeholder="John Doe"
                  />
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Company / Organization
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#0B0F19] border border-slate-800 text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A09]/20 focus:border-[#FF5A09] transition-all placeholder:text-slate-700"
                    placeholder="Enterprise Corp"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Corporate Email <span className="text-[#FF5A09]">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0B0F19] border border-slate-800 text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A09]/20 focus:border-[#FF5A09] transition-all placeholder:text-slate-700"
                  placeholder="john@enterprise.com"
                />
              </div>

              {/* Inquiry Type Dropdown */}
              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Primary Objective
                </label>
                <div className="relative">
                  <select 
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#0B0F19] border border-slate-800 text-white text-sm px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF5A09]/20 focus:border-[#FF5A09] transition-all"
                  >
                    <option value="Web Development">High-Performance Web Development</option>
                    <option value="Corporate Identity">Corporate Branding & Identity</option>
                    <option value="Performance Marketing">Digital Growth Campaign</option>
                    <option value="Print Production">Industrial Print & Layout Production</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Project Parameters <span className="text-[#FF5A09]">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0B0F19] border border-slate-800 text-white text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A09]/20 focus:border-[#FF5A09] transition-all resize-none placeholder:text-slate-700"
                  placeholder="Provide an overview of your current infrastructure, targeted timelines, and core objectives..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex justify-center items-center space-x-2 bg-[#FF5A09] hover:bg-orange-600 disabled:bg-orange-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/10 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Transmitting..." : "Submit Your Project"}</span>
                {!isSubmitting && <Send size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Contact Details & Direct Info */}
          <div className="lg:col-span-5 space-y-10 lg:pt-4">
            
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-heading border-b border-slate-800 pb-4">
                Direct Channels
              </h3>
              
              <ul className="space-y-6">
                {/* Email Contact */}
                <li className="flex items-center group">
                  <div className="bg-[#111827] p-3 rounded-xl border border-slate-800/80 shadow-md mr-4 group-hover:border-[#FF5A09]/30 transition-colors">
                    <Mail className="text-[#FF5A09]" size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Electronic Mail</p>
                    <a href="mailto:hello@muditha.online" className="text-base font-bold text-white hover:text-[#FF5A09] transition-colors tracking-tight">
                      hello@muditha.online
                    </a>
                  </div>
                </li>

                {/* Location Detail */}
                <li className="flex items-center group">
                  <div className="bg-[#111827] p-3 rounded-xl border border-slate-800/80 shadow-md mr-4 group-hover:border-[#FF5A09]/30 transition-colors">
                    <MapPin className="text-[#FF5A09]" size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Operational Base</p>
                    <p className="text-base font-bold text-white tracking-tight leading-tight pt-0.5">
                      Sharjah & Ajman, UAE
                    </p>
                  </div>
                </li>

                {/* Agency Detail */}
                <li className="flex items-center group">
                  <div className="bg-[#111827] p-3 rounded-xl border border-slate-800/80 shadow-md mr-4 group-hover:border-[#FF5A09]/30 transition-colors">
                    <Building2 className="text-[#FF5A09]" size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Agency Framework</p>
                    <p className="text-base font-bold text-white tracking-tight pt-0.5">
                      muditha.online
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SLA / Response Time Notice */}
            <div className="bg-[#111827] border border-slate-800/60 p-6 rounded-2xl shadow-2xl space-y-3">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A09] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A09]"></span>
                </span>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Matrix</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                All qualified project briefings receive a technical asset audit and strategic preliminary response within <strong className="text-white font-bold">24 hours</strong> of secure transmission. 
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}