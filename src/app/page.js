import Banner from '@/components/Banner';
import FreequentlyAsk from '@/components/FreequentlyAsk';
import TopSportsComplexesCities from '@/components/TopSportsComplexesCities';
import React from 'react';
import FacilitiesCardForHome from '@/components/FacilitiesCardForHome';
import HappyCustomer from '@/components/HappyCustomer';
import StatsSection from '@/components/State';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import WhyChooseUs from '@/components/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StatsSection/>
      <FacilitiesCardForHome />
      <HowItWorks/>
      <WhyChooseUs/>
      <HappyCustomer />
      <CallToAction/>
      <FreequentlyAsk />
      <TopSportsComplexesCities />
    </div>
  );
};

export default HomePage;