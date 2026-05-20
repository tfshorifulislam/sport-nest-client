import Banner from '@/components/Banner';
import FreequentlyAsk from '@/components/FreequentlyAsk';
import TopSportsComplexesCities from '@/components/TopSportsComplexesCities';
import React from 'react';
import AddFacilitiesFormHomePage from './all-facilities/page';
import FacilitiesCardForHome from '@/components/FacilitiesCardForHome';
import HappyCustomer from '@/components/HappyCustomer';
import StatsSection from '@/components/State';
import HowItWorks from '@/components/HowItWorks';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StatsSection/>
      <FacilitiesCardForHome />
      <HowItWorks/>
      <HappyCustomer />
      <HappyCustomer />
      <FreequentlyAsk />
      <TopSportsComplexesCities />
    </div>
  );
};

export default HomePage;

// Banner
// Stats Section ⭐
// Popular Sports
// Featured Facilities
// How It Works ⭐
// Why Choose Us
// Happy Customer
// Call To Action
// FAQ
// Foote