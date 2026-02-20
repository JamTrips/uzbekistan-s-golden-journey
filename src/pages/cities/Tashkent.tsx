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
  Train,
  Plane,
  Globe,
  Navigation
} from 'lucide-react';

import tashkentImage from '@/assets/tashkent.jpg';

interface Tour {
  id: string;
  title: string;
  route: string;
  tourType: string;
  tourTypeIcon: 'car' | 'walking' | 'train' | 'plane';
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

const Tashkent: React.FC = () => {
  const { language } = useLanguage();

  const tours: Tour[] = [
    {
      id: 'tashkent-first-introduction',
      title: language === 'en' ? 'Tashkent — First Introduction to the City' : 'Ташкент — первое знакомство с городом',
      route: language === 'en' ? 'Tashkent' : 'Ташкент',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      tourTypeIcon: 'car',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A sightseeing tour of the main attractions of the capital of Uzbekistan. Explore the historic center, bazaars, and modern architecture of the city.'
        : 'Обзорная экскурсия по основным достопримечательностям столицы Узбекистана. Знакомство с историческим центром, базарами и современной архитектурой города.',
      program: language === 'en'
        ? ['Khazrati Imam Square', 'Tashkent Metro', 'Amir Temur Square', 'Besh Kazan Plov Center', 'Romanov Palace', 'Chorsu Bazaar']
        : ['Площадь Хазрати Имам', 'Метро Ташкента', 'Сквер Амира Темура', 'Центр плова «Беш Казан»', 'Дворец Романовых', 'Главный базар «Чорсу»'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, после экскурсии доставка обратно',
      price: language === 'en' ? 'from $160 for 1–2 pax' : 'от $160 за 1–2 чел.'
    },
    {
      id: 'sun-institute-chimgan',
      title: language === 'en' ? 'Sun Institute & Chimgan Mountains' : 'В Институт Солнца и горы Чимган',
      route: language === 'en' ? 'Tashkent — Chimgan — Tashkent' : 'Ташкент — Чимган — Ташкент',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      tourTypeIcon: 'car',
      duration: language === 'en' ? '5–7 hours' : '5–7 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A day trip from Tashkent to the Chimgan mountains. Visit the scientific Sun Institute, a scenic reservoir, and take a cable car ride.'
        : 'Однодневное путешествие из Ташкента к горам Чимган. Посещение научного Института Солнца, живописного водохранилища и подъём на канатной дороге.',
      program: language === 'en'
        ? ['Sun Institute', 'Chimgan Mountains', 'Charvak Reservoir', 'Cable car']
        : ['Институт Солнца', 'Чимганские горы', 'Водохранилище Чарвак', 'Канатная дорога'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, после экскурсии доставка обратно',
      price: language === 'en' ? 'from $220 for 1–2 pax' : 'от $220 за 1–2 чел.'
    },
    {
      id: 'tian-shan-mountains',
      title: language === 'en' ? 'Tian-Shan Mountains from Tashkent in One Day' : 'К горам Тянь-Шаня из Ташкента за один день',
      route: language === 'en' ? 'Tashkent — Tian-Shan — Tashkent' : 'Ташкент — Тянь-Шань — Ташкент',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      tourTypeIcon: 'car',
      duration: language === 'en' ? '4–6 hours' : '4–6 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A day trip to the scenic Tian-Shan mountains. Visit the ski resort, historic village, and reservoir.'
        : 'Однодневная экскурсия к живописным горам Тянь-Шаня. Посещение горнолыжного курорта, исторического посёлка и водохранилища.',
      program: language === 'en'
        ? ['Amirsoy Ski Resort', 'Brichmulla Village', 'Charvak Reservoir', 'Ancient plane tree grove', 'Amirsoy']
        : ['Горнолыжный курорт Амирсай', 'Посёлок Бричмулла', 'Чарвакское водохранилище', 'Роща из вековых чинар', 'Амирсой'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, после экскурсии доставка обратно',
      price: language === 'en' ? 'from $180 for 1–2 pax' : 'от $180 за 1–2 чел.'
    },
    {
      id: 'tashkent-samarkand-train',
      title: language === 'en' ? 'Tashkent to Samarkand by High-Speed Train' : 'Из Ташкента в Самарканд на скоростном поезде',
      route: language === 'en' ? 'Tashkent — Samarkand — Tashkent' : 'Ташкент — Самарканд — Ташкент',
      tourType: language === 'en' ? 'Car + Walking + Train' : 'Авто + пешая + поезд',
      tourTypeIcon: 'train',
      duration: language === 'en' ? 'Full day' : 'Целый день',
      startTime: language === 'en' ? 'Morning (approx. 08:00)' : 'Утро (ориентировочно 08:00)',
      description: language === 'en'
        ? 'A day trip from Tashkent to Samarkand on the Afrosiyab high-speed train. Sightseeing tour of the main attractions of the ancient city with return in the evening.'
        : 'Однодневная поездка из Ташкента в Самарканд на скоростном поезде «Афросияб». Обзорная экскурсия по главным достопримечательностям древнего города с возвращением вечером.',
      program: language === 'en'
        ? ['Gur-Emir Mausoleum', 'Registan Square', 'Lunch at a local teahouse', 'Bibi-Khanym Mosque', 'Bazaar', 'Shah-i-Zinda Necropolis']
        : ['Гур Эмир', 'Регистан', 'Обед в местной чайхане', 'Биби Ханым', 'Базар', 'Шахи-Зинда'],
      included: language === 'en' ? ['Guide services', 'Transportation', 'Train tickets'] : ['Услуги гида', 'Автотранспорт', 'Билеты на поезда'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en'
        ? 'Meet at Tashkent North Station, guide meets you at Samarkand station. Train schedule can be arranged on request.'
        : 'Сбор на Северном вокзале Ташкента, встреча гида на вокзале Самарканда. График поездов можно подобрать по запросу.',
      price: language === 'en' ? 'from $160 per person' : 'от $160 за чел.'
    },
    {
      id: 'tashkent-bukhara-flight',
      title: language === 'en' ? 'Tashkent to Bukhara by Plane' : 'Из Ташкента в Бухару самолётом',
      route: language === 'en' ? 'Tashkent — Bukhara — Tashkent' : 'Ташкент — Бухара — Ташкент',
      tourType: language === 'en' ? 'Car + Walking + Plane + Train' : 'Авто + пешая + самолёт + поезд',
      tourTypeIcon: 'plane',
      duration: language === 'en' ? 'Full day' : 'Целый день',
      startTime: language === 'en' ? '07:30 (departure)' : '07:30 (вылет)',
      description: language === 'en'
        ? 'A day excursion to Bukhara with morning flight and return by train in the evening. Overview of the main historical monuments of the ancient city.'
        : 'Однодневная экскурсия в Бухару с перелётом утром и возвращением на поезде вечером. Обзор основных исторических памятников древнего города.',
      program: language === 'en'
        ? ['Lyabi-Hauz Complex', 'Magoki-Attori Mosque', 'Khoja Nasreddin Monument', 'Poi-Kalon Ensemble', 'Ark Fortress']
        : ['Комплекс Ляби-Хауз', 'Мечеть Магоки-Аттори', 'Памятник Ходже Насреддину', 'Ансамбль Пои-Калон', 'Крепость Арк'],
      included: language === 'en' ? ['Guide services', 'Transportation', 'Train tickets', 'Flight ticket'] : ['Услуги гида', 'Автотранспорт', 'Билеты на поезда', 'Авиабилет'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en'
        ? 'Guide meets at Bukhara Airport. Schedule: 07:30 departure from Tashkent, 09:00 arrival, 15:30 train back, 19:45 arrival in Tashkent.'
        : 'Встреча гида в аэропорту Бухары. Расписание: 07:30 вылет из Ташкента, 09:00 прибытие, 15:30 поезд обратно, 19:45 прибытие в Ташкент.',
      price: language === 'en' ? 'from $250 per person' : 'от $250 за чел.'
    }
  ];

  const getTourIcon = (type: Tour['tourTypeIcon']) => {
    switch (type) {
      case 'walking':
        return <Footprints className="w-4 h-4" />;
      case 'train':
        return <Train className="w-4 h-4" />;
      case 'plane':
        return <Plane className="w-4 h-4" />;
      default:
        return <Car className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Tashkent Tours - Private Guided Tours | JamTrips' : 'Туры по Ташкенту - Частные экскурсии | JamTrips'}</title>
        <meta name="description" content={language === 'en' 
          ? 'Private guided tours in Tashkent. Explore the modern capital of Uzbekistan with expert local guides.'
          : 'Частные экскурсии по Ташкенту. Исследуйте современную столицу Узбекистана с опытными местными гидами.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tashkentImage}
            alt="Tashkent"
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
            {language === 'en' ? 'Tashkent Tours' : 'Туры по Ташкенту'}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {language === 'en' 
              ? 'Where history meets contemporary life'
              : 'Где история встречается с современностью'}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              {language === 'en'
                ? 'Tashkent is the vibrant capital of Uzbekistan, a city where ancient madrasahs stand alongside Soviet-era monuments and modern skyscrapers. Explore lively bazaars, stunning metro stations, and experience the warm hospitality of the Uzbek people.'
                : 'Ташкент — яркая столица Узбекистана, город, где древние медресе соседствуют с советскими памятниками и современными небоскрёбами. Исследуйте оживлённые базары, потрясающие станции метро и ощутите тёплое гостеприимство узбекского народа.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Tours in Tashkent' : 'Экскурсии в Ташкенте'}
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
                        <p className="text-xs text-muted-foreground">{language === 'en' ? 'Route' : 'Маршрут'}</p>
                        <p className="text-sm font-medium">{tour.route}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">{language === 'en' ? 'Duration' : 'Длительность'}</p>
                        <p className="text-sm font-medium">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">{language === 'en' ? 'Languages' : 'Языки'}</p>
                        <p className="text-sm font-medium">{tour.languages}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">{language === 'en' ? 'Group' : 'Группа'}</p>
                        <p className="text-sm font-medium">{language === 'en' ? 'Private' : 'Индивидуальная'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{tour.description}</p>

                  {/* Program */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {language === 'en' ? 'Program' : 'Программа'}
                    </h4>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                      <ol className="space-y-2">
                        {tour.program.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                              {i + 1}
                            </span>
                            <span className="text-foreground pt-0.5">{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Included / Not Included / Meeting Point */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        {language === 'en' ? "What's Included" : 'Включено'}
                      </h4>
                      <ul className="space-y-2">
                        {tour.included.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-3 h-3 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <XIcon className="w-4 h-4 text-destructive" />
                        {language === 'en' ? 'Not Included' : 'Не включено'}
                      </h4>
                      <ul className="space-y-2">
                        {tour.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <XIcon className="w-3 h-3 text-destructive/70 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {language === 'en' ? 'Meeting Point' : 'Место встречи'}
                      </h4>
                      <p className="text-sm text-muted-foreground">{tour.meetingPoint}</p>
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
            {language === 'en' ? 'Ready to explore Tashkent?' : 'Готовы исследовать Ташкент?'}
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

export default Tashkent;
