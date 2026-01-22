import React from 'react';
import { motion } from 'framer-motion';

// Mathematical formulas and equations
const formulas = [
  'Δp = ∫(∂M/∂t)dt',
  'σ² = Σ(xi - μ)²/n',
  'α = lim(Δt→0) ΔV/Δt',
  'ρ = cov(X,Y)/σxσy',
  'φ = (1+√5)/2',
  '∇·E = ρ/ε₀',
  'dS/dt = μS·dt + σS·dW',
  'P(A|B) = P(B|A)·P(A)/P(B)',
  'H = -Σp(x)log p(x)',
  'F = ma',
  'E = mc²',
  'λ = h/mv',
  '∂ψ/∂t = -iĤψ/ℏ',
  'Γ(n) = (n-1)!',
  'ζ(s) = Σ1/nˢ',
];

export const FloatingFormula = ({ formula, className = '', delay = 0 }) => (
  <motion.div
    className={`absolute text-[#00FFD1]/10 font-mono text-xs pointer-events-none select-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0, 0.15, 0],
      y: [0, -30, -60],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'linear'
    }}
  >
    {formula}
  </motion.div>
);

export const MathBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {formulas.map((formula, i) => (
        <FloatingFormula
          key={i}
          formula={formula}
          className={`
            ${i % 3 === 0 ? 'left-[10%]' : i % 3 === 1 ? 'left-[50%]' : 'left-[80%]'}
            ${i % 5 === 0 ? 'top-[10%]' : i % 5 === 1 ? 'top-[30%]' : i % 5 === 2 ? 'top-[50%]' : i % 5 === 3 ? 'top-[70%]' : 'top-[90%]'}
          `}
          delay={i * 0.8}
        />
      ))}
    </div>
  );
};

export const GoldenSpiral = ({ className = '', size = 200 }) => (
  <motion.svg
    className={`absolute pointer-events-none ${className}`}
    width={size}
    height={size}
    viewBox="0 0 200 200"
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ opacity: 0.1, rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
  >
    <path
      d="M100,100 Q100,50 150,50 Q200,50 200,100 Q200,175 125,175 Q50,175 50,100 Q50,25 125,25"
      fill="none"
      stroke="#00FFD1"
      strokeWidth="0.5"
    />
    <path
      d="M100,100 Q100,75 125,75 Q150,75 150,100 Q150,137.5 112.5,137.5 Q75,137.5 75,100 Q75,62.5 112.5,62.5"
      fill="none"
      stroke="#00FFD1"
      strokeWidth="0.5"
    />
  </motion.svg>
);

export const GeometricPattern = ({ className = '' }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.05 }}
    transition={{ duration: 2 }}
  >
    <svg width="400" height="400" viewBox="0 0 400 400">
      {/* Fibonacci rectangles */}
      <motion.rect x="0" y="0" width="233" height="144" fill="none" stroke="#00FFD1" strokeWidth="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
      <motion.rect x="233" y="0" width="89" height="89" fill="none" stroke="#00FFD1" strokeWidth="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.3 }} />
      <motion.rect x="233" y="89" width="55" height="55" fill="none" stroke="#00FFD1" strokeWidth="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.6 }} />
      
      {/* Hexagonal grid */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <motion.polygon
            key={`hex-${row}-${col}`}
            points={`
              ${50 + col * 80 + (row % 2) * 40},${50 + row * 70}
              ${80 + col * 80 + (row % 2) * 40},${35 + row * 70}
              ${110 + col * 80 + (row % 2) * 40},${50 + row * 70}
              ${110 + col * 80 + (row % 2) * 40},${80 + row * 70}
              ${80 + col * 80 + (row % 2) * 40},${95 + row * 70}
              ${50 + col * 80 + (row % 2) * 40},${80 + row * 70}
            `}
            fill="none"
            stroke="#00FFD1"
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: (row * 4 + col) * 0.1 }}
          />
        ))
      )}
    </svg>
  </motion.div>
);

export const DataStream = ({ className = '' }) => {
  const streamData = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.3,
    duration: 3 + Math.random() * 2,
    left: `${5 + i * 5}%`,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streamData.map((item, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px h-20 bg-gradient-to-b from-[#00FFD1]/30 via-[#00FFD1]/10 to-transparent"
          style={{ left: item.left }}
          animate={{
            y: ['-100%', '100vh'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export const WaveFunction = ({ className = '' }) => (
  <motion.svg
    className={`absolute pointer-events-none opacity-10 ${className}`}
    width="100%"
    height="100"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M0,50 Q125,0 250,50 T500,50 T750,50 T1000,50"
      fill="none"
      stroke="#00FFD1"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
    />
    <motion.path
      d="M0,50 Q125,100 250,50 T500,50 T750,50 T1000,50"
      fill="none"
      stroke="#00FFD1"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: 'loop' }}
    />
  </motion.svg>
);

export const QuantumDots = ({ className = '' }) => {
  const dots = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#00FFD1]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export const MatrixRain = ({ className = '' }) => {
  const columns = Array.from({ length: 15 }, (_, i) => ({
    left: `${i * 7}%`,
    delay: Math.random() * 5,
    speed: 3 + Math.random() * 4,
    chars: '∑∏∫∂∇Δ√∞≈≠±×÷αβγδεζηθλμπρσφψω'.split(''),
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-20 ${className}`}>
      {columns.map((col, i) => (
        <motion.div
          key={i}
          className="absolute top-0 flex flex-col gap-2 text-[#00FFD1] font-mono text-xs"
          style={{ left: col.left }}
          animate={{ y: ['-100%', '100%'] }}
          transition={{
            duration: col.speed,
            repeat: Infinity,
            delay: col.delay,
            ease: 'linear',
          }}
        >
          {col.chars.slice(0, 8).map((char, j) => (
            <span key={j} style={{ opacity: 1 - j * 0.1 }}>{char}</span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
