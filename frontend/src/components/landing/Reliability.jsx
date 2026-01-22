import React from 'react';
import { Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import { reliabilityData } from '../../data/mock';

const featureIcons = [Shield, Zap, Globe, CheckCircle];

const Reliability = () => {
  return (
    <section id="reliability" className="bg-[#080808] py-24 lg:py-32">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Performance Standards</span>
          <h2 
            className="text-white font-semibold mt-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {reliabilityData.title}
          </h2>
          <p className="text-white/60 text-lg mt-4">
            {reliabilityData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reliabilityData.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={index}
                className="group flex items-start gap-6 p-8 bg-black border border-white/5 hover:border-[#00FFD1]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#00FFD1]/5 border border-[#00FFD1]/20 flex-shrink-0 group-hover:bg-[#00FFD1]/10 transition-all duration-500">
                  <Icon className="text-[#00FFD1]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TradingView Integration Proof */}
        <div className="mt-16 p-8 lg:p-12 bg-black border border-[#00FFD1]/20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-2xl mb-4">TradingView Integration</h3>
              <p className="text-white/60 leading-relaxed">
                QMDE integrates seamlessly with TradingView's professional charting platform. 
                Access the engine's intelligence directly within your existing workflow—no separate 
                software, no data feeds, no additional infrastructure required.
              </p>
            </div>
            <div className="w-full lg:w-80 aspect-video bg-[#121212] border border-white/10 flex items-center justify-center">
              <span className="text-white/30 text-sm uppercase tracking-wider">Integration Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reliability;
