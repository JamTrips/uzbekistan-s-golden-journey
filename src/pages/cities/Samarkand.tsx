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
      title: language === 'en' ? 'Samarkand — First Introduction' : 'Самарканд — первое знакомство',
      route: language === 'en' ? 'Samarkand' : 'Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A sightseeing tour of the main attractions of Samarkand. Includes visits to the main historical monuments and the local bazaar.'
        : 'Обзорная экскурсия по главным достопримечательностям Самарканда. Включает посещение основных исторических памятников и местного базара.',
      program: language === 'en'
        ? ['Gur-Emir Mausoleum', 'Shah-i-Zinda Necropolis', 'Registan Square', 'Lunch at a teahouse (plov)', 'Siyab Bazaar', 'Bibi-Khanym Mosque (exterior)']
        : ['Мавзолей Гур-Эмир', 'Некрополь Шахи-Зинда', 'Площадь Регистан', 'Обед в чайхане (плов)', 'Сиабский базар', 'Мечеть Биби-Ханым (внешний осмотр)'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, возврат после экскурсии',
      price: language === 'en' ? 'from $150 for 1–2 pax' : 'от $150 за 1–2 чел.',
      badge: language === 'en' ? 'Popular' : 'Популярный',
      badgeColor: 'bg-accent text-accent-foreground'
    },
    {
      id: 'samarkand-second-day',
      title: language === 'en' ? 'Samarkand — Day 2: Secrets & Crafts' : 'Самарканд — второй день: тайны и ремёсла',
      route: language === 'en' ? 'Samarkand' : 'Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A tour for those who want to discover Samarkand more deeply. Visit craft workshops, an ancient settlement, and an observatory.'
        : 'Экскурсия для тех, кто хочет узнать Самарканд глубже. Посещение ремесленных мастерских, древнего городища и обсерватории.',
      program: language === 'en'
        ? ['Silk carpet factory', 'Konigil craftsmen village', 'Lunch at a local teahouse', 'Afrasiab settlement & museum', 'Saint Daniel tomb', 'Ulugbek Observatory']
        : ['Фабрика шёлковых ковров', 'Деревня ремесленников Конигил', 'Обед в местной чайхане (национальные блюда)', 'Городище Афросиаб и музей', 'Могила святого Даниила', 'Обсерватория Мирзо Улугбека'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Pickup at your address, drop-off after the tour' : 'Подъезд к вашему адресу, возврат после экскурсии',
      price: language === 'en' ? 'from $150 for 1–2 pax' : 'от $150 за 1–2 чел.'
    },
    {
      id: 'samarkand-walking',
      title: language === 'en' ? 'Walking Through the Streets of Samarkand' : 'Пешком по самаркандским улочкам',
      route: language === 'en' ? 'Samarkand' : 'Самарканд',
      tourType: language === 'en' ? 'Walking' : 'Пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any time of day' : 'В любое время дня',
      description: language === 'en'
        ? 'A walking tour through the historic center of Samarkand. A chance to leisurely explore the sights and feel the atmosphere of the city.'
        : 'Пешеходная экскурсия по историческому центру Самарканда. Возможность неспешно осмотреть достопримечательности и почувствовать атмосферу города.',
      program: language === 'en'
        ? ['Gur-Emir Mausoleum', 'Registan Square', 'Lunch at a local teahouse', 'Bibi-Khanym Mosque', 'Siyab Bazaar', 'Shah-i-Zinda Necropolis']
        : ['Мавзолей Гур-Эмир', 'Площадь Регистан', 'Обед в местной чайхане', 'Мечеть Биби-Ханым', 'Сиабский базар', 'Некрополь Шахи-Зинда'],
      included: language === 'en' ? ['Guide services'] : ['Услуги гида'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'At the Amir Temur monument' : 'У памятника Амиру Темуру',
      price: language === 'en' ? 'from $120 for 1–3 pax' : 'от $120 за 1–3 чел.'
    },
    {
      id: 'samarkand-morning-evening',
      title: language === 'en' ? 'Morning or Evening Tour of Samarkand' : 'Утренняя или вечерняя экскурсия по Самарканду',
      route: language === 'en' ? 'Samarkand' : 'Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any convenient time' : 'В любое удобное время',
      description: language === 'en'
        ? 'A sightseeing tour of the historic center of Samarkand in the morning or evening. A convenient format for planning your day.'
        : 'Обзорная экскурсия по историческому центру Самарканда в утреннее или вечернее время. Удобный формат для планирования дня.',
      program: language === 'en'
        ? ['Gur-Emir Mausoleum', 'Registan Square', 'Lunch at a local teahouse', 'Bibi-Khanym Mosque', 'Siyab Bazaar', 'Shah-i-Zinda Necropolis']
        : ['Мавзолей Гур-Эмир', 'Площадь Регистан', 'Обед в местной чайхане', 'Мечеть Биби-Ханым', 'Сиабский базар', 'Некрополь Шахи-Зинда'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address, drop-off after the tour' : 'Ваш адрес, возврат после экскурсии',
      price: language === 'en' ? 'from $150 for 1–2 pax' : 'от $150 за 1–2 чел.'
    },
    {
      id: 'urgut-chor-chinor',
      title: language === 'en' ? 'From Samarkand to Urgut: Chor-Chinor Garden & Bazaar' : 'Из Самарканда в Ургут: сад Чор-Чинор и базар',
      route: language === 'en' ? 'Samarkand — Urgut — Samarkand' : 'Самарканд — Ургут — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any time before 14:00' : 'В любое время до 14:00',
      description: language === 'en'
        ? 'A trip to Urgut with a visit to the colorful bazaar and an ancient garden with thousand-year-old plane trees. A unique meditative atmosphere.'
        : 'Поездка в Ургут с посещением колоритного базара и древнего сада с тысячелетними чинарами. Возможность для медитации в уникальной атмосфере.',
      program: language === 'en'
        ? ['Urgut Grand Bazaar', 'Main mosque of Urgut', 'Chor-Chinor Garden, holy spring, small madrasa inside a plane tree hollow']
        : ['Большой базар Ургута', 'Главная мечеть Ургута', 'Сад Чор-Чинор, святой родник, маленькое медресе в дупле чинары'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address, drop-off after the tour' : 'Ваш адрес, возврат после экскурсии',
      price: language === 'en' ? 'from $160 for 1–2 pax' : 'от $160 за 1–2 чел.'
    },
    {
      id: 'kitab-pass',
      title: language === 'en' ? 'Kitab Pass: Mountains, Gardens & Tandoor' : 'Китабский перевал: горы, сады и тандыр',
      route: language === 'en' ? 'Samarkand — Kitab Pass — Samarkand' : 'Самарканд — Китабский перевал — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Any time before 14:00' : 'В любое время до 14:00',
      description: language === 'en'
        ? 'A journey through the scenic landscapes of Uzbekistan with mountain passes, orchards, and a taste of tandoor-cooked lamb.'
        : 'Путешествие по живописным местам Узбекистана с посещением горных перевалов, фруктовых садов и дегустацией баранины из тандыра.',
      program: language === 'en'
        ? ['Bizarrely shaped rock formations', 'Martian landscapes', 'Heart-shaped rock', 'Pass bazaar', 'Devil\'s Plateau', 'Lunch at teahouse (tandoor lamb)']
        : ['Скальные породы причудливой формы', 'Марсианские пейзажи', 'Камень-сердце', 'Базар на перевале', 'Плато дьявола', 'Обед в чайхане (баранина из тандыра)'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $170 for 1–2 pax' : 'от $170 за 1–2 чел.'
    },
    {
      id: 'bukhara-by-train',
      title: language === 'en' ? 'Bukhara by Train in One Day' : 'Бухара на поезде за один день',
      route: language === 'en' ? 'Samarkand — Bukhara — Samarkand' : 'Самарканд — Бухара — Самарканд',
      tourType: language === 'en' ? 'Walking' : 'Пешая',
      duration: language === 'en' ? '08:31 departure — return 18:00 or 19:13' : '08:31 выезд — возврат 18:00 или 19:13',
      startTime: language === 'en' ? '08:31 — Afrosiyab train' : '08:31 — поезд «Афросияб»',
      description: language === 'en'
        ? 'A day trip to Bukhara on the high-speed train. A walking tour of the historic center with the main sights.'
        : 'Однодневная поездка в Бухару на скоростном поезде. Пешеходная экскурсия по историческому центру с осмотром главных достопримечательностей.',
      program: language === 'en'
        ? ['Lyabi-Hauz', 'Poi-Kalon Complex', 'Lunch at a local teahouse', 'Ulugbek & Abdulaziz Khan madrasas', 'Ark Fortress', 'Magoki-Attori Mosque']
        : ['Ляби-Хауз', 'Комплекс Пои-Калон', 'Обед в местной чайхане', 'Медресе Улугбека и Абдулазизхана', 'Крепость Арк', 'Мечеть Маггоки-Аттори'],
      included: language === 'en' ? ['Guide services', 'Meet at Bukhara station', 'Train tickets'] : ['Услуги гида', 'Встреча на вокзале Бухары', 'Билеты на поезда'],
      notIncluded: language === 'en' ? ['Meals', 'Entrance fees'] : ['Питание', 'Входные билеты на памятники'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Bukhara station (guide meets with sign)' : 'Вокзал Бухары (гид встречает с табличкой)',
      price: language === 'en' ? 'from $150 per person' : 'от $150 за 1 чел.',
      badge: language === 'en' ? 'By Train' : 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'seven-lakes-tajikistan',
      title: language === 'en' ? 'Marguzor Lakes & Fann Mountains (Tajikistan)' : 'Маргузорские озёра и Фанские горы (Таджикистан)',
      route: language === 'en' ? 'Samarkand — Penjikent — Samarkand' : 'Самарканд — Пенджикент — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '7–8 hours' : '7–8 часов',
      startTime: language === 'en' ? 'Before 10:00' : 'До 10:00',
      description: language === 'en'
        ? 'A day trip to Tajikistan to the scenic Marguzor Lakes in the Fann Mountains. No visa required for many countries (check in advance).'
        : 'Однодневное путешествие в Таджикистан к живописным Маргузорским озёрам в Фанских горах. Виза для многих стран не требуется (уточняйте).',
      program: language === 'en'
        ? ['Mizhgon Lake', 'Soyu Lake', 'Khushor Lake', 'Nofin Lake', 'Khurdak Lake', 'Marguzor Lake', 'Hazorchashm Lake', 'Mountain picnic']
        : ['Озеро Мижгон', 'Озеро Сою', 'Озеро Хушёр', 'Озеро Нофин', 'Озеро Хурдак', 'Озеро Маргузор', 'Озеро Хазорчашм', 'Пикник в горах'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $300 for 1–2 pax' : 'от $300 за 1–2 чел.'
    },
    {
      id: 'boysun-derbend',
      title: language === 'en' ? 'Red Canyons of Boysun & Derbend Gorge' : 'Красные каньоны Бойсуна и Дербендские теснины',
      route: language === 'en' ? 'Samarkand — Boysun — Derbend — Samarkand' : 'Самарканд — Бойсун — Дербенд — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '12–15 hours' : '12–15 часов',
      startTime: language === 'en' ? 'Departure at 01:00 (night train)' : 'Выезд в 01:00 (ночной поезд)',
      description: language === 'en'
        ? 'A journey to the red canyons of Boysun and the Derbend gorge by train. Depart on a night train, return in the evening.'
        : 'Путешествие к красным каньонам Бойсуна и ущелью Дербенда на поездах. Выезд ночным поездом, возврат вечером.',
      program: language === 'en'
        ? ['Breakfast at a local teahouse', 'Boysun red canyons (Kyzyl)', 'Lunch at a local teahouse', 'Sayrob village with ancient plane trees', 'Derbend Gorge']
        : ['Завтрак в местной чайхане', 'Красные каньоны Бойсуна (Кызыл)', 'Обед в местной чайхане', 'Кишлак Сайроб с тысячелетними чинарами', 'Ущелье Дербенда'],
      included: language === 'en' ? ['Guide services', 'Transportation', 'Train tickets'] : ['Услуги гида', 'Автотранспорт', 'Билеты на поезда'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Boysun Station' : 'Вокзал Бойсуна',
      price: language === 'en' ? 'from $400 for 1–2 pax' : 'от $400 за 1–2 чел.',
      badge: language === 'en' ? 'By Train' : 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'tashkent-by-train',
      title: language === 'en' ? 'Tashkent by Train in One Day' : 'Ташкент на поезде за один день',
      route: language === 'en' ? 'Samarkand — Tashkent — Samarkand' : 'Самарканд — Ташкент — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '10 hours' : '10 часов',
      startTime: language === 'en' ? 'Morning' : 'Утро',
      description: language === 'en'
        ? 'A day trip to the capital of Uzbekistan on the high-speed train. A sightseeing tour of the main attractions of Tashkent.'
        : 'Однодневная поездка в столицу Узбекистана на скоростном поезде. Обзорная экскурсия по главным достопримечательностям Ташкента.',
      program: language === 'en'
        ? ['Khast Imam Complex', 'Chorsu Bazaar', 'Tashkent City', 'Tashkent Metro stations']
        : ['Комплекс Хаст-Имам', 'Базар Чорсу', 'Ташкент-Сити', 'Станции метро Ташкента'],
      included: language === 'en' ? ['Guide services', 'Transportation', 'Train tickets'] : ['Услуги гида', 'Автотранспорт', 'Билеты на поезда'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Tashkent Station' : 'Вокзал Ташкента',
      price: language === 'en' ? 'from $150 per person' : 'от $150 за 1 чел.',
      badge: language === 'en' ? 'By Train' : 'На поезде',
      badgeColor: 'bg-primary text-primary-foreground'
    },
    {
      id: 'iskanderkul',
      title: language === 'en' ? 'Iskanderkul Lake (Tajikistan)' : 'Озеро Искандеркуль (Таджикистан)',
      route: language === 'en' ? 'Samarkand — Penjikent — Samarkand' : 'Самарканд — Пенджикент — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? 'Full day' : 'Целый день',
      startTime: language === 'en' ? 'Morning' : 'Утро',
      description: language === 'en'
        ? 'A journey to the mysterious mountain lake Iskanderkul in Tajikistan. No visa required for many countries (check in advance).'
        : 'Путешествие к загадочному горному озеру Искандеркуль в Таджикистане. Виза для многих стран не требуется (уточняйте).',
      program: language === 'en'
        ? ['Fann Mountains', 'Mountain villages', 'Waterfall', 'Snake Lake', 'Iskanderkul Lake']
        : ['Фанские горы', 'Горные кишлаки', 'Водопад', 'Змеиное озеро', 'Озеро Искандеркуль'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $350 for 1–2 pax' : 'от $350 за 1–2 чел.'
    },
    {
      id: 'hazrat-davud',
      title: language === 'en' ? 'Cave of Saint Hazrat Davud' : 'Пещера святого Хазрата Дауда',
      route: language === 'en' ? 'Samarkand — Aksay — Samarkand' : 'Самарканд — Аксай — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '4–5 hours' : '4–5 часов',
      startTime: language === 'en' ? 'Before 10:00' : 'До 10:00',
      description: language === 'en'
        ? 'A pilgrimage journey to the sacred cave of David in the mountains near Samarkand.'
        : 'Паломническое путешествие к священной пещере Давида в горах близ Самарканда.',
      program: language === 'en'
        ? ['Aksay village', 'Site of Goliath vs David battle', 'Sacred cave of David']
        : ['Село Аксай', 'Место борьбы Голиафа с Давидом', 'Священная пещера Давида'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $160 for 1–2 pax' : 'от $160 за 1–2 чел.'
    },
    {
      id: 'shakhrisabz-day',
      title: language === 'en' ? 'Shakhrisabz in One Day' : 'Шахрисабз за один день',
      route: language === 'en' ? 'Samarkand — Shakhrisabz — Samarkand' : 'Самарканд — Шахрисабз — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '6–7 hours' : '6–7 часов',
      startTime: language === 'en' ? 'Before 10:00' : 'До 10:00',
      description: language === 'en'
        ? 'A trip to the birthplace of Amir Temur through the scenic Kitab Pass. Explore historical monuments and enjoy lunch with tandoor meat.'
        : 'Поездка на родину Амира Темура через живописный Китабский перевал. Осмотр исторических памятников и обед с мясом из тандыра.',
      program: language === 'en'
        ? ['Kitab mountain pass', 'Filming location of "Chingachgook"', 'Ak-Saray Palace', 'Doru-t-Tilavat complex', 'Doru-s-Saodat complex', 'Lunch at mountain teahouse (tandoor meat)']
        : ['Горный Китабский перевал', 'Место съёмок фильма «Чингачгук»', 'Дворец Ак-Сарай', 'Комплекс Дору-т-Тиловат', 'Комплекс Дору-с-Саодат', 'Обед в горной чайхане (тандыр-гушт)'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $180 for 1–2 pax' : 'от $180 за 1–2 чел.'
    },
    {
      id: 'zaamin-reserve',
      title: language === 'en' ? 'Zaamin Reserve — "Uzbek Switzerland"' : 'Зааминский заповедник — «узбекская Швейцария»',
      route: language === 'en' ? 'Samarkand — Jizzakh — Zaamin — Samarkand' : 'Самарканд — Джизак — Заамин — Самарканд',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '7–8 hours' : '7–8 часов',
      startTime: language === 'en' ? 'Before 09:00' : 'До 09:00',
      description: language === 'en'
        ? 'A trip to Zaamin National Park with mountain scenery, canyons, and modern infrastructure.'
        : 'Путешествие в Зааминский национальный парк с горными пейзажами, каньонами и современной инфраструктурой.',
      program: language === 'en'
        ? ['Zaamin Reservoir', 'Thousand-year-old juniper', 'Chortanga Canyon', 'Sherbulok', 'Glass bridge', 'Cable cars']
        : ['Зааминское водохранилище', 'Тысячелетняя арча', 'Каньон Чортанга', 'Шербулок', 'Стеклянный мост', 'Фуникулёры'],
      included: language === 'en' ? ['Guide services', 'Transportation'] : ['Услуги гида', 'Автотранспорт'],
      notIncluded: language === 'en' ? ['Meals'] : ['Питание'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $300 for 1–2 pax' : 'от $300 за 1–2 чел.'
    },
    {
      id: 'aydarkul-yurts',
      title: language === 'en' ? 'Kyzylkum Desert & Aydarkul Lake with Overnight Stay' : 'Пустыня Кызылкум и озеро Айдаркуль с ночёвкой',
      route: language === 'en' ? 'Samarkand — Nurata — Aydarkul — Samarkand (or Bukhara)' : 'Самарканд — Нурата — Айдаркуль — Самарканд (или Бухара)',
      tourType: language === 'en' ? 'Car + Walking' : 'Авто + пешая',
      duration: language === 'en' ? '48 hours (2 days)' : '48 часов (2 дня)',
      startTime: language === 'en' ? 'Any time' : 'В любое время',
      description: language === 'en'
        ? 'A two-day desert trip with an overnight stay in a yurt camp. Camel riding, desert sunset, and a visit to Aydarkul Lake.'
        : 'Двухдневное путешествие в пустыню с ночёвкой в юртовом лагере. Катание на верблюдах, закат в пустыне и посещение озера Айдаркуль.',
      program: language === 'en'
        ? ['Nurata town', 'Ruins of Alexander the Great\'s fortress', 'Lunch at a local teahouse', 'Camel riding in the desert', 'Desert sunset', 'Folklore concert', 'Campfire and dancing', 'Aydarkul Lake']
        : ['Городок Нурата', 'Руины крепости Александра Македонского', 'Обед в местной чайхане', 'Катание на верблюдах в пустыне', 'Встреча заката в пустыне', 'Фольклорный концерт', 'Костёр и дискотека', 'Озеро Айдаркуль'],
      included: language === 'en' ? ['Guide services', 'Transportation', 'Yurt accommodation (1 night)', 'Breakfast and dinner'] : ['Услуги гида', 'Автотранспорт', 'Проживание в юртах (1 ночь)', 'Завтрак и ужин'],
      notIncluded: language === 'en' ? ['Personal expenses', 'Camel riding'] : ['Личные расходы', 'Катание на верблюдах'],
      languages: language === 'en' ? 'Any language' : 'Любой язык',
      groupType: language === 'en' ? 'Private (your group only)' : 'Индивидуальная (только ваша группа)',
      meetingPoint: language === 'en' ? 'Your address' : 'Ваш адрес',
      price: language === 'en' ? 'from $500 for 1–2 pax' : 'от $500 за 1–2 чел.',
      badge: language === 'en' ? 'Overnight' : 'С ночёвкой',
      badgeColor: 'bg-accent text-accent-foreground'
    }
  ];

  const getTourTypeIcon = (tourType: string) => {
    if ((tourType.includes('Walking') || tourType.includes('Пешая')) && !tourType.includes('Car') && !tourType.includes('Авто')) {
      return <Footprints className="w-4 h-4 text-accent" />;
    }
    if (tourType.includes('Train') || tourType.includes('поезд')) {
      return <Train className="w-4 h-4 text-accent" />;
    }
    return <Car className="w-4 h-4 text-accent" />;
  };

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Samarkand Tours — Private Guided Tours | JamTrips' : 'Туры по Самарканду — Частные экскурсии | JamTrips'}</title>
        <meta name="description" content={language === 'en'
          ? 'Private guided tours in Samarkand. Registan Square, Shah-i-Zinda, Fann Mountains, Shakhrisabz and more. Individual tours with a guide.'
          : 'Частные экскурсии по Самарканду и окрестностям. Площадь Регистан, Шахи-Зинда, Фанские горы, Шахрисабз и многое другое. Индивидуальные туры с гидом.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroRegistanImage}
            alt={language === 'en' ? 'Registan Square in Samarkand' : 'Площадь Регистан в Самарканде'}
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
            {language === 'en' ? 'Discover the timeless beauty of the Silk Road' : 'Откройте вечную красоту Шёлкового пути'}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              {language === 'en'
                ? 'Samarkand is one of the oldest cities in Central Asia and a pearl of the Silk Road. From the magnificent Registan Square to the sacred Shah-i-Zinda complex, the city offers a blend of history, architecture, and atmosphere.'
                : 'Самарканд — один из древнейших городов Центральной Азии и жемчужина Шёлкового пути. От величественной площади Регистан до священного комплекса Шахи-Зинда город предлагает сочетание истории, архитектуры и атмосферы.'}
            </p>
            <p className="text-muted-foreground">
              {language === 'en'
                ? 'All tours are private and conducted in any language. We will pick you up at your address and drop you off after the tour.'
                : 'Все экскурсии индивидуальные, проводятся на любом языке. Мы подъедем к вашему адресу и вернём после экскурсии.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Excursions from Samarkand' : 'Экскурсии из Самарканда'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'en' ? `${tours.length} tours for every taste` : `${tours.length} экскурсий на любой вкус`}
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
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">
                          {tour.description}
                        </p>

                        {/* Tour Meta Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base text-foreground truncate">{tour.route}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            {getTourTypeIcon(tour.tourType)}
                            <span className="text-sm md:text-base text-foreground">{tour.tourType}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base text-foreground">{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg">
                            <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base text-foreground">{tour.languages}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-lg col-span-2 md:col-span-1">
                            <Users className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base text-foreground truncate">{tour.groupType}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program */}
                    <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                      <h4 className="font-semibold text-base md:text-lg text-foreground mb-4 flex items-center gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        {language === 'en' ? 'Program' : 'Программа'}
                      </h4>
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {tour.program.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm md:text-base text-foreground bg-background px-3 py-2.5 rounded-lg border border-border/30">
                            <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs md:text-sm font-medium text-accent">{i + 1}</span>
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Included */}
                      <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                        <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          {language === 'en' ? "What's Included" : 'Включено'}
                        </h4>
                        <ul className="space-y-2">
                          {tour.included.map((item, i) => (
                            <li key={i} className="text-sm md:text-base text-muted-foreground flex items-start gap-2">
                              <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Not Included */}
                      <div className="bg-destructive/5 rounded-xl p-4 border border-destructive/20">
                        <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center">
                            <XIcon className="w-3 h-3 text-destructive" />
                          </div>
                          {language === 'en' ? 'Not Included' : 'Не включено'}
                        </h4>
                        <ul className="space-y-2">
                          {tour.notIncluded.map((item, i) => (
                            <li key={i} className="text-sm md:text-base text-muted-foreground flex items-start gap-2">
                              <XIcon className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meeting Point */}
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <h4 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                            <MapPin className="w-3 h-3 text-primary" />
                          </div>
                          {language === 'en' ? 'Meeting Point' : 'Место встречи'}
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground mb-2">{tour.meetingPoint}</p>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{language === 'en' ? 'Start:' : 'Старт:'} {tour.startTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center mb-3">
                        {language === 'en' ? 'Book this tour:' : 'Забронировать:'}
                      </p>
                      <ContactButtons variant="horizontal" />
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
            {language === 'en' ? 'Ready to explore Samarkand?' : 'Готовы исследовать Самарканд?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'en'
              ? 'Contact us to book a tour or get advice on choosing a route.'
              : 'Свяжитесь с нами, чтобы забронировать экскурсию или получить консультацию по выбору маршрута.'}
          </p>
          <ContactButtons variant="horizontal" />
        </div>
      </section>
    </Layout>
  );
};

export default Samarkand;
