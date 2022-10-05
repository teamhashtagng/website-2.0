import React, { useEffect } from 'react';
import HashtagNewsletter from '../components/sections/general/HashtagNewsletter';
// import sections
import Hero from '../components/sections/home/Hero';
import OurProducts from '../components/sections/home/OurProducts';
import Services from '../components/sections/home/Services';
import AOS from "aos";
import "aos/dist/aos.css";

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <Services/>
      <OurProducts/>
      <HashtagNewsletter/>
    </LayoutDefault>
  );
}

export default Home;