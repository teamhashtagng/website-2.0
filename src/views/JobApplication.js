import React, { useEffect } from 'react'
import Hero from '../components/sections/job-application/Hero'
import JobForm from '../components/sections/job-application/JobForm'
import JobIllustration from '../components/sections/job-application/jobIllustration'
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

const JobApplication = () => {

  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded'});
  }, []);

  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
          <Hero/>
          <JobForm/>
          <JobIllustration/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobApplication