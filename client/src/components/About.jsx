import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const stats = [
  { num: '8+', label: 'Projects Completed' },
  { num: '5+', label: 'Tech Stacks' },
  { num: '07', label: 'Certifications' },
];

const interests = [
  'Full Stack Development',
  'AI-Powered Apps',
  'UX Design',
  'RAG & LLM APPS',
  'Machine Learning',
  'Frontend Dev'
];
const certs = [
  'Full Stack Development (Jspiders)',
  'AI-Powered Apps (Code With Mosh)',
  'Front End Development (Great Learning)',
  'UX Design (Coursera)',
  'Digital Marketing (Great Learning)',
  'AI in App Creation (Udemy)',
  'Email Automation (UiPath)'
];

const About = () => {
  const ref = useRef(null);
  
  return (
    <section ref={ref} id="about" className="relative py-16 px-8 md:px-16 lg:px-24 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* LEFT — Image Card */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Background Rotating Circle */}
          <motion.div 
            className="absolute -inset-10 border border-white/5 rounded-full border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -inset-20 border border-white/[0.02] rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full border border-white/5 z-10">
            <img
              src="/WhatsApp Image 2026-05-01 at 10.41.53 PM.jpeg"
              alt="Santhosh S"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Floating 'ENGINEER' text behind */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 select-none pointer-events-none z-0">
            <span className="text-8xl font-black text-white/[0.03] uppercase tracking-tighter">ENGINEER</span>
          </div>

          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 blur-3xl rounded-full z-0" />
        </motion.div>
        
        {/* RIGHT — Text Content */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">ABOUT ME</span>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight uppercase tracking-tighter">
            AI Software <br /> <span className="text-accent">Engineer</span>
          </h2>

          <p className="text-text-body text-xl leading-relaxed">
            I am a passionate Full-Stack Developer and AI Engineer specializing in building intelligent, responsive web systems that bridge elegant design with technical power. From RAG pipelines to full-stack applications, I craft solutions that are both smart and scalable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
             {stats.map((s, i) => (
               <div key={i} className="flex flex-col">
                  <span className="text-4xl font-black text-white mb-1">{s.num}</span>
                  <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">{s.label}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/5">
             {interests.map((item, i) => (
               <span key={i} className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-widest hover:border-accent hover:text-accent transition-all cursor-default">
                  {item}
               </span>
             ))}
          </div>
        </motion.div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
};

export default About;
