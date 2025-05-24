
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Portfolio = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder portfolio items - you can replace these with real data
  const portfolioItems = [
    {
      id: 1,
      title: "Landing Page E-Commerce Fashion",
      description: "Landing page untuk brand fashion lokal dengan fokus konversi tinggi",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2340&auto=format&fit=crop",
      category: "Landing Page",
      date: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Website Company Profile Tech Startup",
      description: "Website profesional untuk startup teknologi dengan desain modern",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      category: "Company Profile",
      date: "2024", 
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform UMKM",
      description: "Platform e-commerce lengkap untuk UMKM dengan sistem pembayaran terintegrasi",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
      category: "E-Commerce",
      date: "2024",
      link: "#"
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
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-medium transition-colors"
                  >
                    <span>Lihat Project</span>
                    <ExternalLink size={14} />
                  </a>
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
