"use client";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle,
  Clock,
  Palette,
  Globe,
  TrendingUp,
  BookOpen,
  Box,
  Share2,
  Monitor,
  Award,
  Quote,
  Star,
  Check
} from "lucide-react";

export default function Home() {
  // Filtered dataset mapped exactly to the real case-studies slugs
  const featuredWorks = [
    {
      id: 1,
      title: "Corporate Profile & Brochure",
      category: "brochure",
      desc: "High-spec multi-page literature detailing engineering and production capacity.",
      icon: <BookOpen size={20} />,
      bgImage: "/brocure.webp",
      span: "lg:col-span-4",
      slug: "/case-studies/luitage-tea"
    },
    {
      id: 2,
      title: "Industrial Lubricant Cans",
      category: "packaging",
      desc: "Premium label engineering and structural bottle designs built for maximum shelf authority.",
      icon: <Box size={20} />,
      bgImage: "/packaging.webp",
      span: "lg:col-span-8",
      slug: "/case-studies/al-safa"
    },
    {
      id: 3,
      title: "B2B Lead Generation Campaigns",
      category: "social media",
      desc: "Strategic social matrixing across LinkedIn, TikTok, and Instagram to capture regional sales.",
      icon: <Share2 size={20} />,
      bgImage: "/b2b-campaign.webp",
      span: "lg:col-span-6",
      slug: "/case-studies/sauda-marketing"
    },
    {
      id: 4,
      title: "Next.js Web Platforms",
      category: "website",
      desc: "Static-first, highly responsive digital systems built with conversion tracking.",
      icon: <Monitor size={20} />,
      bgImage: "/next -js-webapp.webp",
      span: "lg:col-span-6",
      slug: "/case-studies/texlubricant-web"
    },
    {
      id: 5,
      title: "Corporate Identity Systems",
      category: "branding",
      desc: "Comprehensive brand books, asset libraries, and guidelines crafted for UAE enterprises.",
      icon: <Award size={20} />,
      bgImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
      span: "lg:col-span-12",
      slug: "/case-studies/regal-group"
    }
  ];

  // Elite B2B / Industrial client testimonials dataset
  const testimonials = [
    {
      id: 1,
      quote: "Completely redefined our brand's global presence. From the masterfully executed modern packaging design to a comprehensive corporate profile and high-performance web architecture, the rebranding captured our legacy perfectly while instantly elevating our market authority.",
      author: "Samantha Rathnayake",
      role: "CEO",
      company: "Luitage Tea",
      rating: 5
    },
    {
      id: 2,
      quote: "An absolute powerhouse execution for our B2B operations. They didn't just build a sleek, highly responsive web platform—they delivered a complete corporate branding ecosystem and an aggressive digital marketing funnel that scaled our wholesale client acquisition effortlessly.",
      author: "Rameez Rasa",
      role: "CEO & Founder",
      company: "Sauda B2B",
      rating: 5
    },
    {
      id: 3,
      quote: "Our technical authority received an immediate upgrade. The lightning-fast corporate website combined with their tactical digital marketing campaigns instantly optimized our digital footprint, driving highly qualified B2B leads straight into our distribution pipeline.",
      author: "Tausif Zaman",
      role: "Founder",
      company: "TexLubricant",
      rating: 5
    }
  ];

  // Re-engineered Services matrix mapping user requirements perfectly
  const servicesMatrix = [
    {
      id: 1,
      title: "Creative Design",
      desc: "High-end corporate aesthetics and tactile print frameworks engineered to elevate market positioning.",
      icon: <Palette size={24} />,
      accentColor: "from-purple-500/20 to-indigo-500/5",
      textColor: "text-purple-400",
      items: ["Branding", "Brochures", "Flyers", "Packaging", "Corporate Profiles"]
    },
    {
      id: 2,
      title: "Digital Marketing",
      desc: "Data-backed lead generation architectures designed to convert target networks into business pipelines.",
      icon: <TrendingUp size={24} />,
      accentColor: "from-orange-500/20 to-red-500/5",
      textColor: "text-[#FF5A09]",
      items: ["Campaign Creatives", "Social Media", "SEO Support", "Website Updates"]
    },
    {
      id: 3,
      title: "Web Development",
      desc: "Blazing-fast, static-first web platforms built for flawless optimization and conversion.",
      icon: <Globe size={24} />,
      accentColor: "from-blue-500/20 to-cyan-500/5",
      textColor: "text-blue-400",
      items: ["WordPress", "Next.js", "Responsive Websites", "CMS Integration"]
    }
  ];

  return (
    <>
      <div className="bg-[#0B0F19] text-white">
        <Navbar />
      </div>

      <main className="bg-[#0B0F19] text-slate-200 antialiased overflow-x-hidden pt-10 lg:pt-6">
        
        {/* ================================================================= */}
        {/* 1. HERO SECTION                                                   */}
        {/* ================================================================= */}
        <section className="relative min-h-[85vh] flex items-center px-6 max-w-7xl mx-auto pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col justify-center space-y-5"
            >
              <span className="text-[#FF5A09] font-heading font-semibold text-sm tracking-widest uppercase">
                Premium Dark Architecture
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Designing Industrial Brands & <br />
                <span className="text-[#FF5A09]">Digital Experiences</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal pt-2">
                Senior Graphic Designer & Digital Marketing Executive with 15+ years of experience in branding, advertising, web development, and digital campaigns across UAE corporate and industrial sectors.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="/resume" 
                  className="bg-[#FF5A09] hover:bg-[#E04F08] text-white font-semibold px-7 py-3 rounded-full transition-all tracking-wide shadow-lg shadow-orange-500/20 text-sm"
                >
                  Download CV
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent hover:bg-white/5 border border-[#FF5A09] text-[#FF5A09] font-semibold px-7 py-3 rounded-full transition-all tracking-wide text-sm"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]"
            >
              <div className="absolute w-[360px] sm:w-[480px] aspect-square bg-orange-500/10 rounded-full blur-3xl top-10 right-4 z-0"></div>
              <div className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-tr from-[#FF5A09] to-orange-600 bottom-6 z-0 shadow-2xl shadow-orange-500/20"></div>
              
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] z-10 brightness-[1.05] contrast-[1.02]">
                <Image
                  src="/portrait.webp"
                  alt="Muditha Sri Portfolio Portrait"
                  fill
                  className="object-contain bottom-0"
                  sizes="(max-w-1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>

          </div>

          {/* FLOATING EXPERIENCE BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-[-45px] left-6 right-6 max-w-4xl mx-auto bg-[#111827] rounded-full shadow-2xl shadow-black/50 border border-slate-800 py-5 px-8 hidden md:grid grid-cols-3 gap-6 items-center z-30"
          >
            <div className="flex items-center space-x-4 border-r border-slate-800 justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-[#FF5A09]">
                <Briefcase size={22} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-lg text-white">15+ Years</p>
                <p className="text-xs font-medium text-slate-500">Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-r border-slate-800 justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-[#FF5A09]">
                <CheckCircle size={22} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-lg text-white">120+</p>
                <p className="text-xs font-medium text-slate-500">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-[#FF5A09]">
                <Clock size={22} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-lg text-white">Online 24/7</p>
                <p className="text-xs font-medium text-slate-500">UAE Support</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mobile Stat Fallback Container */}
        <div className="bg-[#111827] py-6 px-6 shadow-xl border-t border-slate-800 grid grid-cols-3 text-center md:hidden mt-8">
          <div>
            <p className="font-heading font-extrabold text-base text-white">15+ Yrs</p>
            <p className="text-[10px] text-slate-500 font-medium">Experience</p>
          </div>
          <div>
            <p className="font-heading font-extrabold text-base text-white">120+</p>
            <p className="text-[10px] text-slate-500 font-medium">Projects</p>
          </div>
          <div>
            <p className="font-heading font-extrabold text-base text-white">24/7</p>
            <p className="text-[10px] text-slate-500 font-medium">Support</p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. RE-ENGINEERED SERVICES SECTION                                 */}
        {/* ================================================================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto mt-6 border-t border-slate-800/60">
          <div className="space-y-12">
            
            {/* Structured Header */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <p className="text-[#FF5A09] font-heading font-semibold text-sm tracking-widest uppercase">
                Expertise & Capabilities
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Comprehensive Digital Solutions
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                Integrated execution across design, growth marketing, and scalable code structures to unlock predictable business acceleration.
              </p>
            </div>

            {/* 3-Column Enterprise Capability Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              {servicesMatrix.map((service) => (
                <div 
                  key={service.id}
                  className="bg-[#111827] rounded-3xl border border-slate-800/80 shadow-2xl p-8 flex flex-col justify-between hover:shadow-orange-500/5 transition-all duration-3xl relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-300 shadow-inner group-hover:text-white transition-colors">
                        <span className={service.textColor}>{service.icon}</span>
                      </div>
                      <h4 className="font-heading font-extrabold text-xl text-white tracking-tight">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 pt-2 border-t border-slate-800/80">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-3 text-sm text-slate-300 font-medium">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                            <Check size={11} className="stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#FF5A09] transition-colors relative z-10">
                    <span>Learn Capabilities</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. ABOUT PREVIEW SECTION                                          */}
        {/* ================================================================= */}
        <section className="py-20 px-6 border-t border-slate-800/60 bg-gradient-to-b from-[#111827] to-[#0B0F19]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-[#FF5A09] font-heading font-semibold text-sm tracking-widest uppercase">
                  About Preview
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Bridging Creative Vision With <br />
                  <span className="text-[#FF5A09]">Measurable Digital Growth</span>
                </h3>
              </div>

              <div className="space-y-4 text-slate-400 text-base leading-relaxed max-w-2xl">
                <p>
                  As an active <strong className="text-white font-semibold">Senior Graphic Designer & Digital Marketing Executive</strong>, I lead hyper-targeted visual transformations that scale market positioning. Operating throughout competitive corporate ecosystems, my focus lies in crafting visual systems that capture enterprise value cleanly.
                </p>
                <p>
                  With extensive, deeply localized <strong className="text-white font-semibold">UAE experience</strong>, I build specialized design frameworks targeting corporate networks, real estate groups, and high-spec industrial sectors. I align aesthetic standards perfectly with the regional requirements of business-to-business landscapes.
                </p>
                <p>
                  My value rests on advanced <strong className="text-white font-semibold">multidisciplinary skills</strong> that remove functional gaps between asset design and live technology execution. This powerful, modern <strong className="text-white font-semibold">web + marketing + design combination</strong> ensures that every single system built runs at peak optimization, matches corporate brand books flawlessly, and captures high-value inbound sales leads consistently.
                </p>
              </div>

              <div className="pt-4">
                <Link 
                  href="/about" 
                  className="group inline-flex items-center space-x-3 bg-white/5 hover:bg-[#FF5A09] hover:text-white border border-slate-700/80 text-white px-8 py-3.5 rounded-full transition-all duration-3xl font-semibold shadow-md text-sm tracking-wide"
                >
                  <span>Read Full About</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-3xl" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="bg-[#111827] p-6 rounded-3xl border border-slate-800/80 text-center">
                  <p className="text-3xl font-extrabold text-[#FF5A09] font-heading">01</p>
                  <p className="text-xs font-bold text-white uppercase tracking-wide mt-1">Design</p>
                </div>
                <div className="bg-[#111827] p-6 rounded-3xl border border-slate-800/80 text-center lg:translate-x-4">
                  <p className="text-3xl font-extrabold text-slate-300 font-heading">02</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Marketing</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#111827] p-6 rounded-3xl border border-slate-800/80 text-center lg:-translate-x-4">
                  <p className="text-3xl font-extrabold text-slate-300 font-heading">03</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Web Dev</p>
                </div>
                <div className="bg-[#FF5A09]/5 p-6 rounded-3xl border border-[#FF5A09]/20 text-center">
                  <p className="text-sm font-extrabold text-[#FF5A09] uppercase tracking-wider">Unified</p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">Growth Engine</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent blur-xl -z-10 rounded-full"></div>
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. FEATURED WORKS SECTION                                         */}
        {/* ================================================================= */}
        <section className="py-24 px-6 border-t border-slate-800/60 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <p className="text-[#FF5A09] font-heading font-semibold text-sm tracking-widest uppercase">
                  Featured Works
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Selected Industrial & Corporate Showcases
                </h3>
                <p className="text-sm text-slate-400 max-w-lg font-normal">
                  A high-impact collection displaying precision architectural design alongside conversion-tested web development instances.
                </p>
              </div>
              
              <div>
                <Link 
                  href="/portfolio" 
                  className="group inline-flex items-center space-x-2.5 bg-transparent hover:bg-white/5 border-2 border-slate-700 text-white font-bold px-6 py-3 rounded-full transition-all text-xs tracking-wider uppercase"
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pt-2">
              {featuredWorks.map((work) => (
                <Link
                  key={work.id}
                  href={work.slug}
                  className={`group relative overflow-hidden rounded-3xl bg-[#111827] min-h-[320px] md:min-h-[380px] flex flex-col justify-end p-8 border border-slate-800/80 shadow-xl ${work.span} transition-all duration-500 hover:shadow-orange-500/5 hover:border-slate-700 cursor-pointer`}
                >
                  <img
                    src={work.bgImage}
                    alt={work.title}
                    className="object-cover absolute inset-0 w-full h-full opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-0"
                  />
                  
                  {/* Floating Content Stack */}
                  <div className="relative z-20 space-y-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] w-full">
                    
                    <div className="inline-flex items-center space-x-2 bg-slate-950/60 backdrop-blur-sm text-[#FAF8F5] border border-white/10 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase self-start">
                      <span className="text-[#FF5A09]">{work.icon}</span>
                      <span>{work.category}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-heading font-extrabold text-xl text-white tracking-tight">
                        {work.title}
                      </h4>

                      <p className="text-xs text-slate-200 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-normal">
                        {work.desc}
                      </p>
                    </div>

                    {/* RE-ENGINEERED CTA BUTTON */}
                    <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-4 py-2.5 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase group-hover/btn:bg-[#FF5A09] hover:bg-[#FF5A09] hover:border-[#FF5A09]">
                        <span>Explore Case Study</span>
                        <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. TESTIMONIALS SECTION                                           */}
        {/* ================================================================= */}
        <section className="py-24 px-6 border-t border-slate-800/60 bg-[#111827]">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <p className="text-[#FF5A09] font-heading font-semibold text-sm tracking-widest uppercase">
                Testimonials
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Trusted by Enterprise Partners
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                See how localized design architecture and precision regional performance marketing build verifiable commercial velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  className="bg-[#0B0F19] p-8 rounded-3xl border border-slate-800/80 shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 relative flex flex-col justify-between space-y-6"
                >
                  <div className="absolute top-6 right-8 text-slate-800/40 pointer-events-none">
                    <Quote size={56} className="transform rotate-180 stroke-[1.5]" />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed font-normal italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4 flex flex-col">
                    <span className="font-heading font-bold text-base text-white">
                      {t.author}
                    </span>
                    <span className="text-xs font-semibold text-[#FF5A09] mt-0.5">
                      {t.role}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                      {t.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}