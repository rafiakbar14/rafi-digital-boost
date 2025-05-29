
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall, Star, CheckCircle, Eye, ExternalLink, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WebsiteCompro = () => {
  // Define the WhatsApp message
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Website Company Profile Rp1.800.000, tolong bantu saya membuatnya, terima kasih 🙏");
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Contoh Hasil Landing Page Kami",
      description: "Landing page penjualan emas syariah yang mengedepankan transaksi tanpa riba dan ketidakjelasan atau Gharar",
      detailedDescription: "Website ini merupakan landing page untuk penjualan emas syariah yang dirancang khusus dengan prinsip-prinsip syariah. Fitur utama meliputi katalog produk emas, kalkulator harga real-time, sistem pemesanan online, dan edukasi mengenai investasi emas syariah. Desain yang clean dan modern dengan fokus pada konversi tinggi.",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2340&auto=format&fit=crop",
      category: "Landing Page",
      date: "2024",
      link: "https://lpemas.cubiqin.com"
    },
    {
      id: 2,
      title: "Website Pemasangan CCTV",
      description: "Landing page untuk penjualan dan pemasangan sistem CCTV dengan berbagai pilihan paket sesuai kebutuhan",
      detailedDescription: "Website komprehensif untuk jasa pemasangan CCTV yang menampilkan berbagai paket layanan, galeri hasil instalasi, testimoni pelanggan, dan sistem booking konsultasi online. Dilengkapi dengan fitur live chat untuk konsultasi cepat dan kalkulator estimasi biaya pemasangan berdasarkan kebutuhan area.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2340&auto=format&fit=crop",
      category: "Landing Page",
      date: "2024",
      link: "https://lpcctv.cubiqin.com"
    },
    {
      id: 3,
      title: "Website Penjualan Rumah",
      description: "Landing page untuk penjualan rumah dengan tampilan gallery yang menarik dan informasi properti yang lengkap",
      detailedDescription: "Platform penjualan properti dengan fitur pencarian advanced, virtual tour 360°, kalkulator KPR, dan sistem booking viewing online. Menampilkan informasi lengkap properti termasuk spesifikasi, lokasi, fasilitas sekitar, dan proses pembelian yang transparan dengan dokumentasi lengkap.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2340&auto=format&fit=crop",
      category: "Landing Page",
      date: "2024",
      link: "https://lprumah.cubiqin.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Company Profile - Cubiqin</title>
        <meta name="description" content="Jasa pembuatan website company profile profesional untuk meningkatkan kredibilitas bisnis Anda. Harga mulai Rp1.800.000" />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      {/* ATTENTION - Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Website <span className="text-brand-blue">Company Profile</span> 
                <br className="hidden md:block" />
                yang Meningkatkan <span className="text-brand-blue">Kredibilitas</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Bangun kepercayaan pelanggan dengan website company profile profesional. 
                Tampilkan profil perusahaan, layanan, dan portofolio dengan desain yang menarik dan responsif.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a 
                  href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
                >
                  <PhoneCall size={18} />
                  <span>Pesan Sekarang - Rp1.800.000</span>
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center gap-2 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
                >
                  <Eye size={18} />
                  <span>Lihat Portofolio</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Website Company Profile" 
                className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* INTEREST - Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
            Mengapa Bisnis Anda Butuh Website Company Profile?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Meningkatkan Kredibilitas</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Website profesional membuat bisnis Anda terlihat lebih terpercaya di mata calon pelanggan.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Jangkauan Lebih Luas</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Calon pelanggan bisa menemukan dan mengenal bisnis Anda 24/7 melalui internet.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center md:col-span-2 lg:col-span-1">
              <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Kompetisi Lebih Unggul</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Tampil lebih profesional dibanding kompetitor yang belum memiliki website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIRE - What You Get */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
            Apa yang Anda Dapatkan dengan Harga Rp1.800.000?
          </h2>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Desain modern dan responsif (mobile-friendly)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Halaman About Us, Services, Portfolio, Contact</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">SEO optimization untuk mudah ditemukan Google</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Form kontak dan WhatsApp terintegrasi</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Hosting 1 tahun + Domain .com gratis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">SSL certificate untuk keamanan</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">3x revisi gratis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Waktu pengerjaan 5-7 hari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900">
            Lihat Hasil Karya Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-xs md:text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center justify-center gap-2 text-brand-blue hover:text-brand-blue-dark font-medium transition-colors text-sm">
                          <Eye size={14} />
                          <span>Lihat Detail</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl mx-4">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription className="text-left">
                            {item.detailedDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-4 py-2 rounded-lg transition-colors"
                          >
                            <span>Kunjungi Website</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-brand-blue hover:text-brand-blue-dark font-medium transition-colors text-sm"
                    >
                      <span>Kunjungi</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION - CTA Section */}
      <section className="py-12 md:py-16 bg-brand-blue">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            Siap Meningkatkan Kredibilitas Bisnis Anda?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 leading-relaxed">
            Jangan biarkan kompetitor unggul dari Anda. Dapatkan website company profile profesional 
            dengan harga terjangkau dan hasil berkualitas tinggi.
          </p>
          
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-2xl mx-auto mb-8">
            <div className="text-center mb-6">
              <span className="text-3xl md:text-4xl font-bold text-brand-blue">Rp1.800.000</span>
              <p className="text-gray-600 mt-2 text-sm md:text-base">Harga All-in sudah termasuk hosting & domain</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <div>✅ Hosting 1 Tahun</div>
              <div>✅ Domain .com Gratis</div>
              <div>✅ SSL Certificate</div>
              <div>✅ Mobile Responsive</div>
            </div>
            
            <a 
              href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full text-base md:text-lg"
            >
              <PhoneCall size={20} />
              <span>Pesan Website Sekarang</span>
            </a>
          </div>
          
          <p className="text-blue-100 text-sm md:text-base">
            💬 <strong>Konsultasi Gratis</strong> • 📱 <strong>Mobile Friendly</strong> • ⚡ <strong>Pengerjaan Cepat</strong>
          </p>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default WebsiteCompro;
