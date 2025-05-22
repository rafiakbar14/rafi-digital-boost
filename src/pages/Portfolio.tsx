
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Portfolio = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Lihat koleksi proyek yang telah kami kerjakan. Halaman ini akan segera diperbarui dengan proyek-proyek terbaru.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-700">Konten portofolio akan segera hadir.</p>
              <p className="text-gray-500 mt-4">Kembali lagi nanti untuk melihat proyek-proyek terbaru.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Portfolio;
