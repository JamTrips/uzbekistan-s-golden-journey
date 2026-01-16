import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import samarkandImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';
import sevenLakesImage from '@/assets/seven-lakes.jpg';

const PrivateTours: React.FC = () => {
  const { t, language } = useLanguage();

  const tours = [
    {
      id: 1,
      title: language === 'en' ? 'Grand Silk Road Experience' : 'Великое путешествие по Шёлковому пути',
      description: language === 'en'
        ? 'The ultimate Uzbekistan journey covering Tashkent, Samarkand, Bukhara, and Khiva. Experience the full glory of the Silk Road.'
        : 'Полное путешествие по Узбекистану: Ташкент, Самарканд, Бухара и Хива.',
      image: samarkandImage,
      duration: '10',
      price: 1200,
      destinations: ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva'],
    },
    {
      id: 2,
      title: language === 'en' ? 'Ancient Cities Tour' : 'Тур по древним городам',
      description: language === 'en'
        ? 'Explore the three jewels of Uzbekistan: Samarkand, Bukhara, and Khiva with expert local guides.'
        : 'Исследуйте три жемчужины Узбекистана: Самарканд, Бухару и Хиву.',
      image: bukharaImage,
      duration: '7',
      price: 850,
      destinations: ['Samarkand', 'Bukhara', 'Khiva'],
    },
    {
      id: 3,
      title: language === 'en' ? 'Photography Expedition' : 'Фото-экспедиция',
      description: language === 'en'
        ? 'Designed for photographers seeking the perfect shot. Early access, optimal timing, expert positioning.'
        : 'Создан для фотографов, ищущих идеальный кадр. Ранний доступ, оптимальное время.',
      image: khivaImage,
      duration: '8',
      price: 1000,
      destinations: ['Samarkand', 'Bukhara', 'Khiva', 'Shahrisabz'],
    },
    {
      id: 4,
      title: language === 'en' ? 'Mountains & Culture' : 'Горы и культура',
      description: language === 'en'
        ? 'Combine ancient cities with the natural beauty of Fann Mountains and Seven Lakes.'
        : 'Сочетание древних городов с природной красотой Фанских гор и Семи озёр.',
      image: sevenLakesImage,
      duration: '12',
      price: 1500,
      destinations: ['Tashkent', 'Samarkand', 'Seven Lakes', 'Fann Mountains'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Private Tours in Uzbekistan - Exclusive Silk Road Journeys | JamTrips</title>
        <meta name="description" content="Explore Uzbekistan with exclusive private tours. Expert guides, luxury transport, and personalized itineraries through Samarkand, Bukhara, Khiva, and more." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('private.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('private.subtitle')}
            </p>
          </div>
        </section>

        {/* Tours */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8 max-w-5xl mx-auto">
              {tours.map((tour, index) => (
                <div
                  key={tour.id}
                  className={`flex flex-col lg:flex-row gap-8 bg-card rounded-lg shadow-soft overflow-hidden ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="lg:w-2/5 h-64 lg:h-auto">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {tour.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Destinations */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tour.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          <MapPin className="w-3 h-3" />
                          {dest}
                        </span>
                      ))}
                    </div>

                    {/* Meta & CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>{tour.duration} {t('tours.days')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>Private</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xs text-muted-foreground">{t('tours.from')}</span>
                          <p className="text-2xl font-bold text-foreground">${tour.price}</p>
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

export default PrivateTours;
