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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-[#050505] py-20 lg:py-28 border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] max-w-[700px] mx-auto text-center">
        {/* Header */}
        <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">{finalCTAData.title}</span>
        <p className="text-white/40 text-sm mt-3">
          {finalCTAData.subtitle}
        </p>

        {/* Price Box */}
        <div className="mt-10 p-10 bg-black border border-[#00FFD1]/20">
          <span className="text-white/30 text-xs uppercase tracking-wider">{finalCTAData.priceLabel}</span>
          <p className="text-[#00FFD1] text-5xl lg:text-6xl font-bold mt-2 tracking-tight">{finalCTAData.price}</p>
          
          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-5 py-4 bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00FFD1] text-black font-medium text-sm hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      <span>{finalCTAData.cta}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-10 p-5 bg-[#00FFD1]/5 border border-[#00FFD1]/20">
              <p className="text-[#00FFD1] text-sm">Application received. Review in 48-72 hours.</p>
            </div>
          )}

          {/* Note */}
          <p className="text-white/20 text-xs mt-8">
            {finalCTAData.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
