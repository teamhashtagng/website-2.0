import React, { useEffect } from 'react'
import Description from '../components/sections/about/Description'
import Hero from '../components/sections/about/Hero'
import MissionVisionValues from '../components/sections/about/MissionVisionValues'
import Statistics from '../components/sections/about/Statistics'
import WeAreFun from '../components/sections/about/WeAreFun'
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []); 
  return (
    <LayoutDefault>
        <Hero/>
        <Description/> 
        <MissionVisionValues/>
        <Statistics/>
        <WeAreFun/>
    </LayoutDefault>
  )
}

export default About