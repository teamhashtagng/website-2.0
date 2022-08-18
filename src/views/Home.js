import React from 'react';
import HashtagNewsletter from '../components/sections/general/HashtagNewsletter';
// import sections
import Hero from '../components/sections/home/Hero';
import Services from '../components/sections/home/Services';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <Services/>
      <HashtagNewsletter/>
    </LayoutDefault>
  );
}

export default Home;