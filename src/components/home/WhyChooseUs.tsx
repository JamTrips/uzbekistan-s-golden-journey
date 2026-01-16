import React from 'react';
import { Users, Shield, Star, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('why.expert.title'),
      description: t('why.expert.desc'),
    },
    {
      icon: Shield,
      title: t('why.private.title'),
      description: t('why.private.desc'),
    },
    {
      icon: Star,
      title: t('why.luxury.title'),
      description: t('why.luxury.desc'),
    },
    {
      icon: Headphones,
      title: t('why.support.title'),
      description: t('why.support.desc'),
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
