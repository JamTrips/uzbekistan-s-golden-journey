import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Heart, Globe, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import bukharaImage from '@/assets/bukhara.jpg';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: '8+', label: language === 'en' ? 'Years Experience' : 'Лет опыта' },
    { value: '2000+', label: language === 'en' ? 'Happy Travelers' : 'Довольных гостей' },
    { value: '50+', label: language === 'en' ? 'Tour Routes' : 'Маршрутов' },
    { value: '4.9', label: language === 'en' ? 'Average Rating' : 'Средний рейтинг' },
  ];

  const values = [
    {
      icon: Heart,
      title: language === 'en' ? 'Passion' : 'Страсть',
      description: language === 'en' 
        ? 'We genuinely love what we do and where we live. That enthusiasm is contagious.' 
        : 'Мы искренне любим то, что делаем, и место, где живём.',
    },
    {
      icon: Award,
      title: language === 'en' ? 'Excellence' : 'Превосходство',
      description: language === 'en' 
        ? 'Every detail matters. From transport to dining, we ensure premium quality.' 
        : 'Каждая деталь важна. От транспорта до питания мы обеспечиваем высшее качество.',
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Authenticity' : 'Подлинность',
      description: language === 'en' 
        ? 'We show the real Uzbekistan—beyond tourist spots, into local life.' 
        : 'Мы показываем настоящий Узбекистан — за пределами туристических мест.',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Connection' : 'Связь',
      description: language === 'en' 
        ? 'Travel is about people. We create meaningful connections with local culture.' 
        : 'Путешествие — это люди. Мы создаём значимые связи с местной культурой.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About JamTrips - Your Trusted Uzbekistan Travel Partner</title>
        <meta name="description" content="Learn about JamTrips, your premium travel partner in Uzbekistan. 8+ years of experience creating unforgettable Silk Road journeys." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {t('about.story.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('about.story.p1')}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('about.story.p2')}
                </p>
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.mission.desc')}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={bukharaImage}
                  alt="Bukhara cityscape"
                  className="rounded-lg shadow-elevated w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-gold">
                  <p className="font-serif text-3xl font-bold">2015</p>
                  <p className="text-sm">{language === 'en' ? 'Founded' : 'Основано'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {language === 'en' ? 'Our Values' : 'Наши ценности'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
