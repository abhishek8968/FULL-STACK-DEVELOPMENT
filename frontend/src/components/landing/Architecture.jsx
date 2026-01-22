import React from 'react';
import { Layers, GitBranch, Filter, Shield } from 'lucide-react';
import { architectureData } from '../../data/mock';

const layerIcons = [Layers, GitBranch, Filter, Shield];

const Architecture = () => {
  return (
    <section id="architecture" className="bg-[#080808] py-24 lg:py-32">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">System Design</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight mx-auto"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', maxWidth: '800px' }}
          >
            {architectureData.title}
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            {architectureData.subtitle}
          </p>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="relative mb-20">
          <div className="aspect-[16/6] bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto border border-[#00FFD1]/30 flex items-center justify-center mb-4">
                <Layers className="text-[#00FFD1]" size={32} />
              </div>
              <span className="text-white/40 text-sm uppercase tracking-wider">Architecture Diagram</span>
              <p className="text-white/20 text-xs mt-2">Visual representation of QMDE layers</p>
            </div>
          </div>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00FFD1]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#00FFD1]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#00FFD1]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#00FFD1]"></div>
        </div>

        {/* Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureData.layers.map((layer, index) => {
            const Icon = layerIcons[index];
            return (
              <div
                key={index}
                className="group relative p-6 bg-black border border-white/5 hover:border-[#00FFD1]/30 transition-all duration-500"
              >
                {/* Layer Number */}
                <div className="absolute top-4 right-4 text-[#00FFD1]/20 text-5xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 mb-5 group-hover:border-[#00FFD1] transition-colors duration-500">
                    <Icon className="text-white/60 group-hover:text-[#00FFD1] transition-colors duration-500" size={18} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{layer.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{layer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
