import React from 'react';
import HashtagNewsletter from '../components/sections/general/HashtagNewsletter';
// import sections
import Hero from '../components/sections/home/Hero';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <HashtagNewsletter/>
    </LayoutDefault>
  );
}

export default Home;