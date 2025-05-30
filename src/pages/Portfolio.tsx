
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Calendar, Eye } from 'lucide-react';
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

const Portfolio = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio items with real data
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

  // Coming Soon items
  const comingSoonItems = [
    {
      id: 4,
      title: "E-Commerce Fashion",
      description: "Platform e-commerce untuk brand fashion lokal dengan sistem inventory dan payment gateway terintegrasi",
      category: "E-Commerce",
      date: "Coming Soon"
    },
    {
      id: 5,
      title: "Company Profile Tech Startup",
      description: "Website profesional untuk startup teknologi dengan portfolio dan sistem career page",
      category: "Company Profile",
      date: "Coming Soon"
    },
    {
      id: 6,
      title: "E-Commerce Platform UMKM",
      description: "Platform marketplace untuk UMKM dengan multi-vendor dan sistem dropshipping",
      category: "E-Commerce",
      date: "Coming Soon"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portofolio - Cubiqin</title>
        <meta name="description" content="Portofolio proyek website dan digital marketing dari Cubiqin. Lihat karya-karya terbaik kami." />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Portofolio</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Lihat koleksi proyek yang telah kami kerjakan untuk berbagai klien dari berbagai industri.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

            {comingSoonItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md opacity-75">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-500">Coming Soon</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">
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
                  <span className="text-gray-400 font-medium">Segera Hadir</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ingin Melihat Project Lebih Lengkap?</h3>
              <p className="text-gray-600 mb-6">
                Hubungi kami untuk melihat case study lengkap dan project lainnya yang telah kami kerjakan.
              </p>
              <a 
                href="https://wa.me/6283135183093?text=Halo%2C%20saya%20ingin%20melihat%20portofolio%20lengkap%20Cubiqin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Portfolio;
