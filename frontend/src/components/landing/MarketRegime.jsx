import React from 'react';
import { motion } from 'framer-motion';
import { marketRegimeData } from '../../data/mock';
import { FadeInUp } from './animations/AnimatedSection';
import Card3D from './animations/Card3D';

const MarketRegime = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <FadeInUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Adaptive Logic</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {marketRegimeData.title}
            </h2>
          </div>
          <p className="text-white/30 text-sm uppercase tracking-wider">
            {marketRegimeData.subtitle}
          </p>
        </FadeInUp>

        {/* Regime Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketRegimeData.regimes.map((regime, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card3D className="h-full">
                <div className="relative h-full">
                  {/* Animated Top Line */}
                  <motion.div 
                    className="h-px bg-white/10"
                    whileHover={{ backgroundColor: 'rgba(0,255,209,0.6)' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="pt-8 pb-4"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.01)' }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.span 
                        className="text-[#00FFD1]/30 text-5xl font-bold"
                        whileHover={{ color: 'rgba(0,255,209,0.6)' }}
                        transition={{ duration: 0.3 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                      <h3 className="text-white font-semibold text-xl">{regime.name}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{regime.description}</p>
                  </motion.div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketRegime;
