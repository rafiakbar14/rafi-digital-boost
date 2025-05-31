
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, PhoneCall, Star, CheckCircle, Eye, ExternalLink, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PriceCard from '@/components/PriceCard';
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
  const whatsappMessage = encodeURIComponent("Halo Saya berminat dengan Website Company Profile, tolong bantu saya membuatnya, terima kasih 🙏");
  
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

  return (
    <>
      <Helmet>
        <title>Website Company Profile Profesional - Mulai dari 1.5 Juta | Cubiqin</title>
        <meta name="description" content="Butuh hadir secara online kepada pelanggan? Komunikasikan brand Anda dengan website company profile profesional yang #Qubicin. Paket lengkap mulai Rp1.500.000" />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      {/* Hero Section - Consistent with homepage */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Butuh Hadir Secara Online <br className="hidden md:block" />
            Kepada Pelanggan?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Yuk komunikasikan brandmu secara lebih dekat dengan website company profile yang <span className="font-bold text-yellow-300">#Qubicin</span>
          </p>
          <a 
            href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <PhoneCall size={20} />
            <span>Konsultasi Gratis Sekarang</span>
          </a>
        </div>
      </section>
      
      {/* Interest Section - More Complete Explanation */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Capek Menjelaskan Bisnis Anda Berulang-ulang?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Dengan website company profile, Anda bisa menjelaskan semua produk, layanan, dan aktivitas bisnis 
              yang dijalankan tanpa harus menjelaskannya satu per satu yang pastinya capek dan memakan waktu. 
              Website akan bekerja 24/7 untuk Anda sebagai sales terbaik yang tidak pernah lelah.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bayangkan betapa mudahnya ketika calon pelanggan bisa langsung melihat profil perusahaan, 
              testimoni klien, galeri produk, dan cara menghubungi Anda kapan saja mereka mau. 
              Tidak perlu lagi menjelaskan dari awal setiap kali ada yang bertanya!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Meningkatkan Kredibilitas</h3>
              <p className="text-gray-600">
                Website profesional membuat bisnis Anda terlihat lebih terpercaya dan established di mata calon pelanggan.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jangkauan Lebih Luas</h3>
              <p className="text-gray-600">
                Calon pelanggan bisa menemukan dan mengenal bisnis Anda 24/7 melalui internet dari mana saja.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hemat Waktu & Tenaga</h3>
              <p className="text-gray-600">
                Tidak perlu lagi menjelaskan berulang-ulang. Biarkan website yang menjelaskan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Consistent with Homepage */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Paket Website Company Profile
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PriceCard
              title="Paket Basic"
              price="Rp1.500.000"
              features={[
                "5 Halaman Website",
                "Desain Responsif Mobile",
                "Domain .com GRATIS 1 Tahun",
                "Hosting GRATIS 1 Tahun",
                "SSL Certificate",
                "WhatsApp Integration",
                "SEO Friendly",
                "2x Revisi GRATIS"
              ]}
              ctaText="Pesan Basic"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya tertarik dengan Paket Basic Website Company Profile Rp1.500.000. Bisa kasih info lengkapnya?")}`}
            />
            
            <PriceCard
              title="Paket Professional"
              price="Rp2.500.000"
              features={[
                "10 Halaman Website + Blog",
                "Desain Premium Custom",
                "Domain .com GRATIS 1 Tahun", 
                "Hosting Premium GRATIS 1 Tahun",
                "SSL Certificate",
                "SEO Optimization Lengkap",
                "Google Analytics Setup",
                "Live Chat WhatsApp",
                "Admin Panel",
                "3x Revisi GRATIS",
                "Maintenance 3 Bulan GRATIS"
              ]}
              isPopular={true}
              ctaText="Pesan Professional"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya tertarik dengan Paket Professional Website Company Profile Rp2.500.000. Bisa kasih info lengkapnya?")}`}
            />
            
            <PriceCard
              title="Paket Premium"
              price="Rp4.500.000"
              features={[
                "Unlimited Halaman",
                "Desain Eksklusif Custom",
                "Domain .com GRATIS 1 Tahun",
                "Hosting Premium GRATIS 1 Tahun", 
                "SSL Certificate",
                "SEO Optimization Advanced",
                "Google Ads Setup GRATIS",
                "CRM Integration",
                "Admin Panel Advanced",
                "Form Builder",
                "5x Revisi GRATIS",
                "Maintenance 6 Bulan GRATIS",
                "Training Penggunaan Website"
              ]}
              ctaText="Pesan Premium"
              ctaLink={`https://wa.me/6283135183093?text=${encodeURIComponent("Halo, saya tertarik dengan Paket Premium Website Company Profile Rp4.500.000. Bisa kasih info lengkapnya?")}`}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Contoh Website yang Sudah Kami Buat
          </h2>
          
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pengen Buat Website Company Profile?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Nih langsung klik tombol dibawah untuk langsung ngobrol di WhatsApp dan dapatkan konsultasi GRATIS!
          </p>
          <a 
            href={`https://wa.me/6283135183093?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <PhoneCall size={24} />
            <span>Hubungi Kami di WhatsApp</span>
          </a>
          <p className="mt-6 text-green-200 text-sm">
            💬 Gratis konsultasi & penawaran khusus untuk Anda!
          </p>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default WebsiteCompro;
