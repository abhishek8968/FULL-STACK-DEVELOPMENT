import React from 'react';
import { footerData } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00FFD1] flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <div>
                <span className="text-white font-semibold text-base">{footerData.company}</span>
                <span className="text-white/20 text-xs ml-3">{footerData.tagline}</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-8">
              <a href="#architecture" className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors">Architecture</a>
              <a href="#intelligence" className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors">Intelligence</a>
              <a href="#reliability" className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors">Reliability</a>
              <a href="#access" className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors">Access</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start gap-4">
            <p className="text-white/20 text-xs max-w-lg">
              {footerData.disclaimer}
            </p>
            <p className="text-white/10 text-xs">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
