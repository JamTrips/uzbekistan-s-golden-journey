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
  Check, 
  X as XIcon,
  ArrowRight,
  MapPin
} from 'lucide-react';

import bukharaImage from '@/assets/bukhara.jpg';

const Bukhara: React.FC = () => {
  const { language } = useLanguage();

  const tours = [
    {
      id: 'bukhara-highlights',
      name: language === 'en' ? 'Bukhara Highlights Tour' : 'Обзорный тур по Бухаре',
      duration: language === 'en' ? '1 Day' : '1 День',
      durationDetail: language === 'en' ? '6–8 hours' : '6–8 часов',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Included' : 'Включён',
      badge: language === 'en' ? 'Best Seller' : 'Бестселлер',
      badgeColor: 'bg-accent text-accent-foreground',
      highlights: [
        language === 'en' ? 'Lyab-i Hauz Complex' : 'Комплекс Ляби-Хауз',
        language === 'en' ? 'Ark Fortress' : 'Крепость Арк',
        language === 'en' ? 'Kalyan Minaret' : 'Минарет Калян',
        language === 'en' ? 'Trading Domes' : 'Торговые купола',
      ],
      description: language === 'en'
        ? 'Explore the living museum of Bukhara with its 2,000+ years of history in one day.'
        : 'Исследуйте живой музей Бухары с более чем 2000-летней историей за один день.',
    },
    {
      id: 'bukhara-extended',
      name: language === 'en' ? 'Bukhara In-Depth Experience' : 'Углублённый тур по Бухаре',
      duration: language === 'en' ? '2 Days' : '2 Дня',
      durationDetail: language === 'en' ? '2 days' : '2 дня',
      tourType: language === 'en' ? 'Private' : 'Частный',
      transport: language === 'en' ? 'Included' : 'Включён',
      badge: null,
      highlights: [
        language === 'en' ? 'All major Bukhara landmarks' : 'Все главные достопримечательности',
        language === 'en' ? 'Ismail Samani Mausoleum' : 'Мавзолей Исмаила Самани',
        language === 'en' ? 'Traditional crafts workshops' : 'Мастерские традиционных ремёсел',
        language === 'en' ? 'Sunset at ancient walls' : 'Закат у древних стен',
      ],
      description: language === 'en'
        ? 'A comprehensive journey through the ancient streets and hidden corners of Bukhara.'
        : 'Полное путешествие по древним улицам и скрытым уголкам Бухары.',
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
        <title>{language === 'en' ? 'Bukhara Tours - Private Guided Tours | JamTrips' : 'Туры по Бухаре - Частные экскурсии | JamTrips'}</title>
        <meta name="description" content={language === 'en' 
          ? 'Private guided tours in Bukhara. Explore the living museum with over 2,000 years of history.'
          : 'Частные экскурсии по Бухаре. Исследуйте живой музей с более чем 2000-летней историей.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bukharaImage}
            alt="Bukhara"
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
            {language === 'en' ? 'Bukhara Tours' : 'Туры по Бухаре'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {language === 'en' 
              ? 'A living museum with over 2,000 years of history'
              : 'Живой музей с более чем 2000-летней историей'}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              {language === 'en'
                ? 'Bukhara is one of the best-preserved examples of a medieval Central Asian city. Walk through preserved old streets, ancient mosques, and historic trading domes that have witnessed centuries of Silk Road commerce.'
                : 'Бухара — один из лучше всего сохранившихся примеров средневекового центральноазиатского города. Прогуляйтесь по сохранившимся старым улицам, древним мечетям и историческим торговым куполам, которые были свидетелями веков торговли на Шёлковом пути.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Tours in Bukhara' : 'Туры в Бухаре'}
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
                          <Car className="w-4 h-4 text-accent" />
                          <span>{tour.transport}</span>
                        </div>
                      </div>

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
            <div className="grid md:grid-cols-3 gap-8">
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
            {language === 'en' ? 'Ready to explore Bukhara?' : 'Готовы исследовать Бухару?'}
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

export default Bukhara;
