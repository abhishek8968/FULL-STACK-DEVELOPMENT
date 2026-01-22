import React from 'react';
import { X } from 'lucide-react';
import { notForEveryoneData } from '../../data/mock';

const NotForEveryone = () => {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto flex items-center justify-center border border-white/20 mb-10">
            <X className="text-white/40" size={32} />
          </div>

          {/* Title */}
          <h2 
            className="text-white font-semibold leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {notForEveryoneData.title}
          </h2>

          {/* Content */}
          <p className="text-white/60 text-lg mt-8 leading-relaxed max-w-3xl mx-auto">
            {notForEveryoneData.content}
          </p>

          {/* Statement */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-[#00FFD1] text-2xl lg:text-3xl font-semibold tracking-tight">
              {notForEveryoneData.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotForEveryone;
