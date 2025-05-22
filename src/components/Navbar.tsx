
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logoSvg from '../4_20250522_202405_0001.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logoSvg} alt="Cubicin Logo" className="w-8 h-8 mr-2" style={{filter: "invert(19%) sepia(98%) saturate(2270%) hue-rotate(201deg) brightness(96%) contrast(98%)"}} />
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled ? "text-brand-blue" : "text-gray-800"
            )}>Cubicin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              Layanan
            </a>
            <a 
              href="#pricing" 
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              Harga
            </a>
            <a 
              href="#about" 
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              Tentang
            </a>
            <a 
              href="#contact" 
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              Kontak
            </a>
            <a 
              href="https://wa.me/6283135183093" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <PhoneCall size={16} />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden fixed inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
        )}>
          <nav className="container mx-auto py-4 space-y-4 px-4">
            <a 
              href="#services"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </a>
            <a 
              href="#pricing"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </a>
            <a 
              href="#about"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a 
              href="#contact"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </a>
            <a 
              href="https://wa.me/6283135183093" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneCall size={16} />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
