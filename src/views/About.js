import React from 'react'
import Description from '../components/sections/about/Description'
import Hero from '../components/sections/about/Hero'
import MissionVisionValues from '../components/sections/about/MissionVisionValues'
import LayoutDefault from '../layouts/LayoutDefault'

const About = () => {
  return (
    <LayoutDefault>
        <Hero/>
        <Description/>
        <MissionVisionValues/>
        
    </LayoutDefault>
  )
}

export default About