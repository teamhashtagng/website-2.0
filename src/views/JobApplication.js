import React from 'react'
import Hero from '../components/sections/job-application/Hero'
import LayoutDefault from '../layouts/LayoutDefault'

const JobApplication = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
          <Hero/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobApplication