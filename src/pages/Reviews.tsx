import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Reviews: React.FC = () => {
  const { t, language } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: language === 'en' ? 'United Kingdom' : 'Великобритания',
      date: language === 'en' ? 'October 2024' : 'Октябрь 2024',
      rating: 5,
      tour: language === 'en' ? 'Complete Silk Road Journey' : 'Полное путешествие по Шёлковому пути',
      text: language === 'en'
        ? 'An absolutely magical experience! Our guide\'s knowledge of Uzbekistan\'s history was incredible. Every detail was perfectly arranged—from the boutique hotels to the local dining experiences. The Registan at sunset will stay with me forever.'
        : 'Абсолютно волшебный опыт! Знания нашего гида об истории Узбекистана были невероятными. Каждая деталь была идеально организована.',
    },
    {
      id: 2,
      name: 'Michael Schneider',
      location: language === 'en' ? 'Germany' : 'Германия',
      date: language === 'en' ? 'September 2024' : 'Сентябрь 2024',
      rating: 5,
      tour: language === 'en' ? 'Samarkand & Bukhara Tour' : 'Тур в Самарканд и Бухару',
      text: language === 'en'
        ? 'JamTrips made our Silk Road dream come true. The private tours gave us intimate access to places we never expected to see. Our guide Timur was exceptional—knowledgeable, funny, and genuinely caring about our experience.'
        : 'JamTrips воплотила нашу мечту о Шёлковом пути. Частные туры дали нам доступ к местам, которые мы не ожидали увидеть.',
    },
    {
      id: 3,
      name: 'Elena Volkova',
      location: language === 'en' ? 'Russia' : 'Россия',
      date: language === 'en' ? 'August 2024' : 'Август 2024',
      rating: 5,
      tour: language === 'en' ? 'Seven Lakes Day Trip' : 'Однодневная поездка на Семь озёр',
      text: language === 'en'
        ? 'Professional, warm, and incredibly knowledgeable. The Seven Lakes trip was the highlight of our entire Central Asia journey. The natural beauty combined with excellent service made it unforgettable.'
        : 'Профессионально, тепло и невероятно познавательно. Поездка на Семь озёр стала изюминкой нашего путешествия по Центральной Азии.',
    },
    {
      id: 4,
      name: 'James & Lisa Thompson',
      location: language === 'en' ? 'United States' : 'США',
      date: language === 'en' ? 'July 2024' : 'Июль 2024',
      rating: 5,
      tour: language === 'en' ? 'Khiva Discovery' : 'Открытие Хивы',
      text: language === 'en'
        ? 'We\'ve traveled extensively, but Uzbekistan with JamTrips was truly special. The ancient city of Khiva felt like stepping back in time. The attention to detail in every aspect of our tour was remarkable.'
        : 'Мы много путешествовали, но Узбекистан с JamTrips был действительно особенным. Древний город Хива был как путешествие во времени.',
    },
    {
      id: 5,
      name: 'François Dubois',
      location: language === 'en' ? 'France' : 'Франция',
      date: language === 'en' ? 'June 2024' : 'Июнь 2024',
      rating: 5,
      tour: language === 'en' ? 'Photography Tour' : 'Фото-тур',
      text: language === 'en'
        ? 'As a professional photographer, I needed a tour that understood lighting and timing. JamTrips arranged early morning access to key sites and knew exactly where to position for the best shots. Incredible!'
        : 'Как профессиональный фотограф, мне нужен был тур, который понимает освещение и время. JamTrips организовала ранний доступ к ключевым местам.',
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      location: language === 'en' ? 'Japan' : 'Япония',
      date: language === 'en' ? 'May 2024' : 'Май 2024',
      rating: 5,
      tour: language === 'en' ? 'Fann Mountains Trek' : 'Поход в Фанские горы',
      text: language === 'en'
        ? 'The Fann Mountains exceeded all expectations. JamTrips organized everything perfectly—comfortable camping, delicious local food, and a guide who knew every trail. A life-changing experience!'
        : 'Фанские горы превзошли все ожидания. JamTrips организовала всё идеально — комфортный кемпинг, вкусная местная еда.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Reviews - What Travelers Say About JamTrips</title>
        <meta name="description" content="Read authentic reviews from travelers who experienced Uzbekistan with JamTrips. 4.9 average rating from 2000+ happy guests." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('reviews.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t('reviews.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9</span>
              <span className="text-muted-foreground">/ 5 ({language === 'en' ? 'from 200+ reviews' : 'из 200+ отзывов'})</span>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-card p-6 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-accent/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Tour Name */}
                  <p className="text-sm text-accent font-medium mb-2">{review.tour}</p>

                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed flex-1 mb-4">
                    "{review.text}"
                  </p>

                  {/* Date */}
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Reviews;
