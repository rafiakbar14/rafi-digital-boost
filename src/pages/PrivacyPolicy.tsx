import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Cubiqin</title>
        <meta name="description" content="Kebijakan Privasi Cubiqin" />
      </Helmet>
      
      <div id="top"></div>
      <Navbar />
      
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-blue hover:underline mb-8">
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">Terakhir diperbarui: 22 Mei 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Pendahuluan</h2>
            <p>
              Cubiqin ("kami", "milik kami", atau "kita") menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi ini akan menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika Anda menggunakan layanan kami.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi berikut:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Informasi kontak: nama, alamat email, nomor telepon, alamat</li>
              <li>Informasi bisnis: nama perusahaan, jabatan, industri</li>
              <li>Informasi teknis: alamat IP, jenis browser, perangkat yang digunakan</li>
              <li>Data penggunaan: informasi tentang bagaimana Anda menggunakan situs web dan layanan kami</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Menyediakan, mengoperasikan, dan memelihara layanan kami</li>
              <li>Meningkatkan, mempersonalisasi, dan memperluas layanan kami</li>
              <li>Memahami dan menganalisis bagaimana Anda menggunakan layanan kami</li>
              <li>Mengembangkan produk, layanan, fitur, dan fungsionalitas baru</li>
              <li>Berkomunikasi dengan Anda tentang layanan kami</li>
              <li>Mencegah penipuan dan aktivitas ilegal lainnya</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Dasar Hukum Pengolahan Data</h2>
            <p>
              Pengolahan data pribadi Anda dilakukan berdasarkan persetujuan Anda dan untuk kepentingan yang sah. Hal ini sesuai dengan ketentuan dalam Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE) dan Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Perlindungan Data dan Keamanan</h2>
            <p>
              Kami mengambil langkah-langkah keamanan yang tepat untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Sesuai dengan Pasal 26 UU ITE, kami menjamin perlindungan data pribadi sebagai bagian dari hak pribadi.
            </p>
            <p>
              Pelanggaran terhadap kerahasiaan data dapat dikenakan sanksi pidana sesuai dengan Pasal 31 UU ITE tentang penyadapan informasi elektronik dan Pasal 32 UU ITE tentang mengubah, menambah, mengurangi, merusak, atau menghilangkan informasi elektronik tanpa hak.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Pengungkapan Informasi</h2>
            <p>Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Informasi pribadi dapat diungkapkan dalam situasi berikut:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Dengan persetujuan Anda</li>
              <li>Kepada penyedia layanan pihak ketiga yang membantu kami dalam operasional bisnis</li>
              <li>Untuk mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              <li>Untuk melindungi dan membela hak atau properti Cubiqin</li>
              <li>Untuk mencegah atau menyelidiki kemungkinan kesalahan dalam kaitannya dengan layanan</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Hak Anda</h2>
            <p>Sesuai dengan UU Perlindungan Data Pribadi, Anda memiliki hak berikut:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Hak untuk mengakses informasi pribadi Anda yang kami simpan</li>
              <li>Hak untuk meminta koreksi atau pembaruan informasi pribadi Anda</li>
              <li>Hak untuk meminta penghapusan informasi pribadi Anda</li>
              <li>Hak untuk membatasi pengolahan informasi pribadi Anda</li>
              <li>Hak untuk menolak pengolahan informasi pribadi Anda</li>
              <li>Hak untuk portabilitas data</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Konsekuensi Hukum</h2>
            <p>
              Pelanggaran terhadap ketentuan UU ITE dapat dikenakan sanksi pidana, termasuk namun tidak terbatas pada:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Pasal 46 UU ITE - Pidana penjara maksimal 6 tahun dan/atau denda maksimal Rp600 juta untuk akses ilegal</li>
              <li>Pasal 48 UU ITE - Pidana penjara maksimal 8 tahun dan/atau denda maksimal Rp800 juta untuk manipulasi data</li>
              <li>Pasal 52 UU ITE - Pemberatan sepertiga dari pidana pokok untuk pelanggaran yang berkaitan dengan data pribadi</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi yang baru di halaman ini dan memberi tahu Anda melalui email jika diperlukan.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Email: info@cubiqin.com</li>
              <li>WhatsApp: 083135183093</li>
              <li>Alamat: Samarinda, Kalimantan Timur, Indonesia</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
