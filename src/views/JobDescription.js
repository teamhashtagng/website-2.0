import React from 'react'
import Hero from '../components/sections/job-description/Hero'
import JobDetails from '../components/sections/job-description/JobDetails'
import LayoutDefault from '../layouts/LayoutDefault'

const JobDescription = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
            <Hero/>
            <JobDetails/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobDescription