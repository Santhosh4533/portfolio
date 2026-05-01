import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, BookOpen, LayoutPanelTop } from 'lucide-react';

const courses = [
  { title: 'Full Stack Development', institute: 'Jspiders, Bangalore' },
  { title: 'Build AI-Powered Apps', institute: 'Code With Mosh' },
  { title: 'Front End Development', institute: 'Great Learning' },
  { title: 'Foundation of UX Design', institute: 'Coursera' },
  { title: 'Digital Marketing Introduction', institute: 'Great Learning' },
  { title: 'Artificial Intelligence in App Creation', institute: 'Udemy' },
  { title: 'Email Automation with Studio', institute: 'UiPath' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-8 md:px-16 lg:px-24 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="section-subtitle">EDUCATION & COURSES</span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight uppercase tracking-tighter">
            My <br /> <span className="text-accent italic">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Education — 1 Column */}
          <div className="lg:col-span-1 space-y-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent">
                  <GraduationCap className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter">Education</h3>
            </div>
            
            <div className="relative pl-8 border-l border-white/10">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-[#0c0c0d]" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">2021 — 2025</span>
                <h4 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-2">Bachelor of Technology</h4>
                <p className="text-text-muted text-[10px] uppercase tracking-widest mb-2">Computer Science & Engineering</p>
                <p className="text-text-body text-sm font-bold mb-4">Ramco Institute of Technology, Tamil Nadu</p>
                <div className="inline-block px-3 py-1 rounded bg-accent/10 border border-accent/20">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">CGPA: 7.12</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Professional — 2 Columns */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent">
                  <LayoutPanelTop className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter">Professional</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {courses.map((course, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-xl bg-bg-secondary border border-white/5 hover:border-accent transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors uppercase tracking-tight leading-tight mb-2">{course.title}</h4>
                    <p className="text-[9px] text-text-muted uppercase tracking-[0.2em]">{course.institute}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
};

export default Experience;
