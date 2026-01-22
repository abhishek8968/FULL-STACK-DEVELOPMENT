import React, { Suspense, lazy } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../../data/mock';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
            repeating-linear-gradient(-90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-[7.6923%] pt-[120px] pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 mb-8">
              <span className="w-2 h-2 bg-[#00FFD1] animate-pulse"></span>
              <span className="text-white/60 text-sm tracking-wider uppercase">TradingView Integration</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-white font-semibold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 66px)', letterSpacing: '-0.62px' }}
            >
              {heroData.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              {heroData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#access"
                className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-[#00FFD1] text-black font-medium text-lg hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400 min-w-[200px]"
                style={{ borderRadius: '0px' }}
              >
                <span>{heroData.primaryCTA}</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-white/10 text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 min-w-[200px]"
                style={{ borderRadius: '0px' }}
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Price Tag */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="text-white/40 text-sm uppercase tracking-wider">Lifetime License</span>
              <p className="text-[#00FFD1] text-3xl font-semibold mt-1">{heroData.price}</p>
            </div>
          </div>

          {/* Right - Spline 3D */}
          <div className="flex-1 relative" style={{ width: '700px', height: '700px', overflow: 'visible' }}>
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#00FFD1] border-t-transparent animate-spin"></div>
              </div>
            }>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="text-white/40" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
