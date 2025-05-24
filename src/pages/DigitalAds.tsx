
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PriceCard from '@/components/PriceCard';

const DigitalAds = () => {
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Digital Ads tolong bantu saya membuatnya, terima kasih 🙏");

  return (
    <>
      <Helmet>
        <title>Jasa Digital Ads - Cubiqin</title>
        <meta name="description" content="Jasa iklan digital profesional untuk meningkatkan awareness dan penjualan bisnis Anda. Strategi iklan Google Ads dan Meta Ads yang efektif." />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Strategi <span className="text-brand-blue">Digital Ads</span> untuk Bisnis Anda
              </h1>
              <p className="text-lg text-gray-600">
                Strategi iklan digital yang efektif di Google Ads dan Meta Ads (Facebook/Instagram) untuk menjangkau lebih banyak pelanggan potensial.
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
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2274&auto=format&fit=crop" 
                alt="Digital Ads Service" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Layanan Iklan Digital</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png" alt="Google Ads" className="w-7 h-7 mr-2" />
                Google Ads
              </h3>
              <p className="text-gray-600 mb-6">
                Iklan di mesin pencari Google, YouTube, dan jaringan Display untuk menjangkau calon pelanggan yang aktif mencari produk atau jasa Anda.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Google Search Ads</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Google Display Network</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>YouTube Ads</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Remarketing</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan Google Ads tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors mt-6"
              >
                <PhoneCall size={16} />
                <span>Konsultasi Google Ads</span>
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                Meta Ads
              </h3>
              <p className="text-gray-600 mb-6">
                Iklan di Facebook dan Instagram untuk meningkatkan brand awareness, engagement, dan penjualan dengan target audience yang spesifik.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Facebook Feed Ads</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Instagram Feed & Stories</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Facebook & Instagram Reels</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Retargeting Ads</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan Meta Ads tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors mt-6"
              >
                <PhoneCall size={16} />
                <span>Konsultasi Meta Ads</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Paket Digital Ads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              title="Starter"
              price="Rp2.500.000/bulan"
              features={[
                "Budget iklan Rp2.000.000/bulan",
                "Manajemen 1 platform (Google atau Meta)",
                "Setup kampanye awal",
                "Laporan mingguan",
                "Optimasi dasar",
                "Target audience research",
                "Ad copy hingga 3 variasi",
                "WhatsApp support"
              ]}
              ctaText="Pesan Sekarang"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya berminat dengan paket Digital Ads Starter. Bisa konsultasi lebih lanjut?")}`}
            />
            
            <PriceCard
              title="Professional"
              price="Rp4.000.000/bulan"
              features={[
                "Budget iklan Rp5.000.000/bulan",
                "Manajemen Google & Meta Ads",
                "A/B testing advanced",
                "Laporan harian",
                "Conversion tracking setup",
                "Remarketing campaigns",
                "Landing page optimization",
                "Priority support & konsultasi"
              ]}
              isPopular={true}
              ctaText="Pesan Sekarang"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya berminat dengan paket Digital Ads Professional. Bisa konsultasi lebih lanjut?")}`}
            />
            
            <PriceCard
              title="Enterprise"
              price="Rp8.000.000/bulan"
              features={[
                "Budget iklan unlimited",
                "Full platform management",
                "Advanced analytics & BI dashboard",
                "Dedicated account manager",
                "Custom landing pages",
                "CRO (Conversion Rate Optimization)",
                "Multi-channel attribution",
                "24/7 support & monthly strategy call"
              ]}
              ctaText="Pesan Sekarang"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya berminat dengan paket Digital Ads Enterprise. Bisa konsultasi lebih lanjut?")}`}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Proses Layanan Digital Ads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analisis & Riset</h3>
              <p className="text-gray-600">
                Analisis kompetitor dan riset kata kunci untuk strategi yang tepat
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Penyusunan Strategi</h3>
              <p className="text-gray-600">
                Penyusunan strategi kampanye sesuai tujuan bisnis
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eksekusi & Monitoring</h3>
              <p className="text-gray-600">
                Implementasi kampanye dan pemantauan performa
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimasi & Laporan</h3>
              <p className="text-gray-600">
                Optimasi berkelanjutan dan laporan performa berkala
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop" 
                alt="Digital Marketing Analytics" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Manfaat Digital Ads</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <BarChart3 className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Terukur & Transparan</h3>
                    <p className="text-gray-600">Semua metrik performa dapat diukur dengan jelas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <BarChart3 className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Target Spesifik</h3>
                    <p className="text-gray-600">Menjangkau audience yang tepat berdasarkan demografi, minat, dan perilaku</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <BarChart3 className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Kontrol Budget</h3>
                    <p className="text-gray-600">Fleksibilitas dalam mengatur anggaran iklan sesuai kemampuan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <BarChart3 className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Hasil Cepat</h3>
                    <p className="text-gray-600">Mendapatkan hasil yang lebih cepat dibandingkan metode marketing tradisional</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Layanan Lainnya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Landing Page"
              description="Landing page profesional yang dioptimalkan untuk konversi dengan desain menarik."
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              linkUrl="/landing-page"
              startingPrice="Rp600.000"
            />
            <ServiceCard 
              title="Web Company Profile"
              description="Website company profile dengan admin dashboard yang sesuai kebutuhan bisnis Anda."
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2370&auto=format&fit=crop"
              linkUrl="/web-compro"
              startingPrice="Rp1.800.000"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Meningkatkan Performa Bisnis Online Anda?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan strategi digital ads yang sesuai dengan kebutuhan bisnis Anda.
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

export default DigitalAds;
