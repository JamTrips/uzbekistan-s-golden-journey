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
  MapPin,
  Globe,
  DollarSign,
  Footprints,
  Train
} from 'lucide-react';

import heroRegistanImage from '@/assets/hero-registan.jpg';

interface Tour {
  id: string;
  title: string;
  route: string;
  tourType: string;
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
  badge?: string;
  badgeColor?: string;
}

const Samarkand: React.FC = () => {
  const { language } = useLanguage();

  const tours: Tour[] = [
    {
      id: 'samarkand-first-introduction',
      title: 'Самарканд — первое знакомство',
      route: 'Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'В любое удобное время',
      description: 'Обзорная экскурсия по главным достопримечательностям Самарканда. Включает посещение основных исторических памятников и местного базара.',
      program: [
        'Мавзолей Гур-Эмир',
        'Некрополь Шахи-Зинда',
        'Площадь Регистан',
        'Обед в чайхане (плов)',
        'Сиабский базар',
        'Мечеть Биби-Ханым (внешний осмотр)'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Подъезд к вашему адресу, возврат после экскурсии',
      price: 'от $150 за 1–2 чел.',
      badge: 'Популярный',
      badgeColor: 'bg-accent text-accent-foreground'
    },
    {
      id: 'samarkand-second-day',
      title: 'Самарканд — второй день: тайны и ремёсла',
      route: 'Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'В любое удобное время',
      description: 'Экскурсия для тех, кто хочет узнать Самарканд глубже. Посещение ремесленных мастерских, древнего городища и обсерватории.',
      program: [
        'Фабрика шёлковых ковров',
        'Деревня ремесленников Конигил',
        'Обед в местной чайхане (национальные блюда)',
        'Городище Афросиаб и музей',
        'Могила святого Даниила',
        'Обсерватория Мирзо Улугбека'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Подъезд к вашему адресу, возврат после экскурсии',
      price: 'от $150 за 1–2 чел.'
    },
    {
      id: 'samarkand-walking',
      title: 'Пешком по самаркандским улочкам',
      route: 'Самарканд',
      tourType: 'Пешая',
      duration: '4–5 часов',
      startTime: 'В любое время дня',
      description: 'Пешеходная экскурсия по историческому центру Самарканда. Возможность неспешно осмотреть достопримечательности и почувствовать атмосферу города.',
      program: [
        'Мавзолей Гур-Эмир',
        'Площадь Регистан',
        'Обед в местной чайхане',
        'Мечеть Биби-Ханым',
        'Сиабский базар',
        'Некрополь Шахи-Зинда'
      ],
      included: ['Услуги гида'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'У памятника Амиру Темуру',
      price: 'от $120 за 1–3 чел.'
    },
    {
      id: 'samarkand-morning-evening',
      title: 'Утренняя или вечерняя экскурсия по Самарканду',
      route: 'Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'В любое удобное время',
      description: 'Обзорная экскурсия по историческому центру Самарканда в утреннее или вечернее время. Удобный формат для планирования дня.',
      program: [
        'Мавзолей Гур-Эмир',
        'Площадь Регистан',
        'Обед в местной чайхане',
        'Мечеть Биби-Ханым',
        'Сиабский базар',
        'Некрополь Шахи-Зинда'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес, возврат после экскурсии',
      price: 'от $150 за 1–2 чел.'
    },
    {
      id: 'urgut-chor-chinor',
      title: 'Из Самарканда в Ургут: сад Чор-Чинор и базар',
      route: 'Самарканд — Ургут — Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'В любое время до 14:00',
      description: 'Поездка в Ургут с посещением колоритного базара и древнего сада с тысячелетними чинарами. Возможность для медитации в уникальной атмосфере.',
      program: [
        'Большой базар Ургута',
        'Главная мечеть Ургута',
        'Сад Чор-Чинор, святой родник, маленькое медресе в дупле чинары'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес, возврат после экскурсии',
      price: 'от $160 за 1–2 чел.'
    },
    {
      id: 'kitab-pass',
      title: 'Китабский перевал: горы, сады и тандыр',
      route: 'Самарканд — Китабский перевал — Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'В любое время до 14:00',
      description: 'Путешествие по живописным местам Узбекистана с посещением горных перевалов, фруктовых садов и дегустацией баранины из тандыра.',
      program: [
        'Скальные породы причудливой формы',
        'Марсианские пейзажи',
        'Камень-сердце',
        'Базар на перевале',
        'Плато дьявола',
        'Обед в чайхане (баранина из тандыра)'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $170 за 1–2 чел.'
    },
    {
      id: 'bukhara-by-train',
      title: 'Бухара на поезде за один день',
      route: 'Самарканд — Бухара — Самарканд',
      tourType: 'Пешая',
      duration: '08:31 выезд — возврат 18:00 или 19:13',
      startTime: '08:31 — поезд «Афросиаб»',
      description: 'Однодневная поездка в Бухару на скоростном поезде. Пешеходная экскурсия по историческому центру с осмотром главных достопримечательностей.',
      program: [
        'Ляби-Хауз',
        'Комплекс Пои-Калон',
        'Обед в местной чайхане',
        'Медресе Улугбека и Абдулазизхана',
        'Крепость Арк',
        'Мечеть Маггоки-Аттори'
      ],
      included: ['Услуги гида', 'Встреча на вокзале Бухары', 'Билеты на поезда'],
      notIncluded: ['Питание', 'Входные билеты на памятники'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Вокзал Бухары (гид встречает с табличкой)',
      price: 'от $150 за 1 чел.',
      badge: 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'seven-lakes-tajikistan',
      title: 'Маргузорские озёра и Фанские горы (Таджикистан)',
      route: 'Самарканд — Пенджикент — Самарканд',
      tourType: 'Авто + пешая',
      duration: '7–8 часов',
      startTime: 'До 10:00',
      description: 'Однодневное путешествие в Таджикистан к живописным Маргузорским озёрам в Фанских горах. Виза для многих стран не требуется (уточняйте).',
      program: [
        'Озеро Мижгон',
        'Озеро Сою',
        'Озеро Хушёр',
        'Озеро Нофин',
        'Озеро Хурдак',
        'Озеро Маргузор',
        'Озеро Хазорчашм',
        'Пикник в горах'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $300 за 1–2 чел.'
    },
    {
      id: 'boysun-derbend',
      title: 'Красные каньоны Бойсуна и Дербендские теснины',
      route: 'Самарканд — Бойсун — Дербенд — Самарканд',
      tourType: 'Авто + пешая',
      duration: '12–15 часов',
      startTime: 'Выезд в 01:00 (ночной поезд)',
      description: 'Путешествие к красным каньонам Бойсуна и ущелью Дербенда на поездах. Выезд ночным поездом, возврат вечером.',
      program: [
        'Завтрак в местной чайхане',
        'Красные каньоны Бойсуна (Кызыл)',
        'Обед в местной чайхане',
        'Кишлак Сайроб с тысячелетними чинарами',
        'Ущелье Дербенда'
      ],
      included: ['Услуги гида', 'Автотранспорт', 'Билеты на поезда'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Вокзал Бойсуна',
      price: 'от $400 за 1–2 чел.',
      badge: 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'tashkent-by-train',
      title: 'Ташкент на поезде за один день',
      route: 'Самарканд — Ташкент — Самарканд',
      tourType: 'Авто + пешая',
      duration: '10 часов',
      startTime: 'Утро',
      description: 'Однодневная поездка в столицу Узбекистана на скоростном поезде. Обзорная экскурсия по главным достопримечательностям Ташкента.',
      program: [
        'Комплекс Хаст-Имам',
        'Базар Чорсу',
        'Ташкент-Сити',
        'Станции метро Ташкента'
      ],
      included: ['Услуги гида', 'Автотранспорт', 'Билеты на поезда'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Вокзал Ташкента',
      price: 'от $150 за 1 чел.',
      badge: 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'iskanderkul',
      title: 'Озеро Искандеркуль (Таджикистан)',
      route: 'Самарканд — Пенджикент — Самарканд',
      tourType: 'Авто + пешая',
      duration: 'Целый день',
      startTime: 'Утро',
      description: 'Путешествие к загадочному горному озеру Искандеркуль в Таджикистане. Виза для многих стран не требуется (уточняйте).',
      program: [
        'Фанские горы',
        'Горные кишлаки',
        'Водопад',
        'Змеиное озеро',
        'Озеро Искандеркуль'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $350 за 1–2 чел.'
    },
    {
      id: 'hazrat-davud',
      title: 'Пещера святого Хазрата Дауда',
      route: 'Самарканд — Аксай — Самарканд',
      tourType: 'Авто + пешая',
      duration: '4–5 часов',
      startTime: 'До 10:00',
      description: 'Паломническое путешествие к священной пещере Давида в горах близ Самарканда.',
      program: [
        'Село Аксай',
        'Место борьбы Голиафа с Давидом',
        'Священная пещера Давида'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $160 за 1–2 чел.'
    },
    {
      id: 'shakhrisabz-day',
      title: 'Шахрисабз за один день',
      route: 'Самарканд — Шахрисабз — Самарканд',
      tourType: 'Авто + пешая',
      duration: '6–7 часов',
      startTime: 'До 10:00',
      description: 'Поездка на родину Амира Темура через живописный Китабский перевал. Осмотр исторических памятников и обед с мясом из тандыра.',
      program: [
        'Горный Китабский перевал',
        'Место съёмок фильма «Чингачгук»',
        'Дворец Ак-Сарай',
        'Комплекс Дору-т-Тиловат',
        'Комплекс Дору-с-Саодат',
        'Обед в горной чайхане (тандыр-гушт)'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $180 за 1–2 чел.'
    },
    {
      id: 'zaamin-reserve',
      title: 'Зааминский заповедник — «узбекская Швейцария»',
      route: 'Самарканд — Джизак — Заамин — Самарканд',
      tourType: 'Авто + пешая',
      duration: '7–8 часов',
      startTime: 'До 09:00',
      description: 'Путешествие в Зааминский национальный парк с горными пейзажами, каньонами и современной инфраструктурой.',
      program: [
        'Зааминское водохранилище',
        'Тысячелетняя арча',
        'Каньон Чортанга',
        'Шербулок',
        'Стеклянный мост',
        'Фуникулёры'
      ],
      included: ['Услуги гида', 'Автотранспорт'],
      notIncluded: ['Питание'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $300 за 1–2 чел.'
    },
    {
      id: 'aydarkul-yurts',
      title: 'Пустыня Кызылкум и озеро Айдаркуль с ночёвкой',
      route: 'Самарканд — Нурата — Айдаркуль — Самарканд (или Бухара)',
      tourType: 'Авто + пешая',
      duration: '48 часов (2 дня)',
      startTime: 'В любое время',
      description: 'Двухдневное путешествие в пустыню с ночёвкой в юртовом лагере. Катание на верблюдах, закат в пустыне и посещение озера Айдаркуль.',
      program: [
        'Городок Нурата',
        'Руины крепости Александра Македонского',
        'Обед в местной чайхане',
        'Катание на верблюдах в пустыне',
        'Встреча заката в пустыне',
        'Фольклорный концерт',
        'Костёр и дискотека',
        'Озеро Айдаркуль'
      ],
      included: ['Услуги гида', 'Автотранспорт', 'Проживание в юртах (1 ночь)', 'Завтрак и ужин'],
      notIncluded: ['Личные расходы', 'Катание на верблюдах'],
      languages: 'Любой язык',
      groupType: 'Индивидуальная (только ваша группа)',
      meetingPoint: 'Ваш адрес',
      price: 'от $500 за 1–2 чел.',
      badge: 'С ночёвкой',
      badgeColor: 'bg-accent text-accent-foreground'
    }
  ];

  const getTourTypeIcon = (tourType: string) => {
    if (tourType.includes('Пешая') && !tourType.includes('Авто')) {
      return <Footprints className="w-4 h-4 text-accent" />;
    }
    return <Car className="w-4 h-4 text-accent" />;
  };

  return (
    <Layout>
      <Helmet>
        <title>Туры по Самарканду — Частные экскурсии | JamTrips</title>
        <meta name="description" content="Частные экскурсии по Самарканду и окрестностям. Площадь Регистан, Шахи-Зинда, Фанские горы, Шахрисабз и многое другое. Индивидуальные туры с гидом." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroRegistanImage}
            alt="Площадь Регистан в Самарканде"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground/80 font-medium">Узбекистан</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Туры по Самарканду
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Откройте вечную красоту Шёлкового пути
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Самарканд — один из древнейших городов Центральной Азии и жемчужина Шёлкового пути. От величественной площади Регистан до священного комплекса Шахи-Зинда город предлагает сочетание истории, архитектуры и атмосферы.
            </p>
            <p className="text-muted-foreground">
              Все экскурсии индивидуальные, проводятся на любом языке. Мы подъедем к вашему адресу и вернём после экскурсии.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Экскурсии из Самарканда
            </h2>
            <p className="text-muted-foreground">
              {tours.length} экскурсий на любой вкус
            </p>
          </div>

          <div className="grid gap-8">
            {tours.map((tour, index) => (
              <Card 
                key={tour.id} 
                className="overflow-hidden border-2 border-border bg-card shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 animate-fade-up rounded-xl"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Card Header with Badge */}
                <div className="bg-secondary/50 px-6 py-4 border-b border-border flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {tour.badge && (
                      <Badge className={`${tour.badgeColor} px-3 py-1`}>
                        {tour.badge}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span className="font-bold text-foreground">{tour.price}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    {/* Description & Meta */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4">
                          {tour.description}
                        </p>

                        {/* Tour Meta Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground truncate">{tour.route}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            {getTourTypeIcon(tour.tourType)}
                            <span className="text-sm text-foreground">{tour.tourType}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{tour.languages}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg col-span-2 md:col-span-1">
                            <Users className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground truncate">{tour.groupType}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program */}
                    <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        Программа
                      </h4>
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {tour.program.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground bg-background px-3 py-2 rounded-lg border border-border/30">
                            <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-accent">{i + 1}</span>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Included */}
                      <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          Включено
                        </h4>
                        <ul className="space-y-2">
                          {tour.included.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Not Included */}
                      <div className="bg-destructive/5 rounded-xl p-4 border border-destructive/20">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center">
                            <XIcon className="w-3 h-3 text-destructive" />
                          </div>
                          Не включено
                        </h4>
                        <ul className="space-y-2">
                          {tour.notIncluded.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <XIcon className="w-3 h-3 text-destructive mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meeting Point */}
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                            <MapPin className="w-3 h-3 text-primary" />
                          </div>
                          Место встречи
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">{tour.meetingPoint}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">Старт: {tour.startTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center pt-2">
                      <Button variant="gold" size="lg" className="min-w-[200px]" asChild>
                        <Link to="/contact">
                          Забронировать
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
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
            Готовы исследовать Самарканд?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами, чтобы забронировать экскурсию или получить консультацию по выбору маршрута.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Связаться с нами
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Samarkand;
