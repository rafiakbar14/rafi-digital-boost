
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoSvg from '../4_20250522_202405_0001.svg';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<{type: 'bot' | 'user', text: string}[]>([
    {
      type: 'bot',
      text: 'Halo! Saya asisten virtual Rafi. Ada yang bisa saya bantu tentang layanan website atau digital marketing?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const closeChatbot = () => {
    setIsVisible(false);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { type: 'user' as const, text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse;
      
      const lowerCaseInput = inputValue.toLowerCase();
      
      if (lowerCaseInput.includes('harga') || lowerCaseInput.includes('biaya')) {
        botResponse = {
          type: 'bot' as const,
          text: 'Kami menawarkan berbagai paket dengan harga mulai dari Rp600.000 untuk landing page hingga Rp8.000.000 untuk e-commerce dengan otomatisasi AI. Anda bisa melihat detail harga di halaman ini. Apakah ada layanan spesifik yang Anda minati?'
        };
      } else if (lowerCaseInput.includes('landing page')) {
        botResponse = {
          type: 'bot' as const,
          text: 'Untuk jasa landing page, harga mulai dari Rp600.000 dengan 2 landing page untuk A/B testing dan gratis 1x revisi minor. Apakah Anda ingin tahu lebih lanjut?'
        };
      } else if (lowerCaseInput.includes('ecommerce') || lowerCaseInput.includes('e-commerce')) {
        botResponse = {
          type: 'bot' as const, 
          text: 'Untuk website e-commerce, kami memiliki paket mulai dari Rp3.000.000 dengan support hingga 25 produk. Tertarik untuk diskusi lebih lanjut?'
        };
      } else if (lowerCaseInput.includes('website')) {
        botResponse = {
          type: 'bot' as const,
          text: 'Kami menawarkan jasa pembuatan website custom dengan admin dashboard (bukan WordPress) dengan harga yang kompetitif dan personal. Apakah Anda ingin saya hubungkan dengan Rafi untuk diskusi lebih lanjut?'
        };
      } else if (lowerCaseInput.includes('iklan') || lowerCaseInput.includes('ads')) {
        botResponse = {
          type: 'bot' as const,
          text: 'Kami menawarkan jasa iklan Google Ads & Meta Ads (Instagram/Facebook). Kami juga dapat membuatkan landing page khusus untuk campaign iklan Anda.'
        };
      } else if (lowerCaseInput.includes('kontak') || lowerCaseInput.includes('hubungi')) {
        botResponse = {
          type: 'bot' as const,
          text: 'Anda dapat menghubungi Rafi langsung melalui WhatsApp di 083135183093 atau klik tombol WhatsApp di halaman ini.'
        };
      } else {
        botResponse = {
          type: 'bot' as const,
          text: 'Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail atau konsultasi khusus, sebaiknya langsung hubungi Rafi via WhatsApp di 083135183093. Apakah ada hal lain yang ingin Anda tanyakan?'
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  // Auto scroll to bottom of chat when messages change
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  if (!isVisible) return null;

  return (
    <>
      {/* Chat bubble button */}
      <button 
        className={cn(
          "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isOpen ? "bg-red-500 rotate-90" : "bg-brand-blue animate-bounce-subtle"
        )}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </button>
      
      {/* Chat window */}
      <div className={cn(
        "fixed bottom-24 right-6 z-40 bg-white rounded-xl shadow-lg w-80 max-w-[calc(100vw-3rem)] transition-all duration-300 overflow-hidden",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      )}>
        {/* Chat header */}
        <div className="bg-brand-blue text-white p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoSvg} alt="Rafi Design Logo" className="w-6 h-6" />
              <h3 className="font-medium">Asisten Virtual</h3>
            </div>
            <p className="text-xs opacity-80">Biasanya merespon dalam beberapa menit</p>
          </div>
          <button 
            onClick={closeChatbot}
            className="p-1 hover:bg-blue-600 rounded-full transition-colors"
            aria-label="Tutup chatbot"
          >
            <X size={16} />
          </button>
        </div>
        
        {/* Chat messages */}
        <div 
          id="chat-messages" 
          className="p-4 h-80 overflow-y-auto flex flex-col gap-3"
        >
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.type === 'bot' 
                  ? "bg-gray-100 self-start rounded-bl-none" 
                  : "bg-brand-blue text-white self-end rounded-br-none"
              )}
            >
              {message.text}
            </div>
          ))}
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSend} className="border-t p-4 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tulis pesan..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            className="bg-brand-blue text-white rounded-lg px-4 py-2 font-medium disabled:opacity-50"
          >
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
