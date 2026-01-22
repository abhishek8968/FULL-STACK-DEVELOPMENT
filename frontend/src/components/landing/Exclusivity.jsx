import React from 'react';
import { exclusivityData } from '../../data/mock';

const Exclusivity = () => {
  return (
    <section id="access" className="bg-[#050505] py-20 lg:py-28">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Access</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {exclusivityData.title}
            </h2>
            <p className="text-white/30 text-sm uppercase tracking-wider mt-3">
              {exclusivityData.subtitle}
            </p>
            <p className="text-white/50 text-base mt-8 leading-relaxed max-w-md">
              {exclusivityData.content}
            </p>
          </div>

          {/* Right - Points */}
          <div className="flex-1">
            <div className="border-t border-white/10">
              {exclusivityData.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-5 border-b border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-[#00FFD1]/50 text-xs font-medium w-6">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-white/70 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
