import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import samarkandImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';
import sevenLakesImage from '@/assets/seven-lakes.jpg';

const MultiDayTours: React.FC = () => {
  const { t, language } = useLanguage();

  const tours = [
    {
      id: 1,
      title: language === 'en' ? 'Complete Silk Road Journey' : 'Полное путешествие по Шёлковому пути',
      description: language === 'en'
        ? 'The ultimate Uzbekistan experience. Visit all major Silk Road cities, from the capital Tashkent to the ancient walls of Khiva.'
        : 'Полный опыт Узбекистана. Посетите все основные города Шёлкового пути.',
      image: samarkandImage,
      duration: 10,
      price: 1200,
      destinations: ['Tashkent', 'Samarkand', 'Shahrisabz', 'Bukhara', 'Khiva'],
      highlights: language === 'en' 
        ? ['Registan Square', 'Kalyan Minaret', 'Itchan Kala', 'Desert sunset']
        : ['Площадь Регистан', 'Минарет Калян', 'Ичан-Кала', 'Закат в пустыне'],
    },
    {
      id: 2,
      title: language === 'en' ? 'Golden Triangle Tour' : 'Тур «Золотой треугольник»',
      description: language === 'en'
        ? 'Explore the three most iconic cities of the Silk Road: Samarkand, Bukhara, and Khiva. A perfect week of culture and history.'
        : 'Исследуйте три самых культовых города Шёлкового пути.',
      image: bukharaImage,
      duration: 7,
      price: 850,
      destinations: ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva'],
      highlights: language === 'en'
        ? ['UNESCO World Heritage sites', 'Traditional crafts', 'Local cuisine']
        : ['Объекты ЮНЕСКО', 'Традиционные ремёсла', 'Местная кухня'],
    },
    {
      id: 3,
      title: language === 'en' ? 'Mountains & Ancient Cities' : 'Горы и древние города',
      description: language === 'en'
        ? 'Combine cultural exploration with natural beauty. Trek to Seven Lakes and explore the Fann Mountains before visiting ancient cities.'
        : 'Сочетание культурного исследования с природной красотой.',
      image: sevenLakesImage,
      duration: 12,
      price: 1500,
      destinations: ['Tashkent', 'Samarkand', 'Seven Lakes', 'Fann Mountains', 'Bukhara'],
      highlights: language === 'en'
        ? ['Mountain trekking', 'Turquoise lakes', 'Ancient architecture']
        : ['Горный треккинг', 'Бирюзовые озёра', 'Древняя архитектура'],
    },
    {
      id: 4,
      title: language === 'en' ? 'Samarkand & Bukhara Focus' : 'Самарканд и Бухара',
      description: language === 'en'
        ? 'A focused journey into the two greatest Silk Road cities. More time to explore, more authentic experiences.'
        : 'Сфокусированное путешествие в два величайших города Шёлкового пути.',
      image: khivaImage,
      duration: 5,
      price: 550,
      destinations: ['Tashkent', 'Samarkand', 'Bukhara'],
      highlights: language === 'en'
        ? ['In-depth exploration', 'Artisan workshops', 'Cooking class']
        : ['Глубокое исследование', 'Мастерские ремесленников', 'Кулинарный класс'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Multi-Day Tours in Uzbekistan - Complete Silk Road Journeys | JamTrips</title>
        <meta name="description" content="Comprehensive multi-day tours through Uzbekistan. 5-12 day private journeys covering Samarkand, Bukhara, Khiva, and the Fann Mountains." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('multiDay.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('multiDay.subtitle')}
            </p>
          </div>
        </section>

        {/* Tours */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12 max-w-5xl mx-auto">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-card rounded-lg shadow-soft overflow-hidden"
                >
                  <div className="grid lg:grid-cols-5">
                    {/* Image */}
                    <div className="lg:col-span-2 h-64 lg:h-auto">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                          {tour.title}
                        </h2>
                        <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          {tour.duration} {t('tours.days')}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {tour.description}
                      </p>

                      {/* Destinations */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {language === 'en' ? 'Destinations' : 'Направления'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.destinations.map((dest, i) => (
                            <span
                              key={dest}
                              className="flex items-center gap-1 text-sm text-muted-foreground"
                            >
                              <MapPin className="w-3 h-3 text-accent" />
                              {dest}
                              {i < tour.destinations.length - 1 && (
                                <span className="ml-2">→</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {language === 'en' ? 'Highlights' : 'Основные моменты'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                        <div>
                          <span className="text-xs text-muted-foreground">{t('tours.from')}</span>
                          <p className="text-2xl font-bold text-foreground">${tour.price}</p>
                          <span className="text-xs text-muted-foreground">{t('tours.perPerson')}</span>
                        </div>
                        <Button variant="gold" asChild>
                          <Link to="/contact">
                            {t('tours.bookNow')}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MultiDayTours;
