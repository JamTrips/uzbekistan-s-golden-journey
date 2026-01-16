import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, 'Message is required').max(1000),
});

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: language === 'en' ? 'Message sent!' : 'Сообщение отправлено!',
        description: language === 'en' 
          ? 'We\'ll get back to you within 24 hours.' 
          : 'Мы ответим вам в течение 24 часов.',
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: language === 'en' ? 'Validation Error' : 'Ошибка валидации',
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = '998901234567';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <Helmet>
        <title>Contact JamTrips - Plan Your Uzbekistan Adventure</title>
        <meta name="description" content="Get in touch with JamTrips to plan your perfect Uzbekistan journey. We're available 24/7 via WhatsApp, email, or phone." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg shadow-soft">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting 
                      ? (language === 'en' ? 'Sending...' : 'Отправка...') 
                      : t('contact.form.submit')
                    }
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    {t('contact.info.title')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {language === 'en' ? 'Address' : 'Адрес'}
                        </h3>
                        <p className="text-muted-foreground">{t('contact.info.address')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {language === 'en' ? 'Phone' : 'Телефон'}
                        </h3>
                        <a href="tel:+998901234567" className="text-muted-foreground hover:text-accent transition-colors">
                          +998 90 123 45 67
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:info@jamtrips.uz" className="text-muted-foreground hover:text-accent transition-colors">
                          info@jamtrips.uz
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {language === 'en' ? 'Working Hours' : 'Время работы'}
                        </h3>
                        <p className="text-muted-foreground">
                          {language === 'en' ? '24/7 via WhatsApp' : '24/7 через WhatsApp'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 p-6 rounded-lg border border-[#25D366]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {language === 'en' ? 'Prefer WhatsApp?' : 'Предпочитаете WhatsApp?'}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en' 
                      ? 'Get instant responses! Chat with us directly on WhatsApp.' 
                      : 'Получите мгновенные ответы! Напишите нам напрямую в WhatsApp.'}
                  </p>
                  <Button variant="whatsapp" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t('cta.whatsapp')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
