import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/team/HeroSection'
import TeamMember from '../components/sections/team/TeamMemberSection'
import CTA from '../components/sections/team/CtaSection'

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