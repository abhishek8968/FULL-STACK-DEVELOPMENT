import React from 'react';
import { motion } from 'framer-motion';
import { whyTraditionalFailData } from '../../data/mock';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/AnimatedSection';
import Card3D from './animations/Card3D';

const WhyTraditionalFail = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FFD1]/5 blur-[150px] pointer-events-none" />
      
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <FadeInUp className="mb-14">
          <motion.span 
            className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium inline-block"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            viewport={{ once: true }}
          >
            The Problem
          </motion.span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {whyTraditionalFailData.title}
          </h2>
        </FadeInUp>

        {/* Grid with 3D Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5" staggerDelay={0.15}>
          {whyTraditionalFailData.points.map((point, index) => (
            <StaggerItem key={index}>
              <Card3D className="h-full">
                <motion.div
                  className="p-8 bg-black h-full"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-[#00FFD1]/20 text-6xl font-bold mb-6"
                    whileHover={{ color: 'rgba(0,255,209,0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                  <h3 className="text-white font-semibold text-lg mb-3">{point.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyTraditionalFail;
