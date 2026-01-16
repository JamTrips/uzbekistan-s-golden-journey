import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Car, Plane, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Transfers: React.FC = () => {
  const { t, language } = useLanguage();

  const transferTypes = [
    {
      icon: Plane,
      title: language === 'en' ? 'Airport Transfers' : 'Трансферы из аэропорта',
      description: language === 'en'
        ? 'Meet & greet service at all major airports. Professional drivers with nameboard pickup.'
        : 'Встреча в всех крупных аэропортах. Профессиональные водители с табличкой.',
      features: [
        language === 'en' ? 'Flight tracking' : 'Отслеживание рейса',
        language === 'en' ? 'Free waiting time' : 'Бесплатное ожидание',
        language === 'en' ? 'Meet & greet' : 'Встреча',
      ],
    },
    {
      icon: Car,
      title: language === 'en' ? 'City-to-City Transfers' : 'Межгородские трансферы',
      description: language === 'en'
        ? 'Comfortable transfers between all major cities. Modern vehicles with AC and bottled water.'
        : 'Комфортные трансферы между всеми крупными городами.',
      features: [
        language === 'en' ? 'Modern vehicles' : 'Современные автомобили',
        language === 'en' ? 'Air conditioning' : 'Кондиционер',
        language === 'en' ? 'Bottled water' : 'Бутилированная вода',
      ],
    },
  ];

  const routes = [
    { from: 'Tashkent', to: 'Samarkand', distance: '300 km', time: '4h', price: 100 },
    { from: 'Samarkand', to: 'Bukhara', distance: '270 km', time: '3.5h', price: 90 },
    { from: 'Bukhara', to: 'Khiva', distance: '450 km', time: '6h', price: 150 },
    { from: 'Tashkent', to: 'Bukhara', distance: '570 km', time: '7h', price: 170 },
    { from: 'Samarkand', to: 'Shahrisabz', distance: '90 km', time: '1.5h', price: 50 },
    { from: 'Tashkent Airport', to: 'Tashkent City', distance: '10 km', time: '30min', price: 25 },
  ];

  const features = [
    {
      icon: Shield,
      title: language === 'en' ? 'Safe & Reliable' : 'Безопасно и надёжно',
      description: language === 'en'
        ? 'Licensed drivers, insured vehicles, 24/7 support'
        : 'Лицензированные водители, застрахованные автомобили',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Any Group Size' : 'Любой размер группы',
      description: language === 'en'
        ? 'From sedans to minibuses, we have the right vehicle'
        : 'От седанов до микроавтобусов',
    },
    {
      icon: Clock,
      title: language === 'en' ? 'On Time, Every Time' : 'Всегда вовремя',
      description: language === 'en'
        ? 'Punctual service with real-time updates'
        : 'Пунктуальный сервис с обновлениями в реальном времени',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Transfers in Uzbekistan - Airport & City-to-City | JamTrips</title>
        <meta name="description" content="Reliable airport and city-to-city transfers across Uzbekistan. Modern vehicles, professional drivers, competitive prices." />
        <html lang={language} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('transfers.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('transfers.subtitle')}
            </p>
          </div>
        </section>

        {/* Transfer Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {transferTypes.map((type, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-soft">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <type.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes Table */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              {language === 'en' ? 'Popular Routes' : 'Популярные маршруты'}
            </h2>
            <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        {language === 'en' ? 'Route' : 'Маршрут'}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        {language === 'en' ? 'Distance' : 'Расстояние'}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        {language === 'en' ? 'Duration' : 'Время'}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        {language === 'en' ? 'From' : 'От'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((route, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-medium text-foreground">{route.from}</span>
                          <span className="text-muted-foreground mx-2">→</span>
                          <span className="font-medium text-foreground">{route.to}</span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{route.distance}</td>
                        <td className="px-6 py-4 text-muted-foreground">{route.time}</td>
                        <td className="px-6 py-4 font-bold text-foreground">${route.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
              {language === 'en' ? 'Book Your Transfer' : 'Забронировать трансфер'}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {language === 'en'
                ? 'Contact us to arrange your airport pickup or city-to-city transfer.'
                : 'Свяжитесь с нами, чтобы организовать трансфер.'}
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                {language === 'en' ? 'Get a Quote' : 'Получить цену'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Transfers;
