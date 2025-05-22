
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WebsiteCustom = () => {
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Web Company Profile tolong bantu saya membuatnya, terima kasih 🙏");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Jasa Web Company Profile - Cubiqin</title>
        <meta name="description" content="Jasa pembuatan web company profile profesional untuk bisnis Anda. Website dengan admin dashboard dan fitur sesuai kebutuhan bisnis." />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Web Company Profile <span className="text-brand-blue">Sesuai Kebutuhan</span> Bisnis Anda
              </h1>
              <p className="text-lg text-gray-600">
                Website company profile yang dirancang sesuai dengan kebutuhan bisnis Anda. Dilengkapi dengan admin dashboard yang mudah digunakan tanpa perlu WordPress.
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Web Company Profile Service" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fitur Web Company Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Dashboard Custom</h3>
              <p className="text-gray-600">
                Dashboard admin yang dibuat khusus untuk kebutuhan bisnis Anda, bukan WordPress.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desain Sesuai Brand</h3>
              <p className="text-gray-600">
                Desain yang mencerminkan identitas brand Anda dengan sempurna.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Friendly</h3>
              <p className="text-gray-600">
                Dioptimalkan untuk mesin pencari sehingga mudah ditemukan oleh calon pelanggan.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Tampilan yang menyesuaikan dengan sempurna di semua ukuran layar dan perangkat.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keamanan Tinggi</h3>
              <p className="text-gray-600">
                Dilengkapi dengan sistem keamanan untuk melindungi website dan data Anda.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrasi API</h3>
              <p className="text-gray-600">
                Dapat diintegrasikan dengan berbagai sistem atau aplikasi pihak ketiga.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Company Profile Website Development" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Proses Pengembangan</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Konsultasi & Briefing</h3>
                    <p className="text-gray-600">Memahami kebutuhan dan tujuan bisnis Anda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Wireframing & Desain</h3>
                    <p className="text-gray-600">Pembuatan konsep dan desain visual website</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Pengembangan</h3>
                    <p className="text-gray-600">Pembuatan website dan implementasi fitur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Testing & Revisi</h3>
                    <p className="text-gray-600">Pengujian dan penyempurnaan website</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Deployment & Training</h3>
                    <p className="text-gray-600">Peluncuran website dan pelatihan penggunaan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Proyek Web Company Profile Anda?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan diskusikan kebutuhan website bisnis Anda.
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

export default WebsiteCustom;
