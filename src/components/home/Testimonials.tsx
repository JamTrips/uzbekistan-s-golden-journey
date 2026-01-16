import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      location: language === 'en' ? 'United Kingdom' : 'Великобритания',
      rating: 5,
      text: language === 'en'
        ? 'An absolutely magical experience! Our guide\'s knowledge of Uzbekistan\'s history was incredible. Every detail was perfectly arranged.'
        : 'Абсолютно волшебный опыт! Знания нашего гида об истории Узбекистана были невероятными.',
    },
    {
      id: 2,
      name: 'Michael K.',
      location: language === 'en' ? 'Germany' : 'Германия',
      rating: 5,
      text: language === 'en'
        ? 'JamTrips made our Silk Road dream come true. The private tours gave us intimate access to places we never expected to see.'
        : 'JamTrips воплотила нашу мечту о Шёлковом пути. Частные туры дали нам доступ к местам, которые мы не ожидали увидеть.',
    },
    {
      id: 3,
      name: 'Elena V.',
      location: language === 'en' ? 'Russia' : 'Россия',
      rating: 5,
      text: language === 'en'
        ? 'Professional, warm, and incredibly knowledgeable. The Seven Lakes trip was the highlight of our entire Central Asia journey.'
        : 'Профессионально, тепло и невероятно познавательно. Поездка на Семь озёр стала изюминкой нашего путешествия.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
