import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socials = [
    { name: 'Linkedin', icon: Linkedin, link: 'https://www.linkedin.com/in/santhosh-s-3736aa248/' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/_santhosh_55__?igsh=MWs1MWFjaXo3Y2xoag==' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[900] px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled ? 'rgba(12, 12, 13, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
         <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white font-display font-black text-xl">S</span>
         </div>
         <span className="font-display text-2xl font-black text-white uppercase tracking-tighter">
           Santhosh<span className="text-accent">.</span>
         </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-10">
        {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] font-bold text-white uppercase tracking-widest hover:text-accent transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right - Socials & Menu */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-4">
           {socials.map((s) => (
             <a key={s.name} href={s.link} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                <s.icon className="w-4 h-4" />
             </a>
           ))}
        </div>
        <button className="lg:hidden w-12 h-12 rounded-full bg-accent flex items-center justify-center group">
           <div className="flex flex-col gap-1.5 items-center">
              <span className="w-6 h-[2px] bg-white rounded-full group-hover:w-8 transition-all" />
              <span className="w-4 h-[2px] bg-white rounded-full group-hover:w-8 transition-all" />
           </div>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;

