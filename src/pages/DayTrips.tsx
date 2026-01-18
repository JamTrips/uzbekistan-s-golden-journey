import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import samarkandImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';
import sevenLakesImage from '@/assets/seven-lakes.jpg';
import tashkentImage from '@/assets/tashkent.jpg';

const DayTrips: React.FC = () => {
  const { t, language } = useLanguage();

  const trips = [
    {
      id: 1,
      title: language === 'en' ? 'Samarkand Full Day' : 'Самарканд за один день',
      description: language === 'en'
        ? 'Explore Registan Square, Gur-Emir Mausoleum, Shah-i-Zinda, and Bibi-Khanym Mosque in one comprehensive day tour.'
        : 'Исследуйте площадь Регистан, мавзолей Гур-Эмир, Шахи-Зинда и мечеть Биби-Ханум.',
      image: samarkandImage,
      duration: '10-12 hours',
      price: 150,
      from: 'Tashkent',
    },
    {
      id: 2,
      title: language === 'en' ? 'Seven Lakes & Fann Mountains' : 'Семь озёр и Фанские горы',
      description: language === 'en'
        ? 'Discover the stunning turquoise Seven Lakes nestled in the majestic Fann Mountains. Experience breathtaking alpine scenery, crystal-clear waters, and pristine nature.'
        : 'Откройте для себя потрясающие бирюзовые Семь озёр в величественных Фанских горах. Насладитесь захватывающими альпийскими пейзажами и кристально чистыми водами.',
      image: sevenLakesImage,
      duration: '10-12 hours',
      price: 140,
      from: 'Samarkand',
    },
    {
      id: 3,
      title: language === 'en' ? 'Bukhara Day Tour' : 'Однодневный тур в Бухару',
      description: language === 'en'
        ? 'Walk through 2,500 years of history. Visit the Ark Fortress, Po-i-Kalyan complex, and ancient trading domes.'
        : 'Пройдите через 2500 лет истории. Посетите крепость Арк и комплекс Пои-Калян.',
      image: bukharaImage,
      duration: '12-14 hours',
      price: 180,
      from: 'Samarkand',
    },
    {
      id: 4,
      title: language === 'en' ? 'Shahrisabz Excursion' : 'Экскурсия в Шахрисабз',
      description: language === 'en'
        ? 'Visit the birthplace of Amir Timur. Explore the ruins of Ak-Saray Palace and other historical monuments.'
        : 'Посетите родину Амира Тимура. Исследуйте руины дворца Ак-Сарай.',
      image: khivaImage,
      duration: '6-8 hours',
      price: 100,
      from: 'Samarkand',
    },
    {
      id: 5,
      title: language === 'en' ? 'Tashkent City Tour' : 'Обзорный тур по Ташкенту',
      description: language === 'en'
        ? 'Discover the capital city: Khast Imam complex, Chorsu Bazaar, Independence Square, and the famous metro stations.'
        : 'Откройте столицу: комплекс Хаст Имам, базар Чорсу, площадь Независимости.',
      image: tashkentImage,
      duration: '6-8 hours',
      price: 80,
      from: 'Tashkent',
    },
    {
      id: 6,
      title: language === 'en' ? 'Bukhara by Train' : 'Бухара на поезде',
      description: language === 'en'
        ? 'Travel by high-speed Afrosiyob train to Bukhara. Explore the ancient Silk Road city with its Ark Fortress, Po-i-Kalyan complex, and historic trading domes, then return the same day.'
        : 'Путешествуйте скоростным поездом Афросиаб в Бухару. Исследуйте древний город Шёлкового пути с крепостью Арк, комплексом Пои-Калян и историческими торговыми куполами.',
      image: bukharaImage,
      duration: '12-14 hours',
      price: 160,
      from: 'Samarkand',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Day Trips in Uzbekistan - Perfect Single-Day Adventures | JamTrips</title>
        <meta name="description" content="Explore Uzbekistan's treasures in a day. Private day trips to Samarkand, Seven Lakes, Bukhara, and more with expert guides." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('dayTrips.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('dayTrips.subtitle')}
            </p>
          </div>
        </section>

        {/* Trips Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-card rounded-lg shadow-soft overflow-hidden hover:shadow-elevated transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        {language === 'en' ? 'Day Trip' : 'Однодневный'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {trip.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {trip.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{language === 'en' ? 'From' : 'Из'} {trip.from}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">{t('tours.from')}</span>
                        <p className="text-xl font-bold text-foreground">${trip.price}</p>
                      </div>
                      <Button variant="gold" size="sm" asChild>
                        <Link to="/contact">
                          {t('tours.bookNow')}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
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

export default DayTrips;
