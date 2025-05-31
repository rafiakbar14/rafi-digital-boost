
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Calendar, Eye, ArrowDown, MessageCircle } from 'lucide-react';
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

const LpPaket15 = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio items - specific 3 items as requested
  const portfolioItems = [
    {
      id: 1,
      title: "Contoh Hasil Landing Page Kami",
      description: "Landing page penjualan emas syariah yang mengedepankan transaksi tanpa riba dan ketidakjelasan atau Gharar",
      detailedDescription: "Website ini merupakan landing page untuk penjualan emas syariah yang dirancang khusus dengan prinsip-prinsip syariah. Fitur utama meliputi katalog produk emas, kalkulator harga real-time, sistem pemesanan online, dan edukasi mengenai investasi emas syariah. Desain yang clean dan modern dengan fokus pada konversi tinggi.",
      image: "/lovable-uploads/6624b127-c42e-40ac-9aa5-8f04a0e7f77f.png",
      category: "Landing Page",
      date: "2024",
      link: "https://lpemas.cubiqin.com"
    },
    {
      id: 2,
      title: "Website Pemasangan CCTV",
      description: "Landing page untuk penjualan dan pemasangan sistem CCTV dengan berbagai pilihan paket sesuai kebutuhan",
      detailedDescription: "Website komprehensif untuk jasa pemasangan CCTV yang menampilkan berbagai paket layanan, galeri hasil instalasi, testimoni pelanggan, dan sistem booking konsultasi online. Dilengkapi dengan fitur live chat untuk konsultasi cepat dan kalkulator estimasi biaya pemasangan berdasarkan kebutuhan area.",
      image: "/lovable-uploads/93f41743-3abb-4dda-8431-783bb0ea5cc3.png",
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

  const scrollToInterest = () => {
    document.getElementById('interest-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Paket Website #Qubicin - Solusi Online Bisnis Anda</title>
        <meta name="description" content="Butuh hadir secara online kepada pelanggan? Komunikasikan brand Anda dengan website yang #Qubicin. Solusi website profesional untuk bisnis Anda." />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      {/* ATTENTION Section - Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Butuh Hadir Secara Online <br className="hidden md:block" />
            Kepada Pelanggan?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Yuk komunikasikan brandmu secara lebih dekat dengan website yang <span className="font-bold text-yellow-300">#Qubicin</span>
          </p>
          <button 
            onClick={scrollToInterest}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Pelajari Lebih Lanjut</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </section>

      {/* INTEREST Section */}
      <section id="interest-section" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Capek Menjelaskan Bisnis Anda Berulang-ulang?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dengan website, Anda bisa menjelaskan produk-produk atau aktivitas bisnis yang dijalankan 
              tanpa harus menjelaskannya satu per satu yang pastinya capek. Website akan bekerja 24/7 
              untuk Anda, memberikan informasi lengkap kepada calon pelanggan kapan saja mereka butuhkan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Informasi Lengkap</h3>
              <p className="text-gray-600">Tampilkan semua produk dan layanan Anda dengan detail yang jelas</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Tersedia</h3>
              <p className="text-gray-600">Website bekerja untuk Anda bahkan saat Anda sedang tidur</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Profesional</h3>
              <p className="text-gray-600">Tingkatkan kredibilitas bisnis dengan tampilan profesional</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <span>Lihat Contoh Website Kami</span>
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO Section */}
      <section id="portfolio-section" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contoh Website yang Sudah Kami Buat
            </h2>
            <p className="text-xl text-gray-600">
              Lihat hasil karya kami yang telah membantu bisnis berkembang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-col gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                          <Eye size={16} />
                          <span>Lihat Detail</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      <span>Kunjungi Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRE & ACTION Section - CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pengen Buat Website?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Nih langsung klik tombol dibawah untuk langsung ngobrol di WhatsApp
          </p>
          <a 
            href="https://wa.me/6283135183093?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20website%20Cubiqin.%20Bisa%20kasih%20info%20lengkapnya%3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} />
            <span>Hubungi Kami di WhatsApp</span>
          </a>
          <p className="mt-6 text-green-200 text-sm">
            Gratis konsultasi & penawaran khusus untuk Anda!
          </p>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default LpPaket15;
