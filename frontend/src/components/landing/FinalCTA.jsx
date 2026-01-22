import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { finalCTAData } from '../../data/mock';
import { FadeInUp, CountUp } from './animations/AnimatedSection';
import GlowingOrb from './animations/GlowingOrb';
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
    <section className="bg-[#050505] py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb size={500} className="top-0 left-1/4" />
      <GlowingOrb size={400} className="bottom-0 right-1/4" delay={2} />
      
      <div className="px-6 lg:px-[7.6923%] max-w-[700px] mx-auto text-center relative">
        {/* Header */}
        <FadeInUp>
          <span className="text-[#00FFD1] text-xs uppercase tracking-[0.2em] font-medium">{finalCTAData.title}</span>
          <p className="text-white/40 text-sm mt-3">
            {finalCTAData.subtitle}
          </p>
        </FadeInUp>

        {/* Price Box with Premium Animation */}
        <FadeInUp delay={0.2}>
          <motion.div 
            className="mt-10 p-10 bg-black border border-[#00FFD1]/20 relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(0,255,209,0.4)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,255,209,0.1), transparent)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
            
            <span className="text-white/30 text-xs uppercase tracking-wider">{finalCTAData.priceLabel}</span>
            
            {/* Animated Price */}
            <motion.p 
              className="text-[#00FFD1] text-5xl lg:text-6xl font-bold mt-2 tracking-tight"
              animate={{ 
                textShadow: [
                  '0 0 30px rgba(0,255,209,0.3)',
                  '0 0 60px rgba(0,255,209,0.5)',
                  '0 0 30px rgba(0,255,209,0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ₹<CountUp end={200000} duration={2} suffix="" />
            </motion.p>
            
            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="flex-1 px-5 py-4 bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00FFD1]/50 transition-all"
                    whileFocus={{ borderColor: 'rgba(0,255,209,0.5)', boxShadow: '0 0 20px rgba(0,255,209,0.1)' }}
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00FFD1] text-black font-medium text-sm overflow-hidden disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                        <Loader2 size={18} />
                      </motion.div>
                    ) : (
                      <>
                        <span className="relative">{finalCTAData.cta}</span>
                        <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
                {error && (
                  <motion.p 
                    className="text-red-400 text-sm mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            ) : (
              <motion.div 
                className="mt-10 p-5 bg-[#00FFD1]/5 border border-[#00FFD1]/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p 
                  className="text-[#00FFD1] text-sm"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Application received. Review in 48-72 hours.
                </motion.p>
              </motion.div>
            )}

            {/* Note */}
            <p className="text-white/20 text-xs mt-8">
              {finalCTAData.note}
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default FinalCTA;
