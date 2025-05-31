
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

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

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleExternalClick = () => {
    // Google Tag Manager event untuk klik keluar
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'klik_keluar', {
        event_category: 'engagement',
        event_label: 'whatsapp_contact'
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/Salinan dari Kuvanto_20250524_115002_0000.svg"
              alt="Cubiqin Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/#services"
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              Layanan
            </a>
            <a
              href="/#pricing"
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              Harga
            </a>
            <Link
              to="/portfolio"
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              Portofolio
            </Link>
            <a
              href="/#about"
              className={cn(
                "font-medium hover:text-brand-blue transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              Tentang
            </a>
            <a 
              href="https://wa.me/6283135183093" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <PhoneCall size={16} />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-gray-700" : "text-white"
            )}
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
              href="/#services"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="/#pricing"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </a>
            <Link
              to="/portfolio"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portofolio
            </Link>
            <a
              href="/#about"
              className="block font-medium text-gray-700 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a 
              href="https://wa.me/6283135183093" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                handleExternalClick();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors w-fit"
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
