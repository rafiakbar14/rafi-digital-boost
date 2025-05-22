
import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Halo! Ada yang bisa saya bantu?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Make bubble disappear after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsBubbleVisible(false);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Terima kasih atas pertanyaan Anda. Untuk konsultasi lebih lanjut, silakan hubungi kami melalui WhatsApp di 083135183093.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => {
          setIsOpen(prev => !prev);
          setIsBubbleVisible(false);
        }}
        className="fixed bottom-6 right-6 bg-brand-blue text-white rounded-full p-3 shadow-lg z-50 hover:bg-brand-blue-dark transition-all duration-200"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat bubble */}
      {isBubbleVisible && !isOpen && (
        <div className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs z-50 animate-fade-in">
          <p className="text-sm">Ada yang bisa saya bantu?</p>
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl w-80 sm:w-96 z-50 overflow-hidden flex flex-col animate-fade-in">
          {/* Chat header */}
          <div className="bg-brand-blue text-white p-4">
            <h3 className="font-semibold">Customer Support</h3>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 space-y-4 max-h-80 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-brand-blue text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button 
              type="submit" 
              className="bg-brand-blue text-white rounded-full p-2 hover:bg-brand-blue-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 3 3 9-3 9 19-9Z"></path>
                <path d="M6 12h16"></path>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
