import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Hero from '../components/sections/teamsec/HeroSection'
import TeamMember from '../components/sections/teamsec/TeamMemberSection'
import CTA from '../components/sections/teamsec/CtaSection'
import AdvisoryTeam from '../components/sections/teamsec/AdvisoryTeam'
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {

  React.useEffect(() => {
    AOS.init({ duration: 3000 });
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