import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/day-trips', label: t('nav.dayTrips') },
    { path: '/multi-day-tours', label: t('nav.multiDayTours') },
    { path: '/transfers', label: t('nav.transfers') },
    { path: '/about', label: t('nav.about') },
    { path: '/reviews', label: t('nav.reviews') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'ru' as const, label: 'Русский', flag: '🇷🇺' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-muted hover:bg-muted/80 rounded-md transition-colors">
                  <span className="text-lg">{currentLang.flag}</span>
                  <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border shadow-lg z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-3 cursor-pointer ${
                      language === lang.code ? 'bg-accent/10 text-accent' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
              <div className="mt-4 px-4">
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
