import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users } from 'lucide-react';
import BookingDialog from '@/components/common/BookingDialog';
import { Link } from 'react-router-dom';

interface Tour {
  id: string;
  title_ru: string;
  title_en: string | null;
  short_description_ru: string | null;
  short_description_en: string | null;
  price: number;
  currency: string;
  duration: string | null;
  location: string | null;
  tour_type: string;
  cover_image: string | null;
}

const ToursPage = () => {
  const { language, t } = useLanguage();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      const { data } = await supabase
        .from('tours')
        .select('id, title_ru, title_en, short_description_ru, short_description_en, price, currency, duration, location, tour_type, cover_image')
        .eq('is_published', true)
        .order('sort_order');
      setTours((data as Tour[]) || []);
      setLoading(false);
    };
    fetchTours();

    // Realtime updates
    const channel = supabase
      .channel('tours-public')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tours' }, () => { fetchTours(); })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{language === 'en' ? 'Tours — JamTrips' : 'Экскурсии — JamTrips'}</title>
        <meta name="description" content={language === 'en' ? 'Browse our tours and excursions in Uzbekistan' : 'Все экскурсии и туры по Узбекистану'} />
      </Helmet>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
            {language === 'en' ? 'Our Tours' : 'Наши экскурсии'}
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'en' ? 'Handcrafted experiences through Uzbekistan\'s most treasured destinations' : 'Уникальные путешествия по самым ценным местам Узбекистана'}
          </p>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => <div key={i} className="h-80 bg-muted rounded-lg animate-pulse" />)}
            </div>
          ) : tours.length === 0 ? (
            <p className="text-center text-muted-foreground">{language === 'en' ? 'Coming soon...' : 'Скоро появятся...'}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map(tour => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-elevated transition-shadow group flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {tour.cover_image ? (
                      <img src={tour.cover_image} alt={language === 'en' ? tour.title_en || tour.title_ru : tour.title_ru} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <MapPin className="h-12 w-12" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs font-medium">{tour.tour_type === 'group' ? (language === 'en' ? 'Group' : 'Групповая') : (language === 'en' ? 'Private' : 'Индивидуальная')}</Badge>
                      {tour.location && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{tour.location}</span>
                      )}
                    </div>
                    <Link to={`/tours/${tour.id}`}>
                      <h3 className="font-serif font-bold text-xl leading-snug mb-2 hover:text-accent transition-colors">
                        {language === 'en' ? tour.title_en || tour.title_ru : tour.title_ru}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {language === 'en' ? tour.short_description_en || tour.short_description_ru : tour.short_description_ru}
                    </p>
                    <div className="flex items-center justify-between mb-4 pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        {tour.duration && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{tour.duration}</span>}
                      </div>
                      <span className="text-lg font-bold text-primary">{tour.price} {tour.currency}</span>
                    </div>
                    <BookingDialog tourId={tour.id} tourName={language === 'en' ? tour.title_en || tour.title_ru : tour.title_ru}>
                      <Button className="w-full" variant="gold" size="lg">{language === 'en' ? 'Book Now' : 'Забронировать'}</Button>
                    </BookingDialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ToursPage;
