import React from 'react'
import Hero from '../components/sections/career/Hero'
import Open from '../components/sections/career/Open'
import OpenPositions from '../components/sections/career/OpenPositions'
import WorkingHere from '../components/sections/career/WorkingHere'
import LayoutDefault from '../layouts/LayoutDefault'
import JobPostingNewsletter from '../components/sections/general/JobPostingNewsletter'

const Careers = () => {
  return (
    <LayoutDefault>
        <div>
          <Hero/>
          <WorkingHere/>
          <Open/>
          <OpenPositions/>
          <JobPostingNewsletter/>
        </div>
    </LayoutDefault>
  )
}

export default Careers