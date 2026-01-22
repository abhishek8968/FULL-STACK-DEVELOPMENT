import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { momentumIntelligenceData } from '../../data/mock';
import { FadeInLeft, FadeInRight } from './animations/AnimatedSection';

const MomentumIntelligence = () => {
  return (
    <section id="intelligence" className="bg-black py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-[#00FFD1]"
            style={{ top: `${i * 10}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3], x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <FadeInLeft className="flex-1">
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Core Technology</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {momentumIntelligenceData.title}
            </h2>
            <p className="text-white/40 text-base mt-5 leading-relaxed max-w-md">
              {momentumIntelligenceData.description}
            </p>
          </FadeInLeft>

          {/* Right - Capabilities with Stagger Animation */}
          <FadeInRight className="flex-1">
            <div className="space-y-0 border-t border-white/10">
              {momentumIntelligenceData.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 py-5 border-b border-white/5 hover:border-[#00FFD1]/30 transition-all duration-500 group cursor-default"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(0,255,209,0.02)' }}
                >
                  <motion.div
                    className="w-6 h-6 border border-[#00FFD1]/30 flex items-center justify-center group-hover:bg-[#00FFD1]/10 group-hover:border-[#00FFD1] transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="text-[#00FFD1]" size={12} />
                  </motion.div>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">{capability}</p>
                </motion.div>
              ))}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default MomentumIntelligence;
