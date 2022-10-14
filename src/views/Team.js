import React, { useEffect } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/teamsec/HeroSection'
import TeamMember from '../components/sections/teamsec/TeamMemberSection'
import CTA from '../components/sections/teamsec/CtaSection'
import AdvisoryTeam from '../components/sections/teamsec/AdvisoryTeam'
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {

  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded'});
  }, []);

  return (
    <LayoutDefault>
        <div>
          <Hero/>
          <TeamMember/>
          <CTA/>
          <AdvisoryTeam/>
        </div>
    </LayoutDefault>
  )
}

export default Team