import React from 'react';
import { TrendingUp, Minimize2, Maximize2 } from 'lucide-react';
import { marketRegimeData } from '../../data/mock';

const regimeIcons = [TrendingUp, Minimize2, Maximize2];
const regimeColors = ['#00FFD1', '#6FD2C0', '#00FFD1'];

const MarketRegime = () => {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Adaptive Logic</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight mx-auto"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', maxWidth: '700px' }}
          >
            {marketRegimeData.title}
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            {marketRegimeData.subtitle}
          </p>
        </div>

        {/* Regime Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marketRegimeData.regimes.map((regime, index) => {
            const Icon = regimeIcons[index];
            return (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                  style={{ backgroundColor: regimeColors[index] }}
                />
                
                <div className="p-8 pt-10 bg-[#121212] border border-white/5 border-t-0 h-full">
                  <div className="w-16 h-16 flex items-center justify-center border border-white/10 mb-6 group-hover:border-[#00FFD1]/50 transition-colors duration-500">
                    <Icon className="text-white/40 group-hover:text-[#00FFD1] transition-colors duration-500" size={28} />
                  </div>
                  <h3 className="text-white font-semibold text-2xl mb-4">{regime.name}</h3>
                  <p className="text-white/50 leading-relaxed">{regime.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketRegime;
