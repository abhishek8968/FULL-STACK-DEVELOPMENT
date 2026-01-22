import React from 'react';
import { motion } from 'framer-motion';
import { architectureData } from '../../data/mock';
import { FadeInUp, ScaleIn } from './animations/AnimatedSection';
import GlowingOrb from './animations/GlowingOrb';
import { GeometricPattern, MatrixRain } from './animations/ScienceElements';

const Architecture = () => {
  return (
    <section id="architecture" className="bg-[#050505] py-20 lg:py-28 relative overflow-hidden">
      {/* Science Background Elements */}
      <GeometricPattern className="top-0 right-0 opacity-30" />
      <MatrixRain className="opacity-10" />
      
      {/* Background Elements */}
      <GlowingOrb size={500} className="top-0 right-0 opacity-30" />
      
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">System Design</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight mx-auto"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em', maxWidth: '600px' }}
          >
            {architectureData.title}
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
            {architectureData.subtitle}
          </p>
          
          {/* Mathematical Formula */}
          <motion.div 
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[#00FFD1]/50 font-mono text-xs">f(x) = Σᵢ wᵢ · σ(Wᵢx + bᵢ)</span>
            <span className="text-white/20 text-xs">Multi-Layer Validation</span>
          </motion.div>
        </FadeInUp>

        {/* Animated Architecture Flow */}
        <ScaleIn className="relative mb-16">
          <div className="aspect-[21/6] bg-black border border-white/10 flex items-center justify-center relative overflow-hidden">
            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.line
                x1="15%" y1="50%" x2="85%" y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FFD1" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00FFD1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00FFD1" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Flow Nodes */}
            <div className="flex items-center justify-center gap-4 lg:gap-12 relative z-10">
              {architectureData.layers.map((layer, index) => (
                <React.Fragment key={index}>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="w-16 h-16 lg:w-24 lg:h-24 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-2 relative"
                      whileHover={{ 
                        borderColor: 'rgba(0,255,209,0.8)',
                        boxShadow: '0 0 30px rgba(0,255,209,0.3)'
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(0,255,209,0)',
                          '0 0 20px rgba(0,255,209,0.2)',
                          '0 0 0px rgba(0,255,209,0)'
                        ]
                      }}
                      transition={{ 
                        boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                      }}
                    >
                      <span className="text-[#00FFD1] text-xl lg:text-3xl font-semibold">{index + 1}</span>
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 border border-[#00FFD1]/50"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                    <span className="text-white/40 text-xs uppercase tracking-wider hidden lg:block">
                      {layer.name.split(' ')[0]}
                    </span>
                  </motion.div>
                  
                  {index < architectureData.layers.length - 1 && (
                    <motion.div 
                      className="w-8 lg:w-20 h-px relative"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1]/50 to-[#00FFD1]/10" />
                      {/* Moving dot */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FFD1] rounded-full"
                        animate={{ x: ['0%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: index * 0.3 }}
                      />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Corner accents with animation */}
            {['top-0 left-0 border-l border-t', 'top-0 right-0 border-r border-t', 'bottom-0 left-0 border-l border-b', 'bottom-0 right-0 border-r border-b'].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-8 h-8 border-[#00FFD1] ${pos}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
        </ScaleIn>

        {/* Layers Detail with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureData.layers.map((layer, index) => (
            <motion.div
              key={index}
              className="p-6 border-l border-white/10 hover:border-[#00FFD1]/50 transition-all duration-500 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.span 
                className="text-[#00FFD1] text-xs font-medium"
                whileHover={{ textShadow: '0 0 10px rgba(0,255,209,0.5)' }}
              >
                0{index + 1}
              </motion.span>
              <h3 className="text-white font-semibold text-base mt-2 mb-3 group-hover:text-[#00FFD1] transition-colors">{layer.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
