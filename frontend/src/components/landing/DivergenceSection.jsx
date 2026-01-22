import React from 'react';
import { Info, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { divergenceData } from '../../data/mock';

const typeIcons = {
  'Structural Divergence': ArrowUpRight,
  'Continuation Divergence': Minus,
  'Exhaustion Divergence': ArrowDownRight,
};

const DivergenceSection = () => {
  return (
    <section className="bg-[#080808] py-24 lg:py-32">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Signal Classification</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {divergenceData.title}
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-wider mt-6">
            {divergenceData.subtitle}
          </p>
        </div>

        {/* Content Box */}
        <div className="p-8 lg:p-12 bg-black border border-white/10 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-[#00FFD1]/30 flex-shrink-0">
              <Info className="text-[#00FFD1]" size={18} />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {divergenceData.content}
            </p>
          </div>
        </div>

        {/* Divergence Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divergenceData.types.map((item, index) => {
            const Icon = typeIcons[item.type];
            return (
              <div
                key={index}
                className="group p-8 bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-white/20 mb-6 group-hover:border-[#00FFD1] group-hover:bg-[#00FFD1]/10 transition-all duration-500">
                  <Icon className="text-white/60 group-hover:text-[#00FFD1] transition-colors duration-500" size={24} />
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">{item.type}</h3>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DivergenceSection;
