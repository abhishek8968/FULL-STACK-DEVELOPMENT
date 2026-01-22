import React from 'react';
import { motion } from 'framer-motion';
import { notForEveryoneData } from '../../data/mock';
import { FadeInUp } from './animations/AnimatedSection';
import GlowingOrb from './animations/GlowingOrb';

const NotForEveryone = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <GlowingOrb size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="px-6 lg:px-[7.6923%] max-w-[900px] mx-auto text-center relative">
        {/* Title with Fade Effect */}
        <FadeInUp>
          <motion.h2 
            className="text-white/20 font-semibold leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            whileInView={{ 
              textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 30px rgba(255,255,255,0.1)', '0 0 0px rgba(255,255,255,0)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            viewport={{ once: true }}
          >
            {notForEveryoneData.title}
          </motion.h2>
        </FadeInUp>

        {/* Content */}
        <FadeInUp delay={0.2}>
          <p className="text-white/40 text-base mt-8 leading-relaxed max-w-2xl mx-auto">
            {notForEveryoneData.content}
          </p>
        </FadeInUp>

        {/* Statement with Premium Animation */}
        <motion.div 
          className="mt-16 pt-10 border-t border-white/5 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#00FFD1]/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-[#00FFD1] text-2xl lg:text-4xl font-semibold tracking-tight"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(0,255,209,0.3)',
                '0 0 40px rgba(0,255,209,0.5)',
                '0 0 20px rgba(0,255,209,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {notForEveryoneData.statement}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotForEveryone;
