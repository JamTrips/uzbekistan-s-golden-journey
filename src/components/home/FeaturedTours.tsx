import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import samarkandImage from '@/assets/hero-registan.jpg';
import bukharaImage from '@/assets/bukhara.jpg';
import khivaImage from '@/assets/khiva.jpg';
import sevenLakesImage from '@/assets/seven-lakes.jpg';

const FeaturedTours: React.FC = () => {
  const { t, language } = useLanguage();

  const tours = [
    {
      id: 1,
      title: language === 'en' ? 'Samarkand Discovery' : 'Открытие Самарканда',
      description: language === 'en' 
        ? 'Explore the jewel of the Silk Road with its stunning Registan Square and ancient monuments.' 
        : 'Исследуйте жемчужину Шёлкового пути с её потрясающей площадью Регистан.',
      image: samarkandImage,
      duration: '2',
      price: 150,
      type: language === 'en' ? 'Day Trip' : 'Однодневный',
    },
    {
      id: 2,
      title: language === 'en' ? 'Bukhara Heritage Tour' : 'Тур по наследию Бухары',
      description: language === 'en' 
        ? 'Walk through 2,500 years of history in one of the best-preserved medieval cities.' 
        : 'Пройдите через 2500 лет истории в одном из лучше всего сохранившихся средневековых городов.',
      image: bukharaImage,
      duration: '3',
      price: 280,
      type: language === 'en' ? 'Multi-day' : 'Многодневный',
    },
    {
      id: 3,
      title: language === 'en' ? 'Khiva Ancient Walls' : 'Древние стены Хивы',
      description: language === 'en' 
        ? 'Step into a living museum within the ancient mud-brick walls of Itchan Kala.' 
        : 'Войдите в живой музей в древних глинобитных стенах Ичан-Калы.',
      image: khivaImage,
      duration: '2',
      price: 180,
      type: language === 'en' ? 'Day Trip' : 'Однодневный',
    },
    {
      id: 4,
      title: language === 'en' ? 'Seven Lakes Adventure' : 'Приключение на семи озёрах',
      description: language === 'en' 
        ? 'Discover the stunning turquoise lakes nestled in the Fann Mountains.' 
        : 'Откройте для себя потрясающие бирюзовые озёра в Фанских горах.',
      image: sevenLakesImage,
      duration: '1',
      price: 120,
      type: language === 'en' ? 'Day Trip' : 'Однодневный',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('tours.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('tours.subtitle')}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {tour.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {tour.description}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration} {t('tours.days')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Private</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">{t('tours.from')}</span>
                    <p className="text-lg font-bold text-foreground">${tour.price}</p>
                  </div>
                  <Button variant="gold" size="sm" asChild>
                    <Link to="/contact">{t('tours.bookNow')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="premium" asChild>
            <Link to="/private-tours">
              {t('tours.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
