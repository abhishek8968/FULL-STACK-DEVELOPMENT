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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="h-full px-6 lg:px-[7.6923%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#00FFD1] flex items-center justify-center">
            <span className="text-black font-bold text-xs">R</span>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">Rekkix</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#access"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#00FFD1] text-black font-medium text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300"
          >
            Request Access
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/60 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/5">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white text-xs uppercase tracking-wider transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#access"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#00FFD1] text-black font-medium text-xs uppercase tracking-wider mt-2"
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
