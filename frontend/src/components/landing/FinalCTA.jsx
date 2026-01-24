import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { finalCTAData } from '../../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(`${API}/submit-email`, { email });
      if (response.data.success) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#050505] py-16 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00FFD1]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="px-5 lg:px-[7.6923%] max-w-[700px] mx-auto text-center relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">{finalCTAData.title}</span>
          <p className="text-white/40 text-sm mt-2">
            {finalCTAData.subtitle}
          </p>
        </motion.div>

        {/* Price Box */}
        <motion.div 
          className="mt-8 lg:mt-10 p-6 lg:p-10 bg-black border border-[#00FFD1]/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Animated shine - simplified */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFD1]/5 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />
          
          {/* Original Price - Struck through */}
          <div className="mb-2">
            <span className="text-white/30 text-lg lg:text-xl line-through">
              {finalCTAData.originalPrice}
            </span>
          </div>
          
          <span className="text-white/30 text-xs uppercase tracking-wider">{finalCTAData.priceLabel}</span>
          
          {/* Current Price */}
          <motion.div 
            className="text-[#00FFD1] text-4xl lg:text-6xl font-bold mt-2 tracking-tight"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {finalCTAData.price}
          </motion.div>
          
          {/* Savings Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#00FFD1] text-xs font-medium">80% OFF · LIMITED TIME</span>
          </motion.div>
          
          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-8 lg:mt-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 lg:px-5 py-3.5 lg:py-4 bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 bg-[#00FFD1] text-black font-medium text-sm hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <span>{finalCTAData.cta}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
              )}
            </form>
          ) : (
            <motion.div 
              className="mt-8 lg:mt-10 p-4 lg:p-5 bg-[#00FFD1]/5 border border-[#00FFD1]/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-[#00FFD1] text-sm">Application received. Review in 48-72 hours.</p>
            </motion.div>
          )}

          {/* Note */}
          <p className="text-white/20 text-xs mt-6 lg:mt-8">
            {finalCTAData.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
