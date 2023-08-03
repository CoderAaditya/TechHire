import React from 'react';
import Intro from './Intro';
import Teams from './Teams';
import ServicesSection from './ServicesSection';
import Steps from './Steps';

const Body = () => {
  return (
    <div>
      <Intro />
      <ServicesSection />
      <Teams/>
      <Steps/>
    </div>
  );
};

export default Body;
