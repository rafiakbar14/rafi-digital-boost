import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PriceCard from '@/components/PriceCard';
import Chatbot from '@/components/Chatbot';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cubiqin - Jasa Website & Digital Marketing di Samarinda</title>
        <meta name="description" content="Jasa pembuatan website, landing page, e-commerce, dan digital marketing untuk UMKM di Samarinda, Kalimantan Timur. Profesional, cepat, dan terjangkau." />
        <meta name="keywords" content="jasa website samarinda, jasa landing page, web developer samarinda, digital marketing kalimantan, jasa pembuatan website" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cubiqin - Jasa Website & Digital Marketing di Samarinda" />
        <meta property="og:description" content="Jasa pembuatan website, landing page, e-commerce, dan digital marketing untuk UMKM di Samarinda, Kalimantan Timur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cubiqin.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2370&auto=format&fit=crop" />
        
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cubiqin",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2370&auto=format&fit=crop",
              "telephone": "+6283135183093",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Samarinda",
                "addressRegion": "Kalimantan Timur",
                "addressCountry": "ID"
              },
              "description": "Jasa pembuatan website, landing page, e-commerce, dan digital marketing untuk UMKM di Samarinda, Kalimantan Timur.",
              "priceRange": "Rp600.000 - Rp8.000.000",
              "openingHours": "Mo-Fr 09:00-17:00",
              "url": "https://cubiqin.com/"
            }
          `}
        </script>
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 md:py-40 bg-gradient-to-br from-white to-blue-50">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
                Solusi Digital <span className="text-brand-blue">Profesional</span> Untuk Bisnis Anda
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Freelance designer & website developer dari Samarinda, membantu UMKM go digital dan implementasi AI untuk efisiensi bisnis.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#services" className="btn-primary flex items-center gap-2">
                  <span>Lihat Layanan</span>
                  <ArrowRight size={18} />
                </a>
                <a 
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi untuk kebutuhan website, terima kasih 🙏")}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary flex items-center gap-2"
                >
                  <PhoneCall size={18} />
                  <span>Hubungi Saya</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Cubiqin - Freelance Designer & Web Developer" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto animate-fade-in md:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="section-title text-center">Layanan Saya</h2>
          <p className="section-subtitle text-center">
            Solusi digital terbaik untuk mengembangkan bisnis Anda dengan cepat dan profesional
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ServiceCard 
              title="Landing Page"
              description="Landing page profesional yang dioptimalkan untuk konversi dengan desain menarik."
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              linkUrl="/landing-page"
            />
            <ServiceCard 
              title="Web Company Profile"
              description="Website company profile dengan admin dashboard yang sesuai kebutuhan bisnis Anda."
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2370&auto=format&fit=crop"
              linkUrl="/website-custom"
            />
            <ServiceCard 
              title="Website E-Commerce"
              description="Solusi e-commerce lengkap untuk menjual produk online dengan mudah."
              imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2370&auto=format&fit=crop"
              linkUrl="/ecommerce"
            />
            <ServiceCard 
              title="Digital Ads"
              description="Strategi iklan digital di Google dan Meta Ads untuk menjangkau lebih banyak pelanggan."
              imageUrl="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2274&auto=format&fit=crop"
              linkUrl="/digital-ads"
            />
          </div>
        </div>
      </section>
      
      {/* Landing Page Section */}
      <section id="landing-page" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Landing Page" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jasa Landing Page</h2>
              <p className="text-gray-600">
                Landing page yang dirancang khusus untuk mengkonversi pengunjung menjadi pelanggan. Dengan desain profesional dan strategi yang tepat, landing page Anda akan mendapatkan hasil maksimal.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Yang Anda Dapatkan:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>2 landing page untuk A/B testing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Gratis 1x revisi minor</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Integrasi Facebook Pixel atau Google Tag Manager</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Waktu pengerjaan 3-5 hari kerja</span>
                </li>
              </ul>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Harga Mulai:</h3>
                <p className="text-3xl font-bold text-brand-blue">Rp600.000</p>
              </div>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan jasa Landing Page tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Custom Section */}
      <section id="website-custom" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2370&auto=format&fit=crop" 
                alt="Web Company Profile" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jasa Web Company Profile</h2>
              <p className="text-gray-600">
                Website company profile yang dirancang sesuai dengan kebutuhan bisnis Anda. Dilengkapi dengan admin dashboard yang mudah digunakan tanpa perlu WordPress.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Keunggulan:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Admin dashboard custom (bukan WordPress)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Desain sesuai brand identity</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>SEO friendly</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Waktu pengerjaan 7-14 hari kerja</span>
                </li>
              </ul>
              <div>
                <p className="text-lg font-medium text-gray-900">Harga kompetitif dan personal, sesuai kebutuhan proyek Anda.</p>
              </div>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan jasa Web Company Profile tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* E-Commerce Section */}
      <section id="ecommerce" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2370&auto=format&fit=crop"
                alt="Website E-Commerce" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jasa Website E-Commerce</h2>
              <p className="text-gray-600">
                Website e-commerce lengkap untuk menjual produk secara online dengan mudah. Dilengkapi dengan berbagai fitur untuk memaksimalkan penjualan.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Paket Tersedia:</h3>
              <ul className="space-y-4">
                <li className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Paket Starter</span>
                    <span className="text-brand-blue font-bold">Rp3.000.000</span>
                  </div>
                  <p className="text-sm text-gray-600">Support 25 produk, integrasi WhatsApp</p>
                </li>
                <li className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Paket Business</span>
                    <span className="text-brand-blue font-bold">Rp5.000.000</span>
                  </div>
                  <p className="text-sm text-gray-600">Semua fitur Starter + integrasi Xendit/Midtrans</p>
                </li>
                <li className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Paket Premium</span>
                    <span className="text-brand-blue font-bold">Rp8.000.000</span>
                  </div>
                  <p className="text-sm text-gray-600">Semua fitur Business + otomatisasi AI (chatbot WhatsApp & website)</p>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan jasa Website E-Commerce tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Ads Section */}
      <section id="digital-ads" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2274&auto=format&fit=crop" 
                alt="Digital Ads" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jasa Iklan Digital</h2>
              <p className="text-gray-600">
                Strategi iklan digital yang efektif di Google Ads dan Meta Ads (Facebook/Instagram) untuk menjangkau lebih banyak pelanggan potensial.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Layanan Iklan:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Google Ads (Search, Display, YouTube)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Meta Ads (Facebook, Instagram)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Landing page khusus untuk iklan</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Reporting dan analisis performa</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Optimasi berkelanjutan</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan jasa Iklan Digital tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="section-title text-center">Paket Harga</h2>
          <p className="section-subtitle text-center">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PriceCard
              title="Landing Page Basic"
              price="Rp600.000"
              features={[
                "2 landing page untuk A/B testing",
                "Gratis 1x revisi minor",
                "Integrasi Facebook Pixel / Google Tag Manager",
                "Waktu pengerjaan 3-5 hari",
                "Desain responsif"
              ]}
            />
            <PriceCard
              title="Landing Page Pro"
              price="Rp1.200.000"
              isPopular={true}
              features={[
                "2 landing page untuk A/B testing",
                "Gratis 2x revisi",
                "Integrasi Facebook Pixel / Google Tag Manager",
                "Copy writing profesional",
                "SEO optimization",
                "Waktu pengerjaan 3-5 hari"
              ]}
            />
            <PriceCard
              title="Landing Page Premium"
              price="Rp1.800.000"
              features={[
                "2 landing page untuk A/B testing",
                "Gratis 3x revisi",
                "Integrasi Facebook Pixel / Google Tag Manager",
                "Copy writing profesional",
                "SEO optimization",
                "Custom animasi & interaksi",
                "Waktu pengerjaan 5-7 hari"
              ]}
            />
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6">Paket E-Commerce</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <PriceCard
                title="E-Commerce Starter"
                price="Rp3.000.000"
                features={[
                  "Support 25 produk",
                  "Integrasi WhatsApp",
                  "Admin dashboard",
                  "Mobile responsive",
                  "Waktu pengerjaan 14-21 hari"
                ]}
              />
              <PriceCard
                title="E-Commerce Business"
                price="Rp5.000.000"
                isPopular={true}
                features={[
                  "Support 100 produk",
                  "Integrasi WhatsApp",
                  "Integrasi payment gateway",
                  "Admin dashboard lengkap",
                  "SEO optimization",
                  "Waktu pengerjaan 21-28 hari"
                ]}
              />
              <PriceCard
                title="E-Commerce Premium"
                price="Rp8.000.000"
                features={[
                  "Support produk unlimited",
                  "Integrasi WhatsApp",
                  "Integrasi payment gateway",
                  "Admin dashboard lengkap",
                  "Otomatisasi AI (chatbot)",
                  "SEO optimization tingkat lanjut",
                  "Waktu pengerjaan 30-45 hari"
                ]}
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Butuh paket khusus sesuai kebutuhan bisnis Anda?
            </p>
            <a 
              href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi untuk paket khusus, terima kasih 🙏")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <PhoneCall size={18} />
              <span>Konsultasi Paket Khusus</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2370&auto=format&fit=crop" 
                alt="Cubiqin - Freelance Designer & Web Developer" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tentang Saya</h2>
              <p className="text-gray-600">
                Saya adalah Rafi, freelance designer & website developer dari Samarinda, Kalimantan Timur. 
                Dengan pengalaman dan keahlian di bidang desain web dan pengembangan aplikasi, 
                saya membantu UMKM go digital dan mengimplementasikan AI untuk efisiensi bisnis.
              </p>
              <p className="text-gray-600">
                Saya percaya bahwa setiap bisnis, baik kecil maupun besar, berhak mendapatkan 
                kehadiran online yang profesional dan efektif. Itulah mengapa saya berdedikasi 
                untuk menyediakan solusi digital berkualitas tinggi dengan harga yang terjangkau.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Keahlian:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">Web Design</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">Frontend Development</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">Backend Development</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">E-Commerce</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">UI/UX Design</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">AI Implementation</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">Digital Marketing</li>
                <li className="bg-white rounded-lg py-2 px-4 shadow-sm text-center">SEO</li>
              </ul>
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Hubungi Saya</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="section-title text-center">Hubungi Saya</h2>
          <p className="section-subtitle text-center">
            Siap untuk memulai proyek Anda? Hubungi saya sekarang untuk konsultasi gratis
          </p>
          
          <div className="flex flex-col md:flex-row gap-10 mt-12">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 flex flex-col justify-between">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <PhoneCall className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">WhatsApp / Telepon</p>
                      <a 
                        href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi, terima kasih 🙏")}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brand-blue hover:underline"
                      >
                        083135183093
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p>Samarinda, Kalimantan Timur, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-blue rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Respon Cepat</h3>
                <p className="mb-6">
                  Dapatkan respon cepat dalam waktu 24 jam untuk kebutuhan website dan digital marketing Anda.
                </p>
                <a 
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi, terima kasih 🙏")}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full"
                >
                  <PhoneCall size={18} />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Mengembangkan Bisnis Anda?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Jadikan bisnis Anda lebih profesional dan efisien dengan solusi digital dari saya.
            Konsultasi pertama gratis dan tanpa biaya!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi gratis, terima kasih 🙏")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <PhoneCall size={18} />
              <span>Konsultasi Gratis</span>
            </a>
            <a 
              href="#services" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <span>Lihat Layanan</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </>
  );
};

export default Index;
