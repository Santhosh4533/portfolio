import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Amazon Clone',
    subtitle: 'E-Commerce UI Replica',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'An end-to-end recreation of Amazon\'s digital storefront with responsive product listings and refined navigation.',
    link: 'https://ytyt7t.github.io/Amazon-Clone/amz.html',
    color: '#1A1A0C',
    img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    title: 'Ocean Garden',
    subtitle: 'Interactive Web Experience',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A premium, immersive website conceptualizing an aquatic sanctuary with sophisticated animations.',
    link: 'https://ytyt7t.github.io/Oceangarden./',
    color: '#0A0F1A',
    img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    title: 'Text to Voice',
    subtitle: 'Speech Converter Tool',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Advanced browser-based utility designed for accessibility, converting digital text into high-fidelity spoken word.',
    link: 'https://ytyt7t.github.io/speechconverter/text.html',
    color: '#0F0A1A',
    img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04',
    title: 'Portfolio Alpha',
    subtitle: 'Task Management Logic',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Lightweight task management application focused on minimalist UI design and local data persistence.',
    link: 'https://ytyt7t.github.io/To-Do-List/todo.html',
    color: '#0A1A0F',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '05',
    title: 'Calculator App',
    subtitle: 'Math Utility Tool',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Functional utility tool with a sleek numerical interface, implementing standard complex operations.',
    link: 'https://ytyt7t.github.io/Calculator/calc.html',
    color: '#1A0A0A',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '06',
    title: 'IPL Mock Site',
    subtitle: 'Sports Fan Page',
    tech: ['HTML', 'CSS'],
    desc: 'Foundational project — a dedicated fan interface for the Indian Premier League cricket tournament.',
    link: 'https://ytyt7t.github.io/mock_ipl/Untitled2.html',
    color: '#0A0F1A',
    img: 'https://images.unsplash.com/photo-1540747913346-19212a4b423e?auto=format&fit=crop&q=80&w=800',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative flex flex-col h-full rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Top Header */}
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{project.id}</span>
          <div className="flex gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-text-muted font-bold uppercase tracking-widest">{t}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-8 flex-1">
          <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-accent/60 text-[10px] font-bold uppercase tracking-widest mb-4">{project.subtitle}</p>
          <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
            {project.desc}
          </p>
        </div>

        {/* Footer Link */}
        <div className="mt-auto pt-6 border-t border-white/5 flex justify-end">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest hover:text-accent transition-all group/btn"
          >
            Visit Live Site
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-accent transition-colors">
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
      
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 md:px-16 lg:px-24 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="section-subtitle">PROJECTS</span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight uppercase tracking-tighter">
            Selected <br /> <span className="text-accent italic">Works</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
};

export default Projects;
