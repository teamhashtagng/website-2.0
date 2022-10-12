import React, { Suspense, useEffect } from 'react';
import LayoutDefault from '../layouts/LayoutDefault'
// import sections
import HashtagNewsletter from '../components/sections/general/HashtagNewsletter';
import Hero from '../components/sections/home/Hero';
import OurProducts from '../components/sections/home/OurProducts';
import Services from '../components/sections/home/Services';
import AOS from "aos";
import "aos/dist/aos.css";


// const Hero = React.lazy(() => import("../components/sections/home/Hero"))
// const Services = React.lazy(() => import("../components/sections/home/Services"))
// const OurProducts = React.lazy(()=> import("../components/sections/home/OurProducts"))
// const HashtagNewsletter = React.lazy(() => import("../components/sections/general/HashtagNewsletter"))


const Home = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000, once: true });
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