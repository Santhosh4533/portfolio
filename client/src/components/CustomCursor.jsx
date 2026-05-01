import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [hoverState, setHoverState] = useState('default'); // 'default', 'link', 'text'
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor components
  const springX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 400 });
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    mouseX.set(x);
    mouseY.set(y);
  }, [x, y, mouseX, mouseY]);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    
    const handleMouseOver = (e) => {
      const el = e.target;
      if (el.closest('a') || el.closest('button')) {
        setHoverState('link');
      } else if (el.closest('p') || el.closest('h1') || el.closest('h2') || el.closest('span')) {
        setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* ── Main Cursor ─────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: hoverState === 'link' ? -25 : (hoverState === 'text' ? -1 : -4),
          translateY: hoverState === 'link' ? -25 : (hoverState === 'text' ? -15 : -4),
          width: hoverState === 'link' ? 50 : (hoverState === 'text' ? 2 : 8),
          height: hoverState === 'link' ? 50 : (hoverState === 'text' ? 30 : 8),
          backgroundColor: hoverState === 'link' ? 'transparent' : '#f81d43',
          border: hoverState === 'link' ? '1.5px solid #f81d43' : 'none',
          mixBlendMode: hoverState === 'link' ? 'difference' : 'normal',
        }}
        animate={{
          scale: clicked ? 0.7 : 1,
        }}
      />

      {/* ── Trailing Ring / Bloom ───────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: -20,
          translateY: -20,
          width: 40,
          height: 40,
          border: '1px solid rgba(248, 29, 67, 0.3)',
          opacity: hoverState !== 'default' ? 0 : 0.6,
        }}
        animate={{
          scale: clicked ? 1.4 : 1,
        }}
      />

      {/* ── Glow Effect (Subtle) ────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full blur-2xl"
        style={{
          x: springX,
          y: springY,
          translateX: -30,
          translateY: -30,
          width: 60,
          height: 60,
          backgroundColor: '#f81d43',
          opacity: hoverState === 'link' ? 0.15 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
