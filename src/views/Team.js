import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/teamsec/HeroSection'
import TeamMember from '../components/sections/teamsec/TeamMemberSection'
import CTA from '../components/sections/teamsec/CtaSection'

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