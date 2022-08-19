import React from 'react'
import Hero from '../components/sections/job-application/Hero'
import JobIllustration from '../components/sections/job-application/jobIllustration'
import LayoutDefault from '../layouts/LayoutDefault'

const JobApplication = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
          <Hero/>
          <JobIllustration/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobApplication