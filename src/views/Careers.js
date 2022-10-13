import React, { useEffect } from 'react'
import Hero from '../components/sections/career/Hero'
import Open from '../components/sections/career/Open'
import OpenPositions from '../components/sections/career/OpenPositions'
import WorkingHere from '../components/sections/career/WorkingHere'
import LayoutDefault from '../layouts/LayoutDefault'
import JobPostingNewsletter from '../components/sections/general/JobPostingNewsletter'
import FAQs from '../components/sections/career/FAQs'
import BgImage from '../components/sections/career/BgImage'
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded'});
  }, []);
  return (
    <LayoutDefault>
        <div>
          <Hero/>
          <WorkingHere/>
          <Open/>
          <OpenPositions/>
          <JobPostingNewsletter/>
          <BgImage/>
          <FAQs/>
        </div>
    </LayoutDefault>
  )
}

export default Careers