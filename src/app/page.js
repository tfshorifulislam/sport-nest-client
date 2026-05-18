import Banner from '@/components/Banner';
import FreequentlyAsk from '@/components/FreequentlyAsk';
import TopSportsComplexesCities from '@/components/TopSportsComplexesCities';
import React from 'react';
import AddFacilitiesFormHomePage from './all-facilities/page';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FreequentlyAsk />
      <TopSportsComplexesCities />
    </div>
  );
};

export default HomePage;