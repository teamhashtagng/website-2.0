import React from 'react'
import Hero from '../components/sections/career/Hero'
import Open from '../components/sections/career/Open'
import WorkingHere from '../components/sections/career/WorkingHere'
import LayoutDefault from '../layouts/LayoutDefault'

const Careers = () => {
  return (
    <LayoutDefault>
        <div>
          <Hero/>
          <WorkingHere/>
          <Open/>
        </div>
    </LayoutDefault>
  )
}

export default Careers