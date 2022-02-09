import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import PricesTiles from '../components/sections/PricesTiles';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit /*invertMobile*/ topDivider />{/* imageFill className="illustration-section-02" />*/}
      <PricesTiles />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;