import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPct((p) => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setDone(true), 600); return 100; }
        return p + Math.floor(Math.random() * 8 + 3);
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col items-center justify-center"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Corner labels */}
          <div className="absolute top-8 left-8 text-white/20 text-[9px] font-bold uppercase tracking-[0.5em]">
            Santhosh S © 2025
          </div>
          <div className="absolute top-8 right-8 text-white/20 text-[9px] font-bold uppercase tracking-[0.5em]">
            Loading
          </div>

          {/* Center content */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-display font-black text-3xl text-black">S</span>
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <motion.p
                className="text-white/30 text-[10px] font-bold uppercase tracking-[0.5em]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Building experience
              </motion.p>

              {/* Progress bar */}
              <div className="w-48 h-[2px] bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>

              <span className="font-display font-black text-4xl text-white/90">
                {Math.min(pct, 100)}<span className="text-accent text-2xl">%</span>
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 text-[9px] font-bold uppercase tracking-[0.5em]">
            AI Software Developer
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
