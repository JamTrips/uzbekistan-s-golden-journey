import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Landmark, Castle, Sun } from 'lucide-react';

import tashkentImage from '@/assets/tashkent.jpg';
import heroRegistanImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';
import sevenLakesImage from '@/assets/seven-lakes.jpg';

const DestinationsSection: React.FC = () => {
  const { language } = useLanguage();

  const cities = [
    {
      id: 'tashkent',
      icon: Building2,
      name: language === 'en' ? 'Tashkent' : 'Ташкент',
      subtitle: language === 'en' 
        ? 'The modern capital where history meets contemporary life.'
        : 'Современная столица, где история встречается с современностью.',
      image: tashkentImage,
      link: '/destinations/tashkent',
    },
    {
      id: 'samarkand',
      icon: Landmark,
      name: language === 'en' ? 'Samarkand' : 'Самарканд',
      subtitle: language === 'en'
        ? 'The legendary heart of the Silk Road.'
        : 'Легендарное сердце Шёлкового пути.',
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
      image: bukharaImage,
      link: '/destinations/bukhara',
    },
    {
      id: 'khiva',
      icon: Sun,
      name: language === 'en' ? 'Khiva' : 'Хива',
      subtitle: language === 'en'
        ? 'A perfectly preserved medieval city.'
        : 'Идеально сохранившийся средневековый город.',
      image: khivaImage,
      link: '/destinations/khiva',
    },
    {
      id: 'shakhrisabz',
      icon: Landmark,
      name: language === 'en' ? 'Shakhrisabz' : 'Шахрисабз',
      subtitle: language === 'en'
        ? 'The birthplace of Amir Temur.'
        : 'Родина Амира Темура.',
      image: sevenLakesImage,
      link: '/destinations/shakhrisabz',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Explore by City' : 'Исследуйте по городам'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover the best private tours in each destination across Uzbekistan.'
              : 'Откройте лучшие частные туры в каждом направлении Узбекистана.'}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cities.map((city, index) => (
            <Link
              key={city.id}
              to={city.link}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-accent/20 rounded-lg backdrop-blur-sm">
                    <city.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-primary-foreground">
                    {city.name}
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-3 line-clamp-2">
                  {city.subtitle}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  {language === 'en' ? 'View Tours' : 'Смотреть туры'}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/destinations">
              {language === 'en' ? 'View All Destinations' : 'Все направления'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
