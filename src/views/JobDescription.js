import React, { useEffect } from 'react'
import Hero from '../components/sections/job-description/Hero'
import JobDetails from '../components/sections/job-description/JobDetails'
import Jobillustration from '../components/sections/job-description/Jobillustration'
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

const JobDescription = () => {

  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded'});
  }, []);

  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
            <Hero/>
            <JobDetails/>
            <Jobillustration/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobDescription