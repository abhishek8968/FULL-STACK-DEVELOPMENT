import React from 'react';
import { User, Building2, Briefcase, Target } from 'lucide-react';
import { targetAudienceData } from '../../data/mock';

const profileIcons = [User, Building2, Briefcase, Target];

const TargetAudience = () => {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Target Users</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight mx-auto"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', maxWidth: '700px' }}
          >
            {targetAudienceData.title}
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            {targetAudienceData.subtitle}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudienceData.profiles.map((profile, index) => {
            const Icon = profileIcons[index];
            return (
              <div
                key={index}
                className="group p-8 bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center border border-white/20 mb-6 group-hover:border-[#00FFD1] group-hover:bg-[#00FFD1]/10 transition-all duration-500">
                  <Icon className="text-white/60 group-hover:text-[#00FFD1] transition-colors duration-500" size={26} />
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">{profile.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{profile.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
