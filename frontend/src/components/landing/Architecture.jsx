import React from 'react';
import { motion } from 'framer-motion';
import { architectureData } from '../../data/mock';

const Architecture = () => {
  return (
    <section id="architecture" className="bg-[#050505] py-16 lg:py-28 relative overflow-hidden">
      <div className="px-5 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">System Design</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight mx-auto"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em', maxWidth: '600px' }}
          >
            {architectureData.title}
          </h2>
          <p className="text-white/40 text-sm lg:text-base mt-3 lg:mt-4 max-w-xl mx-auto">
            {architectureData.subtitle}
          </p>
        </motion.div>

        {/* Architecture Flow - Simplified */}
        <motion.div 
          className="relative mb-10 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden lg:flex aspect-[21/5] bg-black border border-white/10 items-center justify-center relative">
            {/* Flow Nodes - Desktop */}
            <div className="flex items-center justify-center gap-8 lg:gap-16">
              {architectureData.layers.map((layer, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-2 hover:border-[#00FFD1] hover:shadow-[0_0_20px_rgba(0,255,209,0.2)] transition-all">
                      <span className="text-[#00FFD1] text-xl lg:text-2xl font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-white/40 text-xs uppercase tracking-wider">{layer.name.split(' ')[0]}</span>
                  </div>
                  {index < architectureData.layers.length - 1 && (
                    <div className="w-12 lg:w-20 h-px bg-gradient-to-r from-[#00FFD1]/50 to-[#00FFD1]/10" />
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-[#00FFD1]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-[#00FFD1]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-[#00FFD1]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-[#00FFD1]" />
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden flex flex-col items-center gap-3">
            {architectureData.layers.map((layer, index) => (
              <React.Fragment key={index}>
                <div className="w-full max-w-xs p-4 bg-black border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FFD1] text-lg font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-white/60 text-sm">{layer.name}</span>
                </div>
                {index < architectureData.layers.length - 1 && (
                  <div className="w-px h-4 bg-[#00FFD1]/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Layers Detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {architectureData.layers.map((layer, index) => (
            <motion.div
              key={index}
              className="p-5 lg:p-6 border-l-2 lg:border-l border-white/10 hover:border-[#00FFD1]/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-[#00FFD1] text-xs font-medium">0{index + 1}</span>
              <h3 className="text-white font-semibold text-base mt-2 mb-2 lg:mb-3">{layer.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
