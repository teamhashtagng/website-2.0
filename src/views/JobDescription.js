import React from 'react'
import Hero from '../components/sections/job-description/Hero'
import JobDetails from '../components/sections/job-description/JobDetails'
import Jobillustration from '../components/sections/job-description/Jobillustration'
import LayoutDefault from '../layouts/LayoutDefault'

const JobDescription = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
            <Hero/>
            <JobDetails/>
            <Jobillustration/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobDescription