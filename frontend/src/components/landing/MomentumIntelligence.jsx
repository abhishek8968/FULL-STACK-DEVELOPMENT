import React from 'react';
import { Activity, Zap, TrendingUp, BarChart3, Layers } from 'lucide-react';
import { momentumIntelligenceData } from '../../data/mock';

const MomentumIntelligence = () => {
  return (
    <section id="intelligence" className="bg-black py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Core Technology</span>
            <h2 
              className="text-white font-semibold mt-4 leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              {momentumIntelligenceData.title}
            </h2>
            <p className="text-white/60 text-lg mt-6 leading-relaxed">
              {momentumIntelligenceData.description}
            </p>
          </div>

          {/* Right - Capabilities */}
          <div className="flex-1">
            <div className="space-y-4">
              {momentumIntelligenceData.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 bg-[#121212] border border-white/5 hover:border-[#00FFD1]/30 transition-all duration-500"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-[#00FFD1]/30 flex-shrink-0 group-hover:bg-[#00FFD1]/10 transition-all duration-500">
                    <Activity className="text-[#00FFD1]" size={14} />
                  </div>
                  <p className="text-white/80 leading-relaxed pt-1">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Structure Example Placeholder */}
        <div className="mt-20">
          <div className="relative aspect-[16/5] bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <BarChart3 className="text-[#00FFD1]/60" size={28} />
                <Layers className="text-white/40" size={28} />
                <TrendingUp className="text-[#00FFD1]/60" size={28} />
              </div>
              <span className="text-white/40 text-sm uppercase tracking-wider">Market Structure Example</span>
              <p className="text-white/20 text-xs mt-2">Momentum pressure visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumIntelligence;
