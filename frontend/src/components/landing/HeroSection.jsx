import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';
import ParticleField from './animations/ParticleField';
import GlowingOrb from './animations/GlowingOrb';
import { TextReveal, FloatingElement } from './animations/AnimatedSection';
import { MathBackground, GoldenSpiral, DataStream, WaveFunction } from './animations/ScienceElements';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Science/Math Background Elements */}
      <MathBackground />
      <DataStream className="opacity-30" />
      <GoldenSpiral className="top-20 right-20 opacity-20" size={300} />
      <GoldenSpiral className="bottom-20 left-10 opacity-10" size={200} />
      <WaveFunction className="bottom-40 left-0 right-0" />
      
      {/* Particle Background */}
      <ParticleField />
      
      {/* Glowing Orbs */}
      <GlowingOrb size={600} className="-top-40 -left-40" delay={0} />
      <GlowingOrb size={400} className="top-1/2 right-0" delay={2} />
      <GlowingOrb size={300} className="bottom-0 left-1/3" delay={4} color="#00FFD1" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,255,209,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[7.6923%] pt-[100px] pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-10"
            >
              <motion.span 
                className="w-2 h-2 bg-[#00FFD1]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase">TradingView Integrated</span>
            </motion.div>

            {/* Headline with Text Reveal */}
            <motion.h1 
              className="text-white font-semibold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)', letterSpacing: '-0.03em' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <TextReveal text={heroData.headline} delay={0.4} />
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {heroData.subheadline}
            </motion.p>

            {/* Formula Badge - For High IQ Appeal */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 bg-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-[#00FFD1]/60 font-mono text-xs">Δp = ∫(∂M/∂t)dt</span>
              <span className="text-white/30 text-xs">|</span>
              <span className="text-white/40 text-xs">Momentum Pressure Integral</span>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a
                href="#access"
                className="group relative inline-flex items-center justify-between gap-4 px-7 py-4 bg-[#00FFD1] text-black font-medium text-base overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{heroData.primaryCTA}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#architecture"
                className="group inline-flex items-center justify-between gap-4 px-7 py-4 border border-white/20 text-white/80 font-medium text-base hover:border-[#00FFD1]/50 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Price with Glow */}
            <motion.div 
              className="mt-16 flex items-baseline gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.span 
                className="text-[#00FFD1] text-4xl font-semibold tracking-tight relative"
                animate={{ textShadow: ['0 0 20px rgba(0,255,209,0.3)', '0 0 40px rgba(0,255,209,0.5)', '0 0 20px rgba(0,255,209,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {heroData.price}
              </motion.span>
              <span className="text-white/30 text-sm uppercase tracking-wider">Lifetime</span>
            </motion.div>
          </div>

          {/* Right - Spline 3D with Floating Animation */}
          <FloatingElement className="flex-1 relative hidden lg:block" duration={6}>
            <div style={{ width: '600px', height: '600px', overflow: 'visible' }}>
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 border-2 border-[#00FFD1]/30 border-t-[#00FFD1]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              }>
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </Suspense>
            </div>
          </FloatingElement>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/30 text-xs uppercase tracking-wider">Scroll</span>
        <motion.div 
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2"
          animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(0,255,209,0.5)', 'rgba(255,255,255,0.2)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-[#00FFD1] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
