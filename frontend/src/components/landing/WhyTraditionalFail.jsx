import React from 'react';
import { motion } from 'framer-motion';
import { whyTraditionalFailData } from '../../data/mock';

const WhyTraditionalFail = () => {
  return (
    <section className="bg-black py-16 lg:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="px-5 lg:px-[7.6923%] max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">The Problem</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {whyTraditionalFailData.title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-px lg:bg-white/5">
          {whyTraditionalFailData.points.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 lg:p-8 bg-[#0a0a0a] lg:bg-black border border-white/5 lg:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-[#00FFD1]/20 text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white font-semibold text-base lg:text-lg mb-2 lg:mb-3">{point.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTraditionalFail;
