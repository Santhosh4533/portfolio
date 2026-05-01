import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const skillGroups = [
  { 
    title: 'Languages', 
    items: ['Java', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Python'] 
  },
  { 
    title: 'Frameworks & Libraries', 
    items: ['React.js', 'Bootstrap', 'WordPress', 'Node.js'] 
  },
  { 
    title: 'AI & Automation Tools', 
    items: ['Claude AI', 'Vercel V0', 'Lovable', 'Warp', 'Mistral', 'UiPath', 'Ready AI', 'Love Art'] 
  },
  { 
    title: 'Databases', 
    items: ['MySQL', 'MongoDB', 'Oracle APEX'] 
  },
  { 
    title: 'UI/UX & Design Tools', 
    items: ['Figma', 'Sketch', 'Adobe XD', 'XAMPP'] 
  },
  { 
    title: 'Developer Tools', 
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'REST APIs', 'CMS'] 
  },
  { 
    title: 'Machine Learning', 
    items: ['scikit-learn', 'pandas', 'NumPy', 'Regression Modeling', 'Feature Engineering'] 
  },
  { 
    title: 'Soft Skills', 
    items: ['Collaboration', 'Agile Workflow', 'HR Operations', 'Documentation'] 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 px-8 md:px-16 lg:px-24 bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="section-subtitle">MY TALENT</span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight uppercase tracking-tighter">
            Technical <br /> <span className="text-accent italic">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span 
                    key={j}
                    className="text-[10px] px-3 py-1.5 rounded-md bg-white/5 text-text-body font-medium hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-12" />
    </section>
  );
};

export default Skills;
