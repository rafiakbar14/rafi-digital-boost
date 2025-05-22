
import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSvg from '../4_20250522_202405_0001.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <img src={logoSvg} alt="Rafi Design Logo" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-white">
                Rafi
              </span>
              <span className="font-medium text-gray-300 ml-1">Design</span>
            </div>
            <p className="text-gray-400 mb-6">
              Membantu UMKM go digital dan mengimplementasikan AI untuk efisiensi bisnis. Solusi digital yang profesional, cepat, dan terjangkau.
            </p>
            <a 
              href="https://wa.me/6283135183093" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-200 font-semibold py-2 px-4 rounded-lg transition-all duration-200 w-fit"
            >
              <PhoneCall size={18} />
              <span>WhatsApp 083135183093</span>
            </a>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#landing-page" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Landing Page
                  </a>
                </li>
                <li>
                  <a href="#website-custom" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Website Custom
                  </a>
                </li>
                <li>
                  <a href="#ecommerce" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a href="#digital-ads" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Digital Ads
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Beranda
                  </Link>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Tentang Saya
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Lokasi</h4>
              <p className="text-gray-400">
                Samarinda<br />
                Kalimantan Timur<br />
                Indonesia
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {currentYear} Rafi Design. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
