import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0c0c0d] border-t border-white/5 py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
           <a href="#" className="flex items-center gap-2 mb-6 group">
             <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-display font-black text-xl">S</span>
             </div>
             <span className="font-display text-2xl font-black text-white uppercase tracking-tighter">
               Santhosh<span className="text-accent">.</span>
             </span>
          </a>
          <p className="text-text-muted text-sm max-w-xs leading-relaxed">
             © 2025 Santhosh S. All Rights Reserved. Built with passion for the web.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Navigation</span>
              {['Home', 'About', 'Projects', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-text-body text-sm hover:text-accent transition-colors font-medium">{l}</a>
              ))}
           </div>
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Socials</span>
              {[
                { name: 'Linkedin', link: 'https://www.linkedin.com/in/santhosh-s-3736aa248/' },
                { name: 'Instagram', link: 'https://www.instagram.com/_santhosh_55__?igsh=MWs1MWFjaXo3Y2xoag==' }
              ].map(s => (
                <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer" className="text-text-body text-sm hover:text-accent transition-colors font-medium">{s.name}</a>
              ))}
           </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
    </footer>
  );
};

export default Footer;
