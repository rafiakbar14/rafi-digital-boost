
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya ingin konsultasi tentang jasa website.

Nama: ${formData.name}
Email: ${formData.email}

Pesan:
${formData.message}`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/6283135183093?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={cn("bg-white p-8 rounded-lg shadow-md", className)}>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Hubungi Kami</h3>
      
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
          className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <Send size={18} />
          <span>Kirim via WhatsApp</span>
        </button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Formulir akan mengarahkan langsung ke WhatsApp dengan pesan yang sudah terformat
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
