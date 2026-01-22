import React from 'react';
import { whyTraditionalFailData } from '../../data/mock';

const WhyTraditionalFail = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">The Problem</span>
          <h2 
            className="text-white font-semibold mt-3 leading-tight"
            style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {whyTraditionalFailData.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {whyTraditionalFailData.points.map((point, index) => (
            <div
              key={index}
              className="group p-8 bg-black hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="text-[#00FFD1]/30 text-5xl font-bold mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{point.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTraditionalFail;
