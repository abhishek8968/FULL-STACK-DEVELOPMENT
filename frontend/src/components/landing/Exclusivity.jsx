import React from 'react';
import { Lock, Users, Headphones, MessageSquare } from 'lucide-react';
import { exclusivityData } from '../../data/mock';

const pointIcons = [Lock, Users, Headphones, MessageSquare];

const Exclusivity = () => {
  return (
    <section id="access" className="bg-[#080808] py-24 lg:py-32">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Access Control</span>
            <h2 
              className="text-white font-semibold mt-4 leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              {exclusivityData.title}
            </h2>
            <p className="text-white/40 text-sm uppercase tracking-wider mt-6">
              {exclusivityData.subtitle}
            </p>
            <p className="text-white/60 text-lg mt-8 leading-relaxed">
              {exclusivityData.content}
            </p>
          </div>

          {/* Right - Points */}
          <div className="flex-1">
            <div className="space-y-4">
              {exclusivityData.points.map((point, index) => {
                const Icon = pointIcons[index];
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-5 bg-black border border-white/5 hover:border-[#00FFD1]/30 transition-all duration-500"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/20 flex-shrink-0 group-hover:border-[#00FFD1] transition-colors duration-500">
                      <Icon className="text-white/50 group-hover:text-[#00FFD1] transition-colors duration-500" size={18} />
                    </div>
                    <p className="text-white/80">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
