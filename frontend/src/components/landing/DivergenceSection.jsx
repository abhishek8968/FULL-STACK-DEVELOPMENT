import React from 'react';
import { divergenceData } from '../../data/mock';

const DivergenceSection = () => {
  return (
    <section className="bg-[#050505] py-20 lg:py-28">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Classification</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {divergenceData.title}
          </h2>
          <p className="text-white/30 text-sm uppercase tracking-wider mt-3">
            {divergenceData.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="mb-14 max-w-3xl">
          <p className="text-white/50 text-base leading-relaxed border-l-2 border-[#00FFD1]/30 pl-6">
            {divergenceData.content}
          </p>
        </div>

        {/* Divergence Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {divergenceData.types.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-black hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-[#00FFD1]/50 transition-colors">
                  <span className="text-white/50 text-xs font-medium group-hover:text-[#00FFD1] transition-colors">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-white font-semibold text-lg">{item.type}</h3>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivergenceSection;
