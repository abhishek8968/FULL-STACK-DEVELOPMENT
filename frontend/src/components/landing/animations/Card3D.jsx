import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = '', glowColor = '#00FFD1' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-lg opacity-0"
          style={{
            background: `linear-gradient(135deg, ${glowColor}40, transparent, ${glowColor}20)`,
            filter: 'blur(20px)',
          }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Card content */}
        <div className="relative">
          {children}
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${glowColor}10 45%, ${glowColor}20 50%, ${glowColor}10 55%, transparent 60%)`,
            transform: 'translateZ(1px)',
          }}
          animate={{
            x: isHovered ? '100%' : '-100%',
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card3D;
