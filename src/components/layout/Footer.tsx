import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const destinations = [
    'Samarkand',
    'Bukhara',
    'Khiva',
    'Tashkent',
    'Shahrisabz',
    'Seven Lakes',
    'Fann Mountains',
  ];

  const quickLinks = [
    { path: '/private-tours', label: t('nav.privateTours') },
    { path: '/day-trips', label: t('nav.dayTrips') },
    { path: '/multi-day-tours', label: t('nav.multiDayTours') },
    { path: '/transfers', label: t('nav.transfers') },
    { path: '/about', label: t('nav.about') },
    { path: '/reviews', label: t('nav.reviews') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold">
                Jam<span className="text-accent">Trips</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t('footer.destinations')}</h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <span className="text-primary-foreground/80">{destination}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+998915395610"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +998 91 539 56 10
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:felice21@yandex.ru"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  felice21@yandex.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} JamTrips. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
