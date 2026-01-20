import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Landmark, Castle, Sun } from 'lucide-react';

import tashkentImage from '@/assets/tashkent.jpg';
import heroRegistanImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';

const Destinations: React.FC = () => {
  const { language } = useLanguage();

  const cities = [
    {
      id: 'tashkent',
      icon: Building2,
      name: language === 'en' ? 'Tashkent' : 'Ташкент',
      subtitle: language === 'en' 
        ? 'The modern capital of Uzbekistan where history meets contemporary life.'
        : 'Современная столица Узбекистана, где история встречается с современностью.',
      description: language === 'en'
        ? 'Explore ancient madrasahs, lively bazaars, and vibrant city culture.'
        : 'Исследуйте древние медресе, оживлённые базары и яркую городскую культуру.',
      image: tashkentImage,
      link: '/destinations/tashkent',
    },
    {
      id: 'samarkand',
      icon: Landmark,
      name: language === 'en' ? 'Samarkand' : 'Самарканд',
      subtitle: language === 'en'
        ? 'The legendary heart of the Silk Road and one of the most beautiful cities in the world.'
        : 'Легендарное сердце Шёлкового пути и один из красивейших городов мира.',
      description: language === 'en'
        ? 'Home to the iconic Registan Square and breathtaking Islamic architecture.'
        : 'Здесь находится культовая площадь Регистан и захватывающая исламская архитектура.',
      image: heroRegistanImage,
      link: '/destinations/samarkand',
    },
    {
      id: 'bukhara',
      icon: Castle,
      name: language === 'en' ? 'Bukhara' : 'Бухара',
      subtitle: language === 'en'
        ? 'A living museum with over 2,000 years of history.'
        : 'Живой музей с более чем 2000-летней историей.',
      description: language === 'en'
        ? 'Walk through preserved old streets, ancient mosques, and historic trading domes.'
        : 'Прогуляйтесь по сохранившимся старым улицам, древним мечетям и историческим торговым куполам.',
      image: bukharaImage,
      link: '/destinations/bukhara',
    },
    {
      id: 'khiva',
      icon: Sun,
      name: language === 'en' ? 'Khiva' : 'Хива',
      subtitle: language === 'en'
        ? 'A perfectly preserved medieval city surrounded by fortress walls.'
        : 'Идеально сохранившийся средневековый город, окружённый крепостными стенами.',
      description: language === 'en'
        ? 'Step back in time inside the UNESCO-listed Itchan Kala.'
        : 'Окунитесь в прошлое внутри внесённого в список ЮНЕСКО Ичан-Калы.',
      image: khivaImage,
      link: '/destinations/khiva',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Destinations - Explore Uzbekistan by City | JamTrips' : 'Направления - Исследуйте Узбекистан | JamTrips'}</title>
        <meta name="description" content={language === 'en' 
          ? 'Explore Uzbekistan by city. Private tours in Tashkent, Samarkand, Bukhara, and Khiva. Discover the best experiences in each destination.'
          : 'Исследуйте Узбекистан по городам. Частные туры в Ташкент, Самарканд, Бухару и Хиву.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            {language === 'en' ? 'Explore Uzbekistan by City' : 'Исследуйте Узбекистан по городам'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {language === 'en' 
              ? 'Choose your destination and discover the best private tours in each city. All tours are carefully designed for comfort, culture, and unforgettable experiences.'
              : 'Выберите направление и откройте лучшие частные туры в каждом городе. Все туры тщательно разработаны для комфорта, культуры и незабываемых впечатлений.'}
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <Link
                key={city.id}
                to={city.link}
                className="group relative overflow-hidden rounded-2xl shadow-elevated hover:shadow-gold transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/20 rounded-lg backdrop-blur-sm">
                      <city.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                      {city.name}
                    </h2>
                  </div>
                  <p className="text-primary-foreground/90 mb-2 font-medium">
                    {city.subtitle}
                  </p>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    {city.description}
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                  >
                    {language === 'en' ? 'View Tours' : 'Смотреть туры'}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
