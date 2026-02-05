import React from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactButtonsProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'default';
  className?: string;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ 
  variant = 'horizontal', 
  size = 'default',
  className = '' 
}) => {
  const phoneNumber = '998990152110';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telegramUrl = `https://t.me/+${phoneNumber}`;
  const phoneUrl = `tel:+${phoneNumber}`;

  const buttonSize = size === 'sm' ? 'sm' : 'default';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  const containerClass = variant === 'vertical' 
    ? `flex flex-col gap-2 ${className}`
    : `flex flex-wrap gap-2 ${className}`;

  return (
    <div className={containerClass}>
      <Button 
        variant="whatsapp" 
        size={buttonSize}
        className="flex-1 min-w-0"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className={iconSize} />
          <span className="ml-1.5">WhatsApp</span>
        </a>
      </Button>
      
      <Button 
        size={buttonSize}
        className="flex-1 min-w-0 bg-[#0088cc] hover:bg-[#0077b5] text-white"
        asChild
      >
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
          <Send className={iconSize} />
          <span className="ml-1.5">Telegram</span>
        </a>
      </Button>
      
      <Button 
        variant="outline" 
        size={buttonSize}
        className="flex-1 min-w-0"
        asChild
      >
        <a href={phoneUrl}>
          <Phone className={iconSize} />
          <span className="ml-1.5">Позвонить</span>
        </a>
      </Button>
    </div>
  );
};

export default ContactButtons;
