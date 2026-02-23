import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ContactButtons from '@/components/common/ContactButtons';
import { 
  Clock, 
  Users, 
  Car, 
  Check, 
  X as XIcon,
  MapPin,
  Footprints,
  Globe,
  Navigation
} from 'lucide-react';

import bukharaImage from '@/assets/bukhara.jpg';

interface Tour {
  id: string;
  title: string;
  route: string;
  tourType: string;
  tourTypeIcon: 'car' | 'walking';
  duration: string;
  startTime: string;
  description: string;
  program: string[];
  included: string[];
  notIncluded: string[];
  languages: string;
  groupType: string;
  meetingPoint: string;
  price: string;
}

const Bukhara: React.FC = () => {
  const { language } = useLanguage();

  const tours: Tour[] = [
    {
      id: 'bukhara-first-introduction',
      title: language === 'en' ? 'Bukhara — First Introduction' : 'Бухара — первое знакомство',
      route: language === 'en' ? 'Bukhara' : 'Бухара',
      tourType: language === 'en' ? 'Walking' : 'Пешая',
      tourTypeIcon: 'walking',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A walking overview tour of the main attractions of Bukhara. Get acquainted with historic ensembles, trading domes, and the fortress in one day.'
        : 'Пешая обзорная экскурсия по главным достопримечательностям Бухары. Знакомство с историческими ансамблями, торговыми куполами и крепостью за один день.',
      program: language === 'en'
        ? ['Lyabi-Hauz Ensemble', 'Trading domes', 'Lunch at a local teahouse', 'Kosh-Madrasa Complex', 'Poi-Kalon', 'Ark Fortress']
        : ['Ансамбль Лаби-Хауз', 'Торговые купола', 'Обед в местной чайхане', 'Комплекс Кош-Медресе', 'Пои-Калон', 'Крепость Арк'],
      included: language === 'en' ? ['Guide services'] : ['Услуги гида'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Meeting point by arrangement' : 'Место встречи по договорённости',
      price: language === 'en' ? 'from $120 for 1–3 pax' : 'от $120 за 1–3 чел.'
    },
    {
      id: 'bukhara-hidden-treasures',
      title: language === 'en' ? 'Bukhara — Day 2: Hidden Treasures of the City' : 'Бухара — второй день: скрытые сокровища города',
      route: language === 'en' ? 'Bukhara' : 'Бухара',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      tourTypeIcon: 'car',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A tour of the outskirts of Bukhara. Visit the emir\'s summer palace, a memorial complex, and the Chor-Minor madrasa.'
        : 'Экскурсия по загородным достопримечательностям Бухары. Посещение летнего дворца эмира, мемориального комплекса и медресе Чор-Минор.',
      program: language === 'en'
        ? ['Sitorai Mokhi-Khosa Palace', 'Bakhautdin Naqshbandi Memorial Complex', 'Chor-Minor Madrasa']
        : ['Дворец Ситораи Мохи-Хоса', 'Мемориальный комплекс Бахауддина Накшбанди', 'Медресе Чор-Минор'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, после экскурсии доставка обратно',
      price: language === 'en' ? 'from $160 for 1–2 pax' : 'от $160 за 1–2 чел.'
    },
    {
      id: 'bukhara-full-day',
      title: language === 'en' ? 'All the Best of Bukhara in One Day: City & Outskirts' : 'Всё главное о Бухаре за один день: город и пригороды',
      route: language === 'en' ? 'Bukhara' : 'Бухара',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      tourTypeIcon: 'car',
      duration: language === 'en' ? '6–7 hours' : '6–7 часов',
      startTime: language === 'en' ? 'Morning before 12:00' : 'Утром до 12:00',
      description: language === 'en'
        ? 'A complete tour of Bukhara in one day. Overview of the historic city center and a visit to suburban attractions.'
        : 'Полная экскурсия по Бухаре за один день. Обзор исторического центра города и посещение загородных достопримечательностей.',
      program: language === 'en'
        ? ['Lyabi-Hauz Complex', 'Poi-Kalon Ensemble', 'Ark Fortress', 'Lunch at a local teahouse', 'Samanid Mausoleum', 'Sitorai Mokhi-Khosa', 'Chor-Bakr']
        : ['Комплекс Лаби-Хауз', 'Ансамбль Пои-Калон', 'Крепость Арк', 'Обед в местной чайхане', 'Мавзолей Саманидов', 'Ситораи Мохи-Хоса', 'Чор-Бакр'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, после экскурсии доставка обратно',
      price: language === 'en' ? '$240 for 1–2 pax' : '$240 за 1–2 чел.'
    },
    {
      id: 'bukhara-morning-evening-walk',
      title: language === 'en' ? 'Evening or Morning Walk in Bukhara' : 'Вечерняя или утренняя прогулка по Бухаре',
      route: language === 'en' ? 'Bukhara' : 'Бухара',
      tourType: language === 'en' ? 'Walking' : 'Пешая',
      tourTypeIcon: 'walking',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Morning or evening' : 'Утром или вечером',
      description: language === 'en'
        ? 'A walking tour of the historic center of Bukhara with a professional guide. See the main attractions in the morning or evening.'
        : 'Пешая прогулка по историческому центру Бухары с профессиональным гидом. Осмотр главных достопримечательностей в утреннее или вечернее время.',
      program: language === 'en'
        ? ['Lyabi-Hauz Ensemble', 'Trading domes', 'Lunch at a local teahouse', 'Kosh-Madrasa Complex', 'Poi-Kalon', 'Ark Fortress']
        : ['Ансамбль Лаби-Хауз', 'Торговые купола', 'Обед в местной чайхане', 'Комплекс Кош-Медресе', 'Пои-Калон', 'Крепость Арк'],
      included: language === 'en' ? ['Guide services'] : ['Услуги гида'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Meeting point by arrangement' : 'Место встречи по договорённости',
      price: language === 'en' ? 'from $120 for 1–3 pax' : 'от $120 за 1–3 чел.'
    }
  ];

  const getTourIcon = (type: Tour['tourTypeIcon']) => {
    switch (type) {
      case 'walking':
        return <Footprints className="w-4 h-4" />;
      default:
        return <Car className="w-4 h-4" />;
    }
  };

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
              {language === 'en' ? 'Tours in Bukhara' : 'Экскурсии в Бухаре'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Choose from our carefully designed private tours'
                : 'Выберите из наших тщательно разработанных индивидуальных экскурсий'}
            </p>
          </div>

          <div className="grid gap-8">
            {tours.map((tour, index) => (
              <Card 
                key={tour.id} 
                className="border-2 border-border bg-card shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        {getTourIcon(tour.tourTypeIcon)}
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                        {tour.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-accent border-accent">
                        {tour.tourType}
                      </Badge>
                      <span className="font-bold text-lg text-accent">{tour.price}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground">{language === 'en' ? 'Route' : 'Маршрут'}</p>
                        <p className="text-sm md:text-base font-medium">{tour.route}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground">{language === 'en' ? 'Duration' : 'Длительность'}</p>
                        <p className="text-sm md:text-base font-medium">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground">{language === 'en' ? 'Languages' : 'Языки'}</p>
                        <p className="text-sm md:text-base font-medium">{tour.languages}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground">{language === 'en' ? 'Group' : 'Группа'}</p>
                        <p className="text-sm md:text-base font-medium">{language === 'en' ? 'Private' : 'Индивидуальная'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-muted-foreground mb-6">{tour.description}</p>

                  {/* Program */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-base md:text-lg text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {language === 'en' ? 'Program' : 'Программа'}
                    </h4>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <ol className="space-y-3">
                        {tour.program.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs md:text-sm font-bold">
                              {i + 1}
                            </span>
                            <span className="text-foreground pt-0.5 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Included / Not Included / Meeting Point */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        {language === 'en' ? "What's Included" : 'Включено'}
                      </h4>
                      <ul className="space-y-2">
                        {tour.included.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                            <Check className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                      <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                        <XIcon className="w-4 h-4 text-destructive" />
                        {language === 'en' ? 'Not Included' : 'Не включено'}
                      </h4>
                      <ul className="space-y-2">
                        {tour.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                            <XIcon className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Meeting Point' : 'Место встречи'}
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground">{tour.meetingPoint}</p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center mb-3">
                      {language === 'en' ? 'Book this tour:' : 'Забронировать:'}
                    </p>
                    <ContactButtons variant="horizontal" />
                  </div>
                </CardContent>
              </Card>
            ))}
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
          <ContactButtons variant="horizontal" />
        </div>
      </section>
    </Layout>
  );
};

export default Bukhara;
