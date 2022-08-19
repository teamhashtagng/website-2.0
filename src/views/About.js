import React from 'react'
import Description from '../components/sections/about/Description'
import Hero from '../components/sections/about/Hero'
import MissionVisionValues from '../components/sections/about/MissionVisionValues'
import Statistics from '../components/sections/about/Statistics'
import WeAreFun from '../components/sections/about/WeAreFun'
import LayoutDefault from '../layouts/LayoutDefault'

const About = () => {
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