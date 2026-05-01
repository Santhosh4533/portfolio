import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0c0c0d] flex items-center px-8 md:px-16 lg:px-24">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
         <h2 className="font-display text-[15vw] text-white opacity-[0.03] uppercase tracking-tighter translate-y-[10%]">
            ENGINEER
         </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left Column — Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-subtitle">HELLO</span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 leading-[1.2] uppercase tracking-tighter">
            i'm Santhosh S <br /> an
            <span className="text-accent italic"> AI Software Engineer</span>
          </h1>
          <p className="text-text-body text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            I'm an AI software engineer based in India, specializing in building intelligent applications and high-performance systems.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <a href="#contact" className="btn-accent">
               Hire Me <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 cursor-pointer group">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Download className="w-5 h-5" />
               </div>
               <span className="text-sm font-bold text-white uppercase tracking-widest">Download CV</span>
            </div>
          </div>

          {/* Info Stats */}
          <div className="flex gap-16">
             <div className="flex flex-col">
                <span className="text-accent font-display text-2xl">06</span>
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em]">Months Experience</span>
             </div>
             <div className="flex flex-col">
                <span className="text-white font-display text-2xl">10+</span>
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em]">Completed Projects</span>
             </div>
          </div>
        </motion.div>

        {/* Right Column — Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-lg aspect-square">
             {/* Decorative Circles */}
             <div className="absolute -inset-10 border border-white/5 rounded-full animate-pulse" />
             <div className="absolute -inset-20 border border-white/5 rounded-full" />
             
             <img 
               src="/profile-removebg-preview.png" 
               alt="Profile" 
               className="relative z-10 w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
               }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
