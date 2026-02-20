import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ContactButtons from '@/components/common/ContactButtons';
import { 
  Clock, 
  Users, 
  Car, 
  Hotel, 
  Star, 
  Check, 
  X as XIcon,
  MapPin
} from 'lucide-react';

import sevenLakesImage from '@/assets/seven-lakes.jpg';

const Shakhrisabz: React.FC = () => {
  const { language } = useLanguage();

  const tours = [
    {
      id: 'shakhrisabz-highlights',
      name: language === 'en' ? 'Shakhrisabz Highlights Tour' : 'Обзорный тур по Шахрисабзу',
      duration: language === 'en' ? '1 Day' : '1 День',
      durationDetail: language === 'en' ? '5–7 hours' : '5–7 часов',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Included' : 'Включён',
      badge: language === 'en' ? 'Popular' : 'Популярный',
      badgeColor: 'bg-accent text-accent-foreground',
      highlights: [
        language === 'en' ? 'Ak-Saray Palace ruins' : 'Руины дворца Ак-Сарай',
        language === 'en' ? 'Dorut Tilavat complex' : 'Комплекс Дорут Тилават',
        language === 'en' ? 'Kok Gumbaz Mosque' : 'Мечеть Кок Гумбаз',
        language === 'en' ? 'Jahongir Mausoleum' : 'Мавзолей Джахонгира',
      ],
      description: language === 'en'
        ? 'Explore the birthplace of Amir Temur and discover the magnificent ruins of his legendary White Palace.'
        : 'Исследуйте родину Амира Темура и откройте величественные руины его легендарного Белого дворца.',
    },
    {
      id: 'shakhrisabz-samarkand',
      name: language === 'en' ? 'Shakhrisabz & Samarkand Combined' : 'Шахрисабз и Самарканд',
      duration: language === 'en' ? '2 Days' : '2 Дня',
      durationDetail: language === 'en' ? '2 days' : '2 дня',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Optional hotel assistance' : 'Помощь с отелем',
      badge: language === 'en' ? 'Best Value' : 'Лучшее предложение',
      badgeColor: 'bg-primary text-primary-foreground',
      highlights: [
        language === 'en' ? 'Full Shakhrisabz tour' : 'Полный тур по Шахрисабзу',
        language === 'en' ? 'Scenic mountain drive' : 'Живописная горная дорога',
        language === 'en' ? 'Samarkand highlights' : 'Достопримечательности Самарканда',
        language === 'en' ? 'UNESCO World Heritage sites' : 'Объекты ЮНЕСКО',
      ],
      description: language === 'en'
        ? 'Combine two UNESCO World Heritage cities in one memorable journey through Temur\'s legacy.'
        : 'Объедините два города Всемирного наследия ЮНЕСКО в одном незабываемом путешествии по наследию Темура.',
    },
    {
      id: 'shakhrisabz-experience',
      name: language === 'en' ? 'Shakhrisabz Cultural Immersion' : 'Культурное погружение в Шахрисабз',
      duration: language === 'en' ? '1 Day' : '1 День',
      durationDetail: language === 'en' ? '8–10 hours' : '8–10 часов',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Premium Experience' : 'Премиум опыт',
      badge: language === 'en' ? 'Premium' : 'Премиум',
      badgeColor: 'bg-primary text-primary-foreground',
      highlights: [
        language === 'en' ? 'All historical sites' : 'Все исторические места',
        language === 'en' ? 'Local craft workshops' : 'Мастерские ремесленников',
        language === 'en' ? 'Traditional lunch included' : 'Традиционный обед включён',
        language === 'en' ? 'Local market visit' : 'Посещение местного рынка',
      ],
      description: language === 'en'
        ? 'A full-day immersive experience exploring Shakhrisabz\'s history, culture, and local traditions.'
        : 'Полный день погружения в историю, культуру и местные традиции Шахрисабза.',
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
    language === 'en' ? 'History enthusiasts' : 'Любители истории',
    language === 'en' ? 'Architecture admirers' : 'Ценители архитектуры',
    language === 'en' ? 'Off-the-beaten-path travelers' : 'Путешественники вне проторенных троп',
  ];

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Shakhrisabz Tours - Birthplace of Amir Temur | JamTrips' : 'Туры по Шахрисабзу - Родина Амира Темура | JamTrips'}</title>
        <meta name="description" content={language === 'en' 
          ? 'Private guided tours in Shakhrisabz. Explore Ak-Saray Palace, UNESCO heritage sites, and the birthplace of Amir Temur with expert local guides.'
          : 'Частные экскурсии по Шахрисабзу. Исследуйте дворец Ак-Сарай, объекты ЮНЕСКО и родину Амира Темура с опытными местными гидами.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sevenLakesImage}
            alt="Shakhrisabz Ak-Saray Palace"
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
            {language === 'en' ? 'Shakhrisabz Tours' : 'Туры по Шахрисабзу'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {language === 'en' 
              ? 'Discover the birthplace of Amir Temur'
              : 'Откройте родину Амира Темура'}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              {language === 'en'
                ? 'Shakhrisabz, meaning "Green City," is a UNESCO World Heritage Site and the birthplace of the legendary conqueror Amir Temur (Tamerlane). Once intended to be the capital of his vast empire, the city still bears witness to his grand ambitions through the magnificent ruins of Ak-Saray Palace.'
                : 'Шахрисабз, что означает «Зелёный город», является объектом Всемирного наследия ЮНЕСКО и родиной легендарного завоевателя Амира Темура (Тамерлана). Когда-то предназначенный стать столицей его огромной империи, город до сих пор хранит свидетельства его грандиозных амбиций в величественных руинах дворца Ак-Сарай.'}
            </p>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'Our Shakhrisabz tours offer a journey into the heart of Timurid history, perfect for travelers seeking authentic historical experiences away from the main tourist routes.'
                : 'Наши туры по Шахрисабзу предлагают путешествие в сердце истории Тимуридов, идеально подходящее для путешественников, ищущих аутентичный исторический опыт вдали от главных туристических маршрутов.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Tours in Shakhrisabz' : 'Туры в Шахрисабзе'}
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
                      <p className="text-sm text-muted-foreground text-center">
                        {language === 'en' ? 'Book this tour:' : 'Забронировать:'}
                      </p>
                      <ContactButtons variant="vertical" size="sm" />
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
            {language === 'en' ? 'Ready to explore Shakhrisabz?' : 'Готовы исследовать Шахрисабз?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Let us create a personalized tour tailored to your schedule and interests.'
              : 'Позвольте нам создать персонализированный тур, адаптированный к вашему расписанию и интересам.'}
          </p>
          <ContactButtons variant="horizontal" />
        </div>
      </section>
    </Layout>
  );
};

export default Shakhrisabz;
