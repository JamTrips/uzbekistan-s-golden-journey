import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.privateTours': 'Private Tours',
    'nav.dayTrips': 'Day Trips',
    'nav.multiDayTours': 'Multi-day Tours',
    'nav.transfers': 'Transfers',
    'nav.about': 'About Us',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Premium Travel Experience',
    'hero.title': 'Discover the Heart of the Silk Road',
    'hero.description': 'Immerse yourself in the timeless beauty of Uzbekistan with exclusive private tours through ancient cities, stunning architecture, and rich cultural heritage.',
    'hero.cta': 'Plan Your Journey',
    'hero.explore': 'Explore Tours',
    
    // Tours
    'tours.title': 'Featured Experiences',
    'tours.subtitle': 'Handcrafted journeys through Uzbekistan\'s most treasured destinations',
    'tours.viewAll': 'View All Tours',
    'tours.from': 'From',
    'tours.perPerson': 'per person',
    'tours.days': 'days',
    'tours.bookNow': 'Book Now',
    
    // Why Choose Us
    'why.title': 'Why Travel With JamTrips',
    'why.subtitle': 'We craft unforgettable experiences with attention to every detail',
    'why.expert.title': 'Expert Local Guides',
    'why.expert.desc': 'Our guides are passionate locals with deep knowledge of history, culture, and hidden gems.',
    'why.private.title': 'Private & Flexible',
    'why.private.desc': 'Every tour is exclusively yours. Customize your itinerary to match your interests and pace.',
    'why.luxury.title': 'Premium Comfort',
    'why.luxury.desc': 'Travel in modern air-conditioned vehicles with handpicked accommodations and dining.',
    'why.support.title': '24/7 Support',
    'why.support.desc': 'We\'re always available via WhatsApp to assist you before, during, and after your journey.',
    
    // Testimonials
    'testimonials.title': 'Guest Stories',
    'testimonials.subtitle': 'Hear from travelers who experienced the magic of Uzbekistan with us',
    
    // CTA
    'cta.title': 'Ready for Your Uzbekistan Adventure?',
    'cta.description': 'Let us create your perfect journey. Contact us now for a personalized travel plan.',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.email': 'Send Email',
    
    // Footer
    'footer.tagline': 'Your gateway to authentic Uzbekistan experiences',
    'footer.quickLinks': 'Quick Links',
    'footer.destinations': 'Destinations',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Samarkand, Uzbekistan',
    
    // About Page
    'about.title': 'About JamTrips',
    'about.subtitle': 'Connecting travelers with the soul of Uzbekistan since 2015',
    'about.story.title': 'Our Story',
    'about.story.p1': 'JamTrips was born from a deep love for Uzbekistan and a desire to share its wonders with the world. What started as a passion project has grown into a trusted name in premium travel experiences.',
    'about.story.p2': 'We believe travel should be transformative. Every journey we craft is designed to create lasting memories and genuine connections with the local culture.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide exceptional, personalized travel experiences that reveal the authentic beauty and hospitality of Uzbekistan.',
    
    // Reviews Page
    'reviews.title': 'Traveler Reviews',
    'reviews.subtitle': 'Real experiences from our valued guests',
    
    // Tours Pages
    'private.title': 'Private Tours',
    'private.subtitle': 'Exclusive journeys tailored to your preferences',
    'dayTrips.title': 'Day Trips',
    'dayTrips.subtitle': 'Perfect adventures for a single day',
    'multiDay.title': 'Multi-day Tours',
    'multiDay.subtitle': 'Comprehensive journeys through Uzbekistan',
    'transfers.title': 'Transfers',
    'transfers.subtitle': 'Comfortable and reliable transportation',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.destinations': 'Направления',
    'nav.privateTours': 'Частные туры',
    'nav.dayTrips': 'Однодневные туры',
    'nav.multiDayTours': 'Многодневные туры',
    'nav.transfers': 'Трансферы',
    'nav.about': 'О нас',
    'nav.reviews': 'Отзывы',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.subtitle': 'Премиальные путешествия',
    'hero.title': 'Откройте сердце Шёлкового пути',
    'hero.description': 'Погрузитесь в вечную красоту Узбекистана с эксклюзивными частными турами по древним городам, потрясающей архитектуре и богатому культурному наследию.',
    'hero.cta': 'Спланировать путешествие',
    'hero.explore': 'Смотреть туры',
    
    // Tours
    'tours.title': 'Избранные туры',
    'tours.subtitle': 'Уникальные путешествия по самым ценным местам Узбекистана',
    'tours.viewAll': 'Все туры',
    'tours.from': 'От',
    'tours.perPerson': 'с человека',
    'tours.days': 'дней',
    'tours.bookNow': 'Забронировать',
    
    // Why Choose Us
    'why.title': 'Почему JamTrips',
    'why.subtitle': 'Мы создаём незабываемые впечатления с вниманием к каждой детали',
    'why.expert.title': 'Опытные гиды',
    'why.expert.desc': 'Наши гиды — увлечённые местные жители с глубокими знаниями истории и культуры.',
    'why.private.title': 'Частные и гибкие',
    'why.private.desc': 'Каждый тур эксклюзивно ваш. Настройте маршрут под свои интересы и темп.',
    'why.luxury.title': 'Премиум комфорт',
    'why.luxury.desc': 'Путешествуйте в современных автомобилях с кондиционером и избранными отелями.',
    'why.support.title': 'Поддержка 24/7',
    'why.support.desc': 'Мы всегда на связи в WhatsApp до, во время и после вашего путешествия.',
    
    // Testimonials
    'testimonials.title': 'Истории гостей',
    'testimonials.subtitle': 'Отзывы путешественников, которые ощутили магию Узбекистана с нами',
    
    // CTA
    'cta.title': 'Готовы к приключению в Узбекистане?',
    'cta.description': 'Позвольте нам создать идеальное путешествие. Свяжитесь с нами для персонального плана.',
    'cta.whatsapp': 'Написать в WhatsApp',
    'cta.email': 'Отправить Email',
    
    // Footer
    'footer.tagline': 'Ваш путь к аутентичному Узбекистану',
    'footer.quickLinks': 'Ссылки',
    'footer.destinations': 'Направления',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены.',
    
    // Contact Page
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Мы будем рады услышать вас. Отправьте сообщение, и мы ответим как можно скорее.',
    'contact.form.name': 'Ваше имя',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'Самарканд, Узбекистан',
    
    // About Page
    'about.title': 'О JamTrips',
    'about.subtitle': 'Соединяем путешественников с душой Узбекистана с 2015 года',
    'about.story.title': 'Наша история',
    'about.story.p1': 'JamTrips родился из глубокой любви к Узбекистану и желания поделиться его чудесами с миром.',
    'about.story.p2': 'Мы верим, что путешествия должны быть трансформирующими. Каждое путешествие создано для незабываемых воспоминаний.',
    'about.mission.title': 'Наша миссия',
    'about.mission.desc': 'Предоставлять исключительные персонализированные путешествия, раскрывающие подлинную красоту Узбекистана.',
    
    // Reviews Page
    'reviews.title': 'Отзывы',
    'reviews.subtitle': 'Реальный опыт наших гостей',
    
    // Tours Pages
    'private.title': 'Частные туры',
    'private.subtitle': 'Эксклюзивные путешествия по вашим предпочтениям',
    'dayTrips.title': 'Однодневные туры',
    'dayTrips.subtitle': 'Идеальные приключения на один день',
    'multiDay.title': 'Многодневные туры',
    'multiDay.subtitle': 'Полные путешествия по Узбекистану',
    'transfers.title': 'Трансферы',
    'transfers.subtitle': 'Комфортный и надёжный транспорт',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
