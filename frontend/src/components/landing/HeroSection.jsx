import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';

// Lazy load heavy components
const Spline = lazy(() => import('@splinetool/react-spline'));
const ParticleField = lazy(() => import('./animations/ParticleField'));

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    // Delay Spline load for better initial paint
    const timer = setTimeout(() => setShowSpline(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Simplified Background for Performance */}
      {!isMobile && (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      )}
      
      {/* Static Gradient Orbs - CSS only, no JS animation */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00FFD1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00FFD1]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Simple Grid - CSS only */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,209,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 w-full px-5 lg:px-[7.6923%] pt-24 lg:pt-[100px] pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 lg:mb-10"
            >
              <span className="w-2 h-2 bg-[#00FFD1] animate-pulse" />
              <span className="text-white/50 text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] uppercase">TradingView Integrated</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-white font-semibold leading-[1.1] mb-4 lg:mb-6"
              style={{ fontSize: 'clamp(28px, 5vw, 58px)', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {heroData.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-white/50 text-base lg:text-lg leading-relaxed mb-8 lg:mb-12 max-w-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heroData.subheadline}
            </motion.p>

            {/* Formula Badge - Hidden on mobile */}
            <motion.div
              className="hidden lg:inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 bg-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-[#00FFD1]/60 font-mono text-xs">Δp = ∫(∂M/∂t)dt</span>
              <span className="text-white/30 text-xs">|</span>
              <span className="text-white/40 text-xs">Momentum Pressure Integral</span>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#access"
                className="group inline-flex items-center justify-center gap-3 px-6 lg:px-7 py-3.5 lg:py-4 bg-[#00FFD1] text-black font-medium text-sm lg:text-base hover:bg-white transition-colors duration-300"
              >
                <span>{heroData.primaryCTA}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#architecture"
                className="group inline-flex items-center justify-center gap-3 px-6 lg:px-7 py-3.5 lg:py-4 border border-white/20 text-white/80 font-medium text-sm lg:text-base hover:border-white/40 hover:text-white transition-all duration-300"
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Price */}
            <motion.div 
              className="mt-10 lg:mt-16 flex items-baseline gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-[#00FFD1] text-3xl lg:text-4xl font-semibold tracking-tight">
                {heroData.price}
              </span>
              <span className="text-white/30 text-xs lg:text-sm uppercase tracking-wider">Per Project</span>
            </motion.div>
          </div>

          {/* Right - Spline 3D (Desktop Only) */}
          {!isMobile && showSpline && (
            <motion.div 
              className="flex-1 relative hidden lg:flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: '550px', height: '550px' }}>
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 border border-[#00FFD1]/30 border-t-[#00FFD1] animate-spin" />
                  </div>
                }>
                  <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
                </Suspense>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/30 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-[#00FFD1] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
