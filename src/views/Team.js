import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/team/Hero'
import TeamMember from '../components/sections/team/TeamMember'
import CTA from '../components/sections/team/CTA'

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