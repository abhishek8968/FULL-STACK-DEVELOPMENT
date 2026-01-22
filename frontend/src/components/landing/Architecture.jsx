import React from 'react';
import { architectureData } from '../../data/mock';

const Architecture = () => {
  return (
    <section id="architecture" className="bg-[#050505] py-20 lg:py-28">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">System Design</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight mx-auto"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em', maxWidth: '600px' }}
          >
            {architectureData.title}
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
            {architectureData.subtitle}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-16">
          <div className="aspect-[21/6] bg-black border border-white/10 flex items-center justify-center relative overflow-hidden">
            {/* Flow visualization */}
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              {architectureData.layers.map((layer, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-[#00FFD1] text-lg lg:text-xl font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-white/30 text-xs uppercase tracking-wider hidden lg:block">{layer.name.split(' ')[0]}</span>
                  </div>
                  {index < architectureData.layers.length - 1 && (
                    <div className="w-8 lg:w-16 h-px bg-gradient-to-r from-[#00FFD1]/50 to-[#00FFD1]/10"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-[#00FFD1]"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-[#00FFD1]"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-[#00FFD1]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-[#00FFD1]"></div>
          </div>
        </div>

        {/* Layers Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureData.layers.map((layer, index) => (
            <div
              key={index}
              className="p-6 border-l border-white/10 hover:border-[#00FFD1]/50 transition-colors duration-500"
            >
              <span className="text-[#00FFD1] text-xs font-medium">0{index + 1}</span>
              <h3 className="text-white font-semibold text-base mt-2 mb-3">{layer.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
