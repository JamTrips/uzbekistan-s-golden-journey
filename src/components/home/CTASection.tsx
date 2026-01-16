import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  const phoneNumber = '998901234567';
  const message = encodeURIComponent('Hello! I would like to inquire about tours in Uzbekistan.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            {t('cta.title')}
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('cta.whatsapp')}
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a href="mailto:info@jamtrips.uz">
                <Mail className="w-5 h-5" />
                {t('cta.email')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
