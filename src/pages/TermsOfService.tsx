
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service - Cubiqin</title>
        <meta name="description" content="Syarat dan Ketentuan Layanan Cubiqin" />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Ketentuan Umum</h2>
            <p>Dengan menggunakan layanan Cubicin, Anda menyetujui dan terikat dengan syarat dan ketentuan yang tercantum dalam Terms of Service ini. Jika Anda tidak setuju dengan salah satu dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Deskripsi Layanan</h2>
            <p>Cubicin menyediakan layanan pembuatan website, landing page, e-commerce, dan digital marketing sesuai dengan kesepakatan yang dibuat dengan klien. Spesifikasi layanan akan dijelaskan dalam kontrak atau proposal terpisah yang disepakati oleh kedua belah pihak.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hak dan Kewajiban Klien</h2>
            <p>Klien bertanggung jawab untuk memberikan konten dan informasi yang akurat untuk digunakan dalam proyek. Klien harus memastikan bahwa semua konten yang diberikan tidak melanggar hukum Indonesia yang berlaku, termasuk namun tidak terbatas pada UU ITE, hak cipta, merek dagang, dan ketentuan privasi data.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Pembayaran</h2>
            <p>Pembayaran untuk layanan Cubicin harus dilakukan sesuai dengan ketentuan yang disepakati dalam kontrak. Umumnya, kami memerlukan pembayaran uang muka sebesar 50% sebelum proyek dimulai, dan sisa pembayaran dilakukan setelah proyek selesai dan sebelum diserahkan kepada klien.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Hak Kekayaan Intelektual</h2>
            <p>Setelah pembayaran penuh diterima, hak kekayaan intelektual atas desain dan pengembangan yang dibuat oleh Cubicin akan dialihkan kepada klien, kecuali dinyatakan lain dalam kontrak. Namun, Cubicin berhak untuk menggunakan proyek tersebut sebagai portofolio dan referensi untuk klien potensial di masa mendatang, kecuali disepakati sebaliknya secara tertulis.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Jaminan dan Tanggung Jawab</h2>
            <p>Cubicin tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan layanan kami, kecuali jika disebabkan oleh kelalaian yang disengaja. Layanan disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tersurat maupun tersirat.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Pembatasan Tanggung Jawab</h2>
            <p>Dalam hal apapun, tanggung jawab Cubicin untuk kerugian tidak akan melebihi jumlah yang dibayarkan oleh klien untuk layanan yang relevan. Cubicin tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan layanan.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Penyelesaian Sengketa</h2>
            <p>Setiap sengketa yang timbul dari atau sehubungan dengan perjanjian ini akan diselesaikan melalui musyawarah dan mufakat. Jika penyelesaian secara damai tidak dapat dicapai, sengketa akan diselesaikan melalui pengadilan yang berwenang di Indonesia sesuai dengan hukum Indonesia.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Hukum yang Berlaku</h2>
            <p>Terms of Service ini diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia, termasuk namun tidak terbatas pada Kitab Undang-Undang Hukum Pidana (KUHP) dan Undang-Undang No. 19 Tahun 2016 tentang Informasi dan Transaksi Elektronik (UU ITE).</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Perubahan Ketentuan</h2>
            <p>Cubicin berhak untuk mengubah Terms of Service ini kapan saja. Perubahan akan efektif segera setelah diposting di website. Penggunaan berkelanjutan terhadap layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap ketentuan yang direvisi.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default TermsOfService;
