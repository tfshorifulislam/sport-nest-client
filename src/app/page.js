import Banner from '@/components/Banner';
import FreequentlyAsk from '@/components/FreequentlyAsk';
import TopSportsComplexesCities from '@/components/TopSportsComplexesCities';
import React from 'react';
import AddFacilitiesFormHomePage from './all-facilities/page';
import FacilitiesCardForHome from '@/components/FacilitiesCardForHome';
import HappyCustomer from '@/components/HappyCustomer';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FacilitiesCardForHome />
      <HappyCustomer />
      <FreequentlyAsk />
      <TopSportsComplexesCities />
    </div>
  );
};

export default HomePage;