
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your actual Google Form action URL
      // To get this URL: Create a Google Form > Get pre-filled link > Copy the action URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
      
      // Create form data for Google Forms
      const googleFormData = new FormData();
      // Replace these entry IDs with your actual Google Form field entry IDs
      googleFormData.append('entry.YOUR_NAME_ENTRY_ID', formData.name);
      googleFormData.append('entry.YOUR_EMAIL_ENTRY_ID', formData.email);
      googleFormData.append('entry.YOUR_MESSAGE_ENTRY_ID', formData.message);
      
      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors' // Required for Google Forms
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("bg-white p-8 rounded-lg shadow-md", className)}>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Hubungi Kami</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            <User size={16} className="inline mr-1" />
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail size={16} className="inline mr-1" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
            placeholder="Masukkan email Anda"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare size={16} className="inline mr-1" />
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors resize-vertical"
            placeholder="Ceritakan tentang project yang Anda inginkan..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Kirim Pesan</span>
            </>
          )}
        </button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Atau langsung chat via WhatsApp untuk respon lebih cepat
        </p>
        <a 
          href="https://wa.me/6283135183093?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20website" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-3 text-center text-brand-blue hover:text-brand-blue-dark font-medium transition-colors"
        >
          Chat WhatsApp →
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
