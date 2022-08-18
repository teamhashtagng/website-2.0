import React from 'react'
import Hero from '../components/sections/job-description/Hero'
import LayoutDefault from '../layouts/LayoutDefault'

const JobDescription = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
            <Hero/>
        </div>
        
    </LayoutDefault>
  )
}

export default JobDescription