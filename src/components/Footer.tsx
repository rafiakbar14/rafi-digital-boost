
import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSmoothScroll = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/rafiakbar14/rafi-digital-boost/main/public/Salinan%20dari%20Kuvanto_20250524_115002_0000.svg"
                alt="Cubiqin Logo" 
                className="h-10 w-auto" 
                style={{filter: "invert(100%)"}} 
              />
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
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/landing-page#top" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Landing Page
                  </Link>
                </li>
                <li>
                  <Link to="/web-compro#top" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Web Company Profile
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce#top" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link to="/digital-ads#top" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Digital Ads
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/#top" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-1" />
                    Beranda
                  </Link>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-1" />
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-1" />
                    Harga
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-1" />
                    Tentang Saya
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Lokasi</h4>
              <p className="text-gray-400">
                Jalan Jakarta Gang Israp Depan No. 15<br />
                Kecamatan Loa Bakung<br />
                Sungai Kunjang<br />
                Samarinda<br />
                Kalimantan Timur
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Cubiqin. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Dibuat dengan ❤️ oleh Tim Cubiqin
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy#top" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service#top" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
