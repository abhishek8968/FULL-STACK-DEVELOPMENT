import React from 'react';
import { motion } from 'framer-motion';
import { exclusivityData } from '../../data/mock';
import { FadeInLeft, FadeInRight } from './animations/AnimatedSection';

const Exclusivity = () => {
  return (
    <section id="access" className="bg-[#050505] py-20 lg:py-28 relative overflow-hidden">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <FadeInLeft className="flex-1">
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Access</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {exclusivityData.title}
            </h2>
            <p className="text-white/30 text-sm uppercase tracking-wider mt-3">
              {exclusivityData.subtitle}
            </p>
            <p className="text-white/50 text-base mt-8 leading-relaxed max-w-md">
              {exclusivityData.content}
            </p>
          </FadeInLeft>

          {/* Right - Points with Hover Effects */}
          <FadeInRight className="flex-1">
            <div className="border-t border-white/10">
              {exclusivityData.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 py-5 border-b border-white/5 group cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10, 
                    borderColor: 'rgba(0,255,209,0.3)',
                    backgroundColor: 'rgba(0,255,209,0.02)'
                  }}
                >
                  <motion.span 
                    className="text-[#00FFD1]/30 text-xs font-medium w-6"
                    whileHover={{ color: 'rgba(0,255,209,0.8)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">{point}</p>
                </motion.div>
              ))}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
