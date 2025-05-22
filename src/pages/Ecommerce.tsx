
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall, Check, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Ecommerce = () => {
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Website E-Commerce tolong bantu saya membuatnya, terima kasih 🙏");

  return (
    <>
      <Helmet>
        <title>Jasa Website E-Commerce - Cubicin</title>
        <meta name="description" content="Jasa pembuatan website e-commerce profesional untuk bisnis online Anda. Solusi lengkap untuk menjual produk secara online dengan mudah." />
      </Helmet>
      
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Website <span className="text-brand-blue">E-Commerce</span> untuk Bisnis Online Anda
              </h1>
              <p className="text-lg text-gray-600">
                Solusi e-commerce lengkap untuk menjual produk online dengan mudah. Dilengkapi dengan berbagai fitur untuk memaksimalkan penjualan.
              </p>
              <a 
                href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <PhoneCall size={18} />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2370&auto=format&fit=crop" 
                alt="E-Commerce Website" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pilihan Paket E-Commerce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-3xl font-bold text-brand-blue mt-2">Rp3.000.000</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support 25 produk</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrasi WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Admin dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mobile responsive</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Waktu pengerjaan 14-21 hari</span>
                  </li>
                </ul>
                <a 
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan E-Commerce Starter tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-2 px-6 rounded-lg transition-colors mt-6"
                >
                  Pilih Paket
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border-2 border-brand-blue overflow-hidden relative transform scale-105">
              <div className="absolute top-0 right-0 bg-brand-blue text-white py-1 px-4 text-sm font-semibold">
                POPULER
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold">Business</h3>
                <p className="text-3xl font-bold text-brand-blue mt-2">Rp5.000.000</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support 100 produk</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrasi WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrasi payment gateway</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Admin dashboard lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Waktu pengerjaan 21-28 hari</span>
                  </li>
                </ul>
                <a 
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan E-Commerce Business tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-2 px-6 rounded-lg transition-colors mt-6"
                >
                  Pilih Paket
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="text-3xl font-bold text-brand-blue mt-2">Rp8.000.000</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support produk unlimited</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrasi WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrasi payment gateway</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Admin dashboard lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Otomatisasi AI (chatbot)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO optimization tingkat lanjut</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Waktu pengerjaan 30-45 hari</span>
                  </li>
                </ul>
                <a 
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan E-Commerce Premium tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-2 px-6 rounded-lg transition-colors mt-6"
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fitur Utama E-Commerce Kami</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Katalog Produk</h3>
              <p className="text-gray-600">
                Tampilkan produk dengan gaya yang menarik dan mudah dinavigasi
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keranjang Belanja</h3>
              <p className="text-gray-600">
                Proses checkout yang mudah dan cepat untuk meningkatkan konversi
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pembayaran</h3>
              <p className="text-gray-600">
                Integrasi dengan berbagai metode pembayaran yang populer di Indonesia
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard Admin</h3>
              <p className="text-gray-600">
                Kelola produk, pesanan, dan pelanggan dengan mudah
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Bisnis Online Anda?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan diskusikan kebutuhan e-commerce bisnis Anda.
          </p>
          <a 
            href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <PhoneCall size={18} />
            <span>Konsultasi Gratis</span>
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Ecommerce;
