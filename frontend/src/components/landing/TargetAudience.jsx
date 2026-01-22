import React from 'react';
import { motion } from 'framer-motion';
import { targetAudienceData } from '../../data/mock';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations/AnimatedSection';
import Card3D from './animations/Card3D';

const TargetAudience = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Target</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {targetAudienceData.title}
            </h2>
          </div>
          <p className="text-white/30 text-sm uppercase tracking-wider max-w-xs lg:text-right">
            {targetAudienceData.subtitle}
          </p>
        </FadeInUp>

        {/* Profiles with 3D Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5" staggerDelay={0.1}>
          {targetAudienceData.profiles.map((profile, index) => (
            <StaggerItem key={index}>
              <Card3D className="h-full">
                <motion.div 
                  className="p-6 lg:p-8 bg-black h-full"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <motion.h3 
                    className="text-white font-semibold text-base mb-3"
                    whileHover={{ color: '#00FFD1' }}
                    transition={{ duration: 0.3 }}
                  >
                    {profile.title}
                  </motion.h3>
                  <p className="text-white/40 text-xs leading-relaxed">{profile.description}</p>
                </motion.div>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TargetAudience;
