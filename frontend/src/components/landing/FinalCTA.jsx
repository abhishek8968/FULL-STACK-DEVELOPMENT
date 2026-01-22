import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { finalCTAData } from '../../data/mock';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-[#080808] py-24 lg:py-32 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[900px] mx-auto text-center">
        {/* Section Header */}
        <span className="text-[#00FFD1] text-sm uppercase tracking-wider font-medium">Get Started</span>
        <h2 
          className="text-white font-semibold mt-4 leading-tight"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
        >
          {finalCTAData.title}
        </h2>
        <p className="text-white/60 text-lg mt-6">
          {finalCTAData.subtitle}
        </p>

        {/* Price Box */}
        <div className="mt-12 p-10 bg-black border border-[#00FFD1]/30">
          <span className="text-white/40 text-sm uppercase tracking-wider">{finalCTAData.priceLabel}</span>
          <p className="text-[#00FFD1] text-5xl lg:text-6xl font-bold mt-3">{finalCTAData.price}</p>
          
          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-[#121212] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                  style={{ borderRadius: '0px' }}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00FFD1] text-black font-medium text-lg hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400 disabled:opacity-50"
                  style={{ borderRadius: '0px' }}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>{finalCTAData.cta}</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-10 p-6 bg-[#00FFD1]/10 border border-[#00FFD1]/30">
              <p className="text-[#00FFD1] font-medium">Application received. We'll be in touch within 48-72 hours.</p>
            </div>
          )}

          {/* Note */}
          <p className="text-white/40 text-sm mt-8">
            {finalCTAData.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
