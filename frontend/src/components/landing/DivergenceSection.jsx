import React from 'react';
import { motion } from 'framer-motion';
import { divergenceData } from '../../data/mock';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/AnimatedSection';
import Card3D from './animations/Card3D';

const DivergenceSection = () => {
  return (
    <section className="bg-[#050505] py-20 lg:py-28 relative overflow-hidden">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <FadeInUp className="max-w-2xl mb-14">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Classification</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {divergenceData.title}
          </h2>
          <p className="text-white/30 text-sm uppercase tracking-wider mt-3">
            {divergenceData.subtitle}
          </p>
        </FadeInUp>

        {/* Content with animated border */}
        <FadeInUp delay={0.2} className="mb-14 max-w-3xl">
          <motion.div
            className="relative"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FFD1]/30"
              whileHover={{ backgroundColor: 'rgba(0,255,209,0.6)' }}
            />
            <p className="text-white/50 text-base leading-relaxed pl-6">
              {divergenceData.content}
            </p>
          </motion.div>
        </FadeInUp>

        {/* Divergence Types with 3D Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5" staggerDelay={0.15}>
          {divergenceData.types.map((item, index) => (
            <StaggerItem key={index}>
              <Card3D className="h-full">
                <motion.div
                  className="p-8 bg-black h-full"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div 
                      className="w-10 h-10 border border-white/20 flex items-center justify-center"
                      whileHover={{ borderColor: 'rgba(0,255,209,0.5)', scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-white/50 text-xs font-medium"
                        whileHover={{ color: 'rgba(0,255,209,1)' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                    </motion.div>
                    <h3 className="text-white font-semibold text-lg">{item.type}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DivergenceSection;
