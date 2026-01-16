import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>JamTrips - Premium Tours in Uzbekistan | Private Silk Road Experiences</title>
        <meta 
          name="description" 
          content="Discover Uzbekistan with JamTrips. Premium private tours through Samarkand, Bukhara, Khiva, and beyond. Experience the Silk Road with expert local guides." 
        />
        <meta name="keywords" content="Uzbekistan tours, Silk Road travel, Samarkand tours, Bukhara tours, private tours Uzbekistan, luxury travel Central Asia" />
        <link rel="canonical" href="https://jamtrips.uz" />
        <html lang={language} />
      </Helmet>
      <Layout>
        <HeroSection />
        <FeaturedTours />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
