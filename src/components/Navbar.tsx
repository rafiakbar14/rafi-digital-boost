
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "py-2 bg-white shadow-md" 
        : "py-4 bg-transparent"
    )}>
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light">
            Rafi
          </span>
          <span className="font-medium text-gray-700 ml-1">Design</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-gray-700 hover:text-brand-blue transition-colors">Layanan</a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-blue transition-colors">Harga</a>
          <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">Tentang Saya</a>
          <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">Kontak</a>
          <a 
            href="https://wa.me/6283135183093" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 btn-primary"
          >
            <PhoneCall size={18} />
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1.5",
            mobileMenuOpen && "transform rotate-45 translate-y-2"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1.5",
            mobileMenuOpen && "opacity-0"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-gray-800 transition-all duration-300",
            mobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[300px]" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col gap-4">
          <a 
            href="#services" 
            className="text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Layanan
          </a>
          <a 
            href="#pricing" 
            className="text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Harga
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tentang Saya
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-brand-blue py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontak
          </a>
          <a 
            href="https://wa.me/6283135183093" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PhoneCall size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
