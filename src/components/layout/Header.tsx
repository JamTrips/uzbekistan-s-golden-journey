import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/multi-day-tours', label: t('nav.multiDayTours') },
    { path: '/transfers', label: t('nav.transfers') },
    { path: '/about', label: t('nav.about') },
    { path: '/reviews', label: t('nav.reviews') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary">
              Jam<span className="text-accent">Trips</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  language === 'ru'
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                RU
              </button>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="tel:+998990152110"
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    <span>+998 99 015 21 10</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Позвонить</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="gold" size="sm" className="hidden md:flex" asChild>
              <Link to="/contact">{t('hero.cta')}</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-md ${
                    location.pathname === link.path
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4 flex flex-col gap-3">
                <a
                  href="tel:+998990152110"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-medium rounded-lg transition-all duration-300 active:scale-95"
                  title="Позвонить"
                >
                  <Phone className="w-5 h-5" />
                  <span>+998 99 015 21 10</span>
                </a>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/contact">{t('hero.cta')}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
