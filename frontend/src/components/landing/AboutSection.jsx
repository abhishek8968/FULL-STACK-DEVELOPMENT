import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Plug, Brain } from 'lucide-react';
import { aboutData } from '../../data/mock';

const serviceIcons = [Code2, BarChart3, Plug, Brain];

const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-16 lg:py-28 border-t border-white/5">
      <div className="px-5 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Company</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {aboutData.title}
            </h2>
            <p className="text-white/30 text-sm uppercase tracking-wider mt-2">
              {aboutData.subtitle}
            </p>
            <p className="text-white/50 text-base lg:text-lg mt-6 lg:mt-8 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Services */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {aboutData.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={service}
                    className="flex items-center gap-3 px-3 py-2.5 border border-white/5 bg-white/[0.02]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={14} className="text-[#00FFD1]/60 flex-shrink-0" />
                    <span className="text-white/60 text-xs">{service}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-5 lg:p-6 bg-[#0a0a0a] border border-white/5 hover:border-[#00FFD1]/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-[#00FFD1] text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
