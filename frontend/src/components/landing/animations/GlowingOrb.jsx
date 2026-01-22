import React from 'react';
import { motion } from 'framer-motion';

const GlowingOrb = ({ size = 400, color = '#00FFD1', className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}15 0%, ${color}05 40%, transparent 70%)`,
        filter: 'blur(60px)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

export default GlowingOrb;
