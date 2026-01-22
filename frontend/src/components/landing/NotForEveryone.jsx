import React from 'react';
import { notForEveryoneData } from '../../data/mock';

const NotForEveryone = () => {
  return (
    <section className="bg-black py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[900px] mx-auto text-center">
        {/* Title */}
        <h2 
          className="text-white/20 font-semibold leading-tight"
          style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
        >
          {notForEveryoneData.title}
        </h2>

        {/* Content */}
        <p className="text-white/40 text-base mt-8 leading-relaxed max-w-2xl mx-auto">
          {notForEveryoneData.content}
        </p>

        {/* Statement */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="text-[#00FFD1] text-2xl lg:text-3xl font-semibold tracking-tight">
            {notForEveryoneData.statement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotForEveryone;
