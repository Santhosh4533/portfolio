import { useRef } from 'react';
import { useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// Parallax scroll hook — elements move at different speeds
export const useParallax = (offset = 50) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(y, { damping: 30, stiffness: 100 });
  return { ref, y: smoothY };
};

// Scale on scroll — element scales based on viewport presence
export const useScrollScale = (from = 0.85, to = 1) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to]);
  const smoothScale = useSpring(scale, { damping: 30, stiffness: 100 });
  return { ref, scale: smoothScale };
};

// Opacity on scroll
export const useScrollOpacity = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  return { ref, opacity };
};

// Horizontal scroll progress (for horizontal gallery)
export const useHorizontalScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  return { ref, scrollYProgress };
};

// Word-by-word reveal animation variants
export const wordRevealVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const wordChildVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
    rotateX: -90,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger children for list animations
export const staggerContainer = (staggerDelay = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2,
    },
  },
});

export const fadeUpItem = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Section transition — clip-path reveal
export const sectionReveal = {
  hidden: {
    clipPath: 'inset(100% 0 0 0)',
  },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Line draw animation
export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};
