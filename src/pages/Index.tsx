
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import DetailedPriceCard from '@/components/DetailedPriceCard';
import Chatbot from '@/components/Chatbot';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const landingPageTiers = [
    {
      name: "Basic",
      price: "Rp600.000",
      features: [
        "2 landing page untuk A/B testing",
        "Desain clean dan bersih",
        "Bisa request tanpa navbar atau dengan navbar",
        "Tanpa biaya perpanjangan",
        "Hosting di Vercel (1GB storage)",
        "Integrasi Facebook Ads dan Google Ads",
        "Gratis copywriting (brief lengkap dari klien)",
        "Revisi minor 1 kali"
      ]
    },
    {
      name: "Premium",
      price: "Rp1.200.000",
      isPopular: true,
      features: [
        "2 landing page untuk A/B testing",
        "Desain custom di Figma",
        "Copywriting profesional",
        "Integrasi Facebook Ads dan Google Ads",
        "SEO optimization",
        "Revisi minor 5 kali",
        "Analytics setup",
        "Speed optimization",
        "Hosting di Vercel (2GB storage)",
        "Gratis domain .biz.id"
      ]
    },
    {
      name: "Enterprise",
      price: "Rp2.000.000",
      features: [
        "2 landing page untuk A/B testing",
        "Desain custom di Figma",
        "Copywriting profesional + strategi marketing",
        "Integrasi lengkap tracking & analytics",
        "A/B testing setup otomatis",
        "Revisi minor 15 kali",
        "Konsultasi strategi marketing",
        "Priority support",
        "Hosting di Vercel (5GB storage)",
        "Gratis domain .biz.id"
      ]
    }
  ];

  const websiteTiers = [
    {
      name: "Starter",
      price: "Rp1.800.000",
      features: [
        "4 halaman website",
        "Desain mengikuti brand guide",
        "Free copywriting advance (Copy.ai)",
        "SEO optimize",
        "Gratis chatbot AI via Bablast (3 bulan)",
        "Responsive design",
        "Contact form integration",
        "Hosting (5GB storage)",
        "Gratis domain .com",
        "Biaya perpanjangan 500rb/tahun"
      ]
    },
    {
      name: "Business",
      price: "Rp2.500.000",
      isPopular: true,
      features: [
        "8 halaman website",
        "Semua fitur paket Starter",
        "Gratis blog subdirectory untuk SEO",
        "2 backlink berbayar",
        "Google My Business setup",
        "Advanced analytics",
        "Hosting (10GB storage)",
        "Gratis domain .com",
        "Biaya perpanjangan 700rb/tahun"
      ]
    },
    {
      name: "Enterprise",
      price: "Rp8.000.000",
      features: [
        "Unlimited halaman",
        "Full customize design via Figma",
        "Semua fitur paket Business",
        "Gratis domain .id",
        "4 backlink berbayar",
        "Advanced SEO audit",
        "Custom CMS development",
        "Hosting (25GB storage)",
        "Gratis domain .com",
        "Biaya perpanjangan 750rb/tahun"
      ]
    }
  ];

  const ecommerceTiers = [
    {
      name: "Starter",
      price: "Rp3.000.000",
      features: [
        "Support 50 produk",
        "Integrasi Xendit dan Midtrans",
        "Terintegrasi Meta Ads",
        "Inventory management",
        "Order management system",
        "Customer management",
        "Basic analytics",
        "Mobile responsive",
        "Hosting (10GB storage)"
      ]
    },
    {
      name: "Business",
      price: "Rp8.000.000",
      isPopular: true,
      features: [
        "Support 100 produk",
        "Semua fitur paket Starter",
        "Gratis setup Google Ads",
        "Gratis setup Facebook Ads",
        "Advanced product filters",
        "Wishlist & compare features",
        "Email marketing integration",
        "Multi-payment gateway",
        "Hosting (25GB storage)"
      ]
    },
    {
      name: "Enterprise",
      price: "Rp20.000.000",
      features: [
        "Unlimited produk",
        "Semua fitur paket Business",
        "Integrasi full AI via N8N",
        "Gratis instalasi blog WordPress ke /blog",
        "Advanced automation",
        "Custom integrations",
        "White-label solution",
        "Dedicated support",
        "Hosting (100GB storage)"
      ]
    }
  ];

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
              "priceRange": "Rp600.000 - Rp20.000.000",
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
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary flex items-center gap-2"
                >
                  <span>Lihat Layanan</span>
                  <ArrowRight size={18} />
                </button>
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
              linkUrl="/web-compro"
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
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="section-title text-center">Paket Harga Terbaik</h2>
          <p className="section-subtitle text-center">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Setiap paket dirancang untuk memberikan nilai maksimal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <DetailedPriceCard
              title="Landing Page"
              description="Landing page yang dioptimalkan untuk konversi maksimal dengan A/B testing dan integrasi iklan."
              startingPrice="Rp600.000"
              tiers={landingPageTiers}
            />
            
            <DetailedPriceCard
              title="Website Company Profile"
              description="Website profesional dengan blog, SEO optimization, dan chatbot AI untuk meningkatkan kredibilitas bisnis."
              startingPrice="Rp1.800.000"
              tiers={websiteTiers}
            />
            
            <DetailedPriceCard
              title="Website E-Commerce"
              description="Platform online shop lengkap dengan payment gateway, inventory management, dan integrasi iklan digital."
              startingPrice="Rp3.000.000"
              tiers={ecommerceTiers}
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Butuh paket khusus atau konsultasi lebih lanjut?
            </p>
            <a 
              href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya ingin konsultasi untuk paket khusus, terima kasih 🙏")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <PhoneCall size={18} />
              <span>Konsultasi Gratis</span>
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
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Hubungi Saya</span>
                <ArrowRight size={18} />
              </button>
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
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <span>Lihat Layanan</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </>
  );
};

export default Index;
