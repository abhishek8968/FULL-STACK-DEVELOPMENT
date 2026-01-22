import React, { Suspense, lazy } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-[7.6923%] pt-[100px] pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 bg-[#00FFD1]"></span>
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase">TradingView Integrated</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-white font-semibold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)', letterSpacing: '-0.03em' }}
            >
              {heroData.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg">
              {heroData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#access"
                className="group inline-flex items-center justify-between gap-4 px-7 py-4 bg-[#00FFD1] text-black font-medium text-base hover:bg-white transition-all duration-300"
              >
                <span>{heroData.primaryCTA}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-between gap-4 px-7 py-4 border border-white/20 text-white/80 font-medium text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Price */}
            <div className="mt-16 flex items-baseline gap-4">
              <span className="text-[#00FFD1] text-4xl font-semibold tracking-tight">{heroData.price}</span>
              <span className="text-white/30 text-sm uppercase tracking-wider">Lifetime</span>
            </div>
          </div>

          {/* Right - Spline 3D */}
          <div className="flex-1 relative hidden lg:block" style={{ width: '600px', height: '600px', overflow: 'visible' }}>
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border border-[#00FFD1]/30 border-t-[#00FFD1] animate-spin"></div>
              </div>
            }>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
