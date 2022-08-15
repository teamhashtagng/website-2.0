import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/Team/Hero'
import TeamMember from '../components/sections/Team/TeamMember'
import CTA from '../components/sections/Team/CTA'

const Team = () => {
  return (
    <LayoutDefault>
        <div>
          <Hero/>
          <TeamMember/>
          <CTA/>
        </div>
    </LayoutDefault>
  )
}

export default Team