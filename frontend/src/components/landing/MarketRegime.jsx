import React from 'react';
import { marketRegimeData } from '../../data/mock';

const MarketRegime = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
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
        </div>

        {/* Regime Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketRegimeData.regimes.map((regime, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Top Line */}
              <div className="h-px bg-white/10 group-hover:bg-[#00FFD1]/50 transition-colors duration-500" />
              
              <div className="pt-8 pb-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#00FFD1]/50 text-4xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-white font-semibold text-xl">{regime.name}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{regime.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketRegime;
