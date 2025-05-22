
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LandingPage = () => {
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Landing Page tolong bantu saya membuatnya, terima kasih 🙏");

  return (
    <>
      <Helmet>
        <title>Jasa Landing Page Profesional - Cubicin</title>
        <meta name="description" content="Jasa pembuatan landing page profesional untuk meningkatkan konversi bisnis Anda. Landing page dengan desain menarik dan SEO friendly." />
      </Helmet>
      
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Landing Page yang <span className="text-brand-blue">Menjual</span>
              </h1>
              <p className="text-lg text-gray-600">
                Landing page yang dirancang khusus untuk mengkonversi pengunjung menjadi pelanggan. Dengan desain profesional dan strategi yang tepat, landing page Anda akan mendapatkan hasil maksimal.
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Landing Page Service" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Kenapa Memilih Landing Page Kami?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fokus pada Konversi</h3>
              <p className="text-gray-600">
                Desain yang fokus pada tujuan utama: mengubah pengunjung menjadi prospek atau pembeli.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimasi Mobile</h3>
              <p className="text-gray-600">
                Tampilan responsif untuk semua perangkat, memastikan pengalaman pengguna yang sempurna.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Friendly</h3>
              <p className="text-gray-600">
                Dioptimalkan untuk mesin pencari sehingga mudah ditemukan oleh calon pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Paket Landing Page</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Landing Page Basic</h3>
              <p className="text-3xl font-bold text-brand-blue mb-6">Rp600.000</p>
              <ul className="space-y-2 mb-8">
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
                  <span>Integrasi Facebook Pixel atau GTM</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Waktu pengerjaan 3-5 hari</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan Landing Page Basic tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
              >
                Pilih Paket
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-brand-blue relative">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white text-sm font-semibold py-1 px-4 rounded-full">Terpopuler</span>
              <h3 className="text-xl font-bold mb-2">Landing Page Pro</h3>
              <p className="text-3xl font-bold text-brand-blue mb-6">Rp1.200.000</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>2 landing page untuk A/B testing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Gratis 2x revisi</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Copy writing profesional</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Waktu pengerjaan 3-5 hari</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan Landing Page Pro tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
              >
                Pilih Paket
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Landing Page Premium</h3>
              <p className="text-3xl font-bold text-brand-blue mb-6">Rp1.800.000</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>2 landing page untuk A/B testing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Gratis 3x revisi</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Copy writing profesional</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Custom animasi & interaksi</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>Waktu pengerjaan 5-7 hari</span>
                </li>
              </ul>
              <a 
                href={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo Saya berminat dengan Landing Page Premium tolong bantu saya membuatnya, terima kasih 🙏")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
              >
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Meningkatkan Konversi Bisnis Anda?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran khusus untuk landing page bisnis Anda.
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

export default LandingPage;
