/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Play, 
  Layers, 
  Layout, 
  MessageSquare,
  Linkedin,
  Instagram,
  ChevronRight
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-emerald rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-brand-white rotate-45" />
          </div>
          <span>THE CONCEPT</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-brand-emerald-light transition-colors">ABOUT</a>
          <a href="#solutions" className="hover:text-brand-emerald-light transition-colors">SOLUTIONS</a>
          <a href="#why-us" className="hover:text-brand-emerald-light transition-colors">WHY US</a>
          <a href="#contact" className="px-6 py-2 bg-brand-emerald hover:bg-brand-emerald-light text-white rounded-full transition-all duration-300 emerald-glow">PARTNERSHIP</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/10 via-transparent to-brand-black" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-emerald/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border border-brand-emerald/30 bg-brand-emerald/5 rounded-full text-brand-emerald-light">
            Next-Gen Monetization
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.95]">
            Monetization,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white via-brand-white to-brand-emerald-light">Reimagined.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Seamless publisher monetization solutions designed to maximize revenue performance at scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-brand-emerald hover:bg-brand-emerald-light text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 emerald-glow">
              Request Partnership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-full transition-all duration-300">
              Explore Solutions
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest opacity-30 uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-emerald to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: Zap, title: "Advanced Yield Optimization", desc: "AI-driven algorithms that ensure every impression is sold at its maximum value." },
    { icon: Globe, title: "Direct & Programmatic Demand", desc: "Access to exclusive premium demand partners and global programmatic exchanges." },
    { icon: BarChart3, title: "Real-Time Performance Analytics", desc: "Deep insights into your revenue streams with granular, real-time reporting." }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Powering Publisher<br />Revenue Growth
            </h2>
            <p className="text-lg text-brand-white/60 leading-relaxed mb-10">
              The Concept Advertising is a next-generation publisher monetization platform delivering seamless, high-performance revenue solutions. We empower digital publishers with optimized demand, intelligent yield strategies, and premium ad experiences that drive sustainable growth.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-brand-emerald flex items-center justify-center group-hover:bg-brand-emerald transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-brand-emerald group-hover:text-white" />
              </div>
              <span className="font-bold tracking-wider uppercase text-sm">Our Mission</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="glass-card p-8 rounded-2xl hover:border-brand-emerald/30 transition-all duration-500 group"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-emerald/10 flex items-center justify-center group-hover:bg-brand-emerald/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-brand-emerald-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-brand-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "In-Stream",
      desc: "High-impact video monetization integrated directly within content for maximum engagement and premium CPMs.",
      icon: Play
    },
    {
      title: "Out-Stream",
      desc: "Scalable video demand beyond traditional players, unlocking incremental revenue opportunities.",
      icon: Layers
    },
    {
      title: "Display",
      desc: "Optimized banner monetization with intelligent ad placements and performance-based delivery.",
      icon: Layout
    },
    {
      title: "Native",
      desc: "Seamlessly integrated ad formats that match content flow and enhance user experience.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Monetization Solutions
          </motion.h2>
          <div className="w-20 h-1 bg-brand-emerald mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-emerald/20 transition-all duration-500" />
              <sol.icon className="w-10 h-10 text-brand-emerald-light mb-8" />
              <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
              <p className="text-brand-white/50 text-sm leading-relaxed mb-8">
                {sol.desc}
              </p>
              <div className="flex items-center gap-2 text-brand-emerald-light font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  const stats = [
    { label: "Average Revenue Uplift", value: 35, suffix: "%" },
    { label: "Premium Demand Partners", value: 150, suffix: "+" },
    { label: "Header Bidding Infrastructure", value: 10, suffix: "ms" },
    { label: "Dedicated Account Managers", value: 24, suffix: "/7" }
  ];

  return (
    <section id="why-us" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Performance.<br />Designed for Scale.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-brand-emerald-light mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-brand-white/40 font-medium tracking-wide uppercase text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Integration", desc: "Seamless setup with our lightweight SDK or header bidding wrapper." },
    { title: "Optimization", desc: "Our AI engine analyzes traffic to find the perfect demand mix." },
    { title: "Revenue Scaling", desc: "Watch your yields grow with premium demand and direct access." }
  ];

  return (
    <section className="py-32 bg-brand-emerald/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-brand-white/50">A simple 3-step flow to elevate your revenue.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-emerald flex items-center justify-center text-2xl font-bold mb-8 emerald-glow">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-brand-white/50 text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">Let’s Elevate Your<br />Monetization Strategy</h2>
            <p className="text-brand-white/50 mb-12 max-w-md">
              Ready to maximize your publisher revenue? Our team of experts is here to help you design a custom monetization strategy.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-brand-emerald-light mb-2">Office</h4>
                <p className="text-lg">The Concept Advertising<br />Dubai, United Arab Emirates</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-50">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-50">Work Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-50">Mobile Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald transition-colors" placeholder="+971 ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-50">Company Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald transition-colors" placeholder="Company Ltd." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase opacity-50">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald transition-colors" placeholder="Tell us about your traffic..." />
              </div>
              <button className="w-full py-4 bg-brand-emerald hover:bg-brand-emerald-light text-white font-bold rounded-xl transition-all duration-300 emerald-glow">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-white/30">
          <div className="flex items-center gap-2 font-bold tracking-tighter text-brand-white/50">
            <div className="w-5 h-5 bg-brand-emerald rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 border border-brand-white rotate-45" />
            </div>
            <span>THE CONCEPT</span>
          </div>
          <p>© 2026 The Concept Advertising. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative selection:bg-brand-emerald selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <WhyChooseUs />
      <Process />
      <Contact />
    </div>
  );
}
