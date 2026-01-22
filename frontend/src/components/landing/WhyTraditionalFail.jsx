import React from 'react';
import { AlertTriangle, TrendingDown, Radio, Eye } from 'lucide-react';
import { whyTraditionalFailData } from '../../data/mock';

const icons = [AlertTriangle, TrendingDown, Radio, Eye];

const WhyTraditionalFail = () => {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">The Problem</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {whyTraditionalFailData.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyTraditionalFailData.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-8 bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-[#00FFD1] group-hover:bg-[#00FFD1]/10 transition-all duration-500">
                    <Icon className="text-white/60 group-hover:text-[#00FFD1] transition-colors duration-500" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xl mb-3">{point.title}</h3>
                    <p className="text-white/60 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTraditionalFail;
