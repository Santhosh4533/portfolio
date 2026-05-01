import React from 'react';
import { motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="bg-[#0c0c0d] min-h-screen">
      <div className="noise-overlay" />
      <Preloader />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </motion.main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
