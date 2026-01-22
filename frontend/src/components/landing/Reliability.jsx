import React from 'react';
import { motion } from 'framer-motion';
import { reliabilityData } from '../../data/mock';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/AnimatedSection';
import Card3D from './animations/Card3D';

const Reliability = () => {
  return (
    <section id="reliability" className="bg-[#050505] py-20 lg:py-28 relative overflow-hidden">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <FadeInUp className="mb-14">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Standards</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {reliabilityData.title}
          </h2>
          <p className="text-white/40 text-sm mt-3">
            {reliabilityData.subtitle}
          </p>
        </FadeInUp>

        {/* Features Grid with 3D Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5" staggerDelay={0.1}>
          {reliabilityData.features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card3D>
                <motion.div 
                  className="p-8 bg-black"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className="w-12 h-12 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0 relative"
                      whileHover={{ borderColor: 'rgba(0,255,209,0.8)' }}
                    >
                      <motion.span 
                        className="text-[#00FFD1] text-sm font-bold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.span>
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#00FFD1]/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* TradingView Integration Badge with Animation */}
        <motion.div 
          className="mt-12 p-8 border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ borderColor: 'rgba(0,255,209,0.3)' }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFD1]/5 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-14 h-14 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center"
                animate={{ 
                  boxShadow: ['0 0 0px rgba(0,255,209,0)', '0 0 20px rgba(0,255,209,0.3)', '0 0 0px rgba(0,255,209,0)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[#00FFD1] text-lg font-bold">TV</span>
              </motion.div>
              <div>
                <p className="text-white font-medium">TradingView Integration</p>
                <p className="text-white/40 text-sm">Professional-grade platform compatibility</p>
              </div>
            </div>
            <motion.span 
              className="text-[#00FFD1]/50 text-xs uppercase tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Native Integration
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reliability;
