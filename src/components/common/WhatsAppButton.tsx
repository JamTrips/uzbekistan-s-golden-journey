import React from 'react';
import { MessageCircle, Send, Phone } from 'lucide-react';

const FloatingContactButtons: React.FC = () => {
  const phoneNumber = '998990152110';
  const message = encodeURIComponent('Hello! I would like to inquire about tours in Uzbekistan.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const telegramUrl = `https://t.me/+${phoneNumber}`;
  const phoneUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone */}
      <a
        href={phoneUrl}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      
      {/* Telegram */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0088cc] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on Telegram"
      >
        <Send className="w-6 h-6" />
      </a>
      
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
