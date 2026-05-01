import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, NotebookTabs } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 px-8 md:px-16 lg:px-24 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight uppercase tracking-tighter">
            Let's Start A <br /> <span className="text-accent italic">Project</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          {/* LEFT — Info */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Santhosh S</h3>
              <p className="text-text-body text-lg leading-relaxed">
                I'm currently available for freelance work. If you have a project that needs some creative injection, let's talk.
              </p>
            </div>
            
            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-1">Email Me</p>
                     <p className="text-white font-bold tracking-tight">santhosh45935533@gmail.com</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-1">Call Me</p>
                     <p className="text-white font-bold tracking-tight">+91 6379564148</p>
                  </div>
               </div>
            </div>

            <div className="pt-8 flex gap-4">
               {[
                 { id: 'In', link: 'https://www.linkedin.com/in/santhosh-s-3736aa248/' },
                 { id: 'Ig', link: 'https://www.instagram.com/_santhosh_55__?igsh=MWs1MWFjaXo3Y2xoag==' }
               ].map((s) => (
                 <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300">
                    <span className="text-xs font-bold uppercase">{s.id}</span>
                 </a>
               ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            className="lg:col-span-3 p-10 lg:p-12 rounded-2xl bg-bg-secondary border border-white/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-accent w-full justify-center group"
              >
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
