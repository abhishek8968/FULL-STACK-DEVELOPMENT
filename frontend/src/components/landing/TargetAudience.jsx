import React from 'react';
import { targetAudienceData } from '../../data/mock';

const TargetAudience = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">Target</span>
            <h2 
              className="text-white font-semibold mt-3 leading-tight"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              {targetAudienceData.title}
            </h2>
          </div>
          <p className="text-white/30 text-sm uppercase tracking-wider max-w-xs lg:text-right">
            {targetAudienceData.subtitle}
          </p>
        </div>

        {/* Profiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {targetAudienceData.profiles.map((profile, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 bg-black hover:bg-white/[0.02] transition-colors duration-500"
            >
              <h3 className="text-white font-semibold text-base mb-3">{profile.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
