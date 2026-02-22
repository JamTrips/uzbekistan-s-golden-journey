import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Check, X } from 'lucide-react';
import BookingDialog from '@/components/common/BookingDialog';

const TourDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [tour, setTour] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('tours').select('*').eq('id', id).eq('is_published', true).maybeSingle();
      setTour(data);
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) return <Layout><div className="py-32 text-center">Загрузка...</div></Layout>;
  if (!tour) return <Layout><div className="py-32 text-center">{language === 'en' ? 'Tour not found' : 'Экскурсия не найдена'}</div></Layout>;

  const title = language === 'en' ? tour.title_en || tour.title_ru : tour.title_ru;
  const desc = language === 'en' ? tour.full_description_en || tour.full_description_ru : tour.full_description_ru;
  const shortDesc = language === 'en' ? tour.short_description_en || tour.short_description_ru : tour.short_description_ru;
  const included = language === 'en' ? tour.included_en || tour.included_ru : tour.included_ru;
  const excluded = language === 'en' ? tour.excluded_en || tour.excluded_ru : tour.excluded_ru;

  return (
    <Layout>
      <Helmet>
        <title>{title} — JamTrips</title>
        <meta name="description" content={shortDesc || title} />
      </Helmet>

      {/* Hero */}
      {tour.cover_image && (
        <div className="relative h-[50vh] overflow-hidden">
          <img src={tour.cover_image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground">{title}</h1>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {!tour.cover_image && <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">{title}</h1>}

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="secondary">{tour.tour_type === 'group' ? (language === 'en' ? 'Group' : 'Групповая') : (language === 'en' ? 'Private' : 'Индивидуальная')}</Badge>
            {tour.location && <Badge variant="outline" className="gap-1"><MapPin className="h-3 w-3" />{tour.location}</Badge>}
            {tour.duration && <Badge variant="outline" className="gap-1"><Clock className="h-3 w-3" />{tour.duration}</Badge>}
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-primary">{tour.price} {tour.currency}</span>
            <BookingDialog tourId={tour.id} tourName={title}>
              <Button variant="gold" size="lg">{language === 'en' ? 'Book Now' : 'Забронировать'}</Button>
            </BookingDialog>
          </div>

          {desc && (
            <div className="prose prose-lg max-w-none mb-8">
              {desc.split('\n').map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {included && included.length > 0 && (
              <div>
                <h3 className="font-serif font-bold text-lg mb-3">{language === 'en' ? 'Included' : 'Включено'}</h3>
                <ul className="space-y-2">
                  {included.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {excluded && excluded.length > 0 && (
              <div>
                <h3 className="font-serif font-bold text-lg mb-3">{language === 'en' ? 'Not included' : 'Не включено'}</h3>
                <ul className="space-y-2">
                  {excluded.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Gallery */}
          {tour.gallery_images && tour.gallery_images.length > 0 && (
            <div>
              <h3 className="font-serif font-bold text-lg mb-3">{language === 'en' ? 'Gallery' : 'Галерея'}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tour.gallery_images.map((url: string, i: number) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img src={url} alt={`${title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TourDetail;
