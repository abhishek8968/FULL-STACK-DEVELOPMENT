import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="h-full px-6 lg:px-[7.6923%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
            <span className="text-black font-bold text-lg">R</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">Rekkix</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4D4D4D] hover:text-white text-lg font-normal transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#access"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00FFD1] text-black font-medium text-base hover:bg-[rgba(0,255,209,0.1)] hover:text-[#00FFD1] transition-all duration-400"
            style={{ borderRadius: '0px' }}
          >
            Request Access
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-black border-b border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#4D4D4D] hover:text-white text-lg font-normal transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#access"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00FFD1] text-black font-medium text-base mt-4"
              style={{ borderRadius: '0px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
