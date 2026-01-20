import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Users, 
  Car, 
  Hotel, 
  Star, 
  Check, 
  X as XIcon,
  ArrowRight,
  MapPin
} from 'lucide-react';

import heroRegistanImage from '@/assets/hero-registan.jpg';

const Samarkand: React.FC = () => {
  const { language } = useLanguage();

  const tours = [
    {
      id: 'samarkand-highlights',
      name: language === 'en' ? 'Samarkand Highlights Tour' : 'Обзорный тур по Самарканду',
      duration: language === 'en' ? '1 Day' : '1 День',
      durationDetail: language === 'en' ? '6–8 hours' : '6–8 часов',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Included' : 'Включён',
      badge: language === 'en' ? 'Best Seller' : 'Бестселлер',
      badgeColor: 'bg-accent text-accent-foreground',
      highlights: [
        language === 'en' ? 'Registan Square' : 'Площадь Регистан',
        language === 'en' ? 'Bibi-Khanym Mosque' : 'Мечеть Биби-Ханым',
        language === 'en' ? 'Shah-i-Zinda Necropolis' : 'Некрополь Шахи-Зинда',
        language === 'en' ? 'Gur-e-Amir Mausoleum' : 'Мавзолей Гур-Эмир',
      ],
      description: language === 'en'
        ? 'Perfect for travelers with limited time who want to see the most important sights in one day.'
        : 'Идеально для путешественников с ограниченным временем, желающих увидеть главные достопримечательности за один день.',
    },
    {
      id: 'samarkand-cultural',
      name: language === 'en' ? 'Samarkand Cultural & Historical Tour' : 'Культурно-исторический тур по Самарканду',
      duration: language === 'en' ? '2 Days' : '2 Дня',
      durationDetail: language === 'en' ? '2 days' : '2 дня',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Optional hotel assistance' : 'Помощь с отелем',
      badge: null,
      highlights: [
        language === 'en' ? 'All major Samarkand landmarks' : 'Все главные достопримечательности',
        language === 'en' ? 'Ulugh Beg Observatory' : 'Обсерватория Улугбека',
        language === 'en' ? 'Local craft workshops' : 'Мастерские местных ремёсел',
        language === 'en' ? 'Traditional Uzbek cuisine experience' : 'Дегустация узбекской кухни',
      ],
      description: language === 'en'
        ? 'Ideal for travelers who want a deeper understanding of Samarkand\'s history and culture.'
        : 'Идеально для тех, кто хочет глубже понять историю и культуру Самарканда.',
    },
    {
      id: 'samarkand-experience',
      name: language === 'en' ? 'Samarkand & Surroundings Experience' : 'Самарканд и окрестности',
      duration: language === 'en' ? '3 Days' : '3 Дня',
      durationDetail: language === 'en' ? '3 days' : '3 дня',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Premium Experience' : 'Премиум опыт',
      badge: language === 'en' ? 'Premium' : 'Премиум',
      badgeColor: 'bg-primary text-primary-foreground',
      highlights: [
        language === 'en' ? 'Samarkand city tour' : 'Обзорный тур по городу',
        language === 'en' ? 'Day trip to nearby historical villages' : 'Поездка в исторические деревни',
        language === 'en' ? 'Local life and cultural immersion' : 'Погружение в местную культуру',
        language === 'en' ? 'Flexible itinerary' : 'Гибкий маршрут',
      ],
      description: language === 'en'
        ? 'Designed for guests seeking a relaxed pace and authentic experiences beyond the main attractions.'
        : 'Для гостей, ищущих размеренный темп и аутентичный опыт за пределами главных достопримечательностей.',
    },
  ];

  const included = [
    language === 'en' ? 'Professional local guide' : 'Профессиональный местный гид',
    language === 'en' ? 'Private transportation' : 'Частный транспорт',
    language === 'en' ? 'Entrance fees (where applicable)' : 'Входные билеты (где применимо)',
    language === 'en' ? 'Hotel pickup and drop-off' : 'Трансфер от/до отеля',
  ];

  const notIncluded = [
    language === 'en' ? 'Meals' : 'Питание',
    language === 'en' ? 'Personal expenses' : 'Личные расходы',
    language === 'en' ? 'Tips (optional)' : 'Чаевые (по желанию)',
  ];

  const whoFor = [
    language === 'en' ? 'First-time visitors' : 'Путешественники впервые',
    language === 'en' ? 'Couples and families' : 'Пары и семьи',
    language === 'en' ? 'Cultural and history enthusiasts' : 'Любители культуры и истории',
  ];

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Samarkand Tours - Private Guided Tours | JamTrips' : 'Туры по Самарканду - Частные экскурсии | JamTrips'}</title>
        <meta name="description" content={language === 'en' 
          ? 'Private guided tours in Samarkand. Discover Registan Square, Shah-i-Zinda, and more with expert local guides. Book your Samarkand tour today.'
          : 'Частные экскурсии по Самарканду. Откройте площадь Регистан, Шахи-Зинда и многое другое с опытными местными гидами.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroRegistanImage}
            alt="Samarkand Registan Square"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground/80 font-medium">
              {language === 'en' ? 'Uzbekistan' : 'Узбекистан'}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
            {language === 'en' ? 'Samarkand Tours' : 'Туры по Самарканду'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {language === 'en' 
              ? 'Discover the timeless beauty of the Silk Road'
              : 'Откройте вечную красоту Шёлкового пути'}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              {language === 'en'
                ? 'Samarkand is one of the oldest continuously inhabited cities in Central Asia and a true jewel of the Silk Road. From the magnificent Registan Square to the sacred Shah-i-Zinda complex, the city offers an unmatched blend of history, architecture, and atmosphere.'
                : 'Самарканд — один из древнейших непрерывно населённых городов Центральной Азии и настоящая жемчужина Шёлкового пути. От величественной площади Регистан до священного комплекса Шахи-Зинда город предлагает непревзойдённое сочетание истории, архитектуры и атмосферы.'}
            </p>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'Our Samarkand tours are ideal for first-time visitors, culture lovers, and travelers seeking an authentic and well-organized experience.'
                : 'Наши туры по Самарканду идеальны для тех, кто приезжает впервые, любителей культуры и путешественников, ищущих аутентичный и хорошо организованный опыт.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Tours in Samarkand' : 'Туры в Самарканде'}
            </h2>
          </div>

          <div className="space-y-8">
            {tours.map((tour, index) => (
              <Card 
                key={tour.id} 
                className="overflow-hidden border-border/50 shadow-soft hover:shadow-elevated transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Tour Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                          {tour.name}
                        </h3>
                        {tour.badge && (
                          <Badge className={tour.badgeColor}>
                            {tour.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Tour Meta */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <span>{language === 'en' ? 'Duration:' : 'Длительность:'} {tour.durationDetail}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          <span>{language === 'en' ? 'Tour Type:' : 'Тип тура:'} {tour.tourType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {tour.transport.includes('hotel') || tour.transport.includes('отел') ? (
                            <Hotel className="w-4 h-4 text-accent" />
                          ) : tour.transport.includes('Premium') || tour.transport.includes('Премиум') ? (
                            <Star className="w-4 h-4 text-accent" />
                          ) : (
                            <Car className="w-4 h-4 text-accent" />
                          )}
                          <span>{tour.transport}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-3">
                          {language === 'en' ? 'Highlights' : 'Основные места'}
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {tour.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-accent flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {tour.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <Button variant="gold" className="w-full" asChild>
                        <Link to="/contact">
                          {language === 'en' ? 'Book / Enquire' : 'Забронировать'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        {language === 'en' ? 'View Details' : 'Подробнее'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {language === 'en' ? 'Tour Overview' : 'Обзор туров'}
            </h2>
            
            <p className="text-muted-foreground text-center mb-12">
              {language === 'en'
                ? 'This private tour offers a carefully planned itinerary covering the most important sights while allowing flexibility and comfort throughout the day.'
                : 'Этот частный тур предлагает тщательно спланированный маршрут, охватывающий важнейшие достопримечательности, с гибкостью и комфортом на протяжении всего дня.'}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* What's Included */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    {language === 'en' ? "What's Included" : 'Включено'}
                  </h3>
                  <ul className="space-y-3">
                    {included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Not Included */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <XIcon className="w-5 h-5 text-destructive" />
                    {language === 'en' ? 'Not Included' : 'Не включено'}
                  </h3>
                  <ul className="space-y-3">
                    {notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XIcon className="w-4 h-4 text-destructive/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Who This Tour Is For */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    {language === 'en' ? 'Who This Tour Is For' : 'Для кого этот тур'}
                  </h3>
                  <ul className="space-y-3">
                    {whoFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Ready to explore Samarkand?' : 'Готовы исследовать Самарканд?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Let us create a personalized tour tailored to your schedule and interests.'
              : 'Позвольте нам создать персональный тур, адаптированный под ваше расписание и интересы.'}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              {language === 'en' ? 'Request This Tour' : 'Заказать этот тур'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Samarkand;
