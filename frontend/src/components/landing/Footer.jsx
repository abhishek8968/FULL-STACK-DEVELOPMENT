import React from 'react';
import { footerData } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="px-6 lg:px-[7.6923%] py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
                  <span className="text-black font-bold text-lg">R</span>
                </div>
                <span className="text-white font-semibold text-xl tracking-tight">{footerData.company}</span>
              </div>
              <p className="text-white/40 text-sm">{footerData.tagline}</p>
            </div>

            {/* Links */}
            <div className="flex gap-12">
              <div>
                <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#architecture" className="text-white/40 hover:text-white text-sm transition-colors">Architecture</a></li>
                  <li><a href="#intelligence" className="text-white/40 hover:text-white text-sm transition-colors">Intelligence</a></li>
                  <li><a href="#reliability" className="text-white/40 hover:text-white text-sm transition-colors">Reliability</a></li>
                  <li><a href="#access" className="text-white/40 hover:text-white text-sm transition-colors">Access</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">About</a></li>
                  <li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Contact</a></li>
                  <li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms</a></li>
                  <li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-white/30 text-xs leading-relaxed max-w-3xl">
              {footerData.disclaimer}
            </p>
            <p className="text-white/20 text-xs mt-6">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
