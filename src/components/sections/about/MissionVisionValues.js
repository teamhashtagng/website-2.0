import React from 'react'
import Image from '../../elements/Image'
import Mission from '../../../assets/images/section/AboutPage/Target-Arrow.svg'
import Vision from '../../../assets/images/section/AboutPage/Vision.svg'
import CoreValues from '../../../assets/images/section/AboutPage/Core-values.svg'
import { Box, Grid } from '@mui/material'

const MissionVisionValues = () => {
  return (
    <Box style={{position: 'relative', zIndex: '999'}} className="value-items" data-aos="fade-up">
      <div className='container text-align-mobile'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3.5} sm={3.5} className='border-right'>
            <Image 
              src={Mission}
              className='core-value-icon'
            />
            <h3>Our Mission</h3>
            <p>To create relatable digital solutions for Africans</p>
          </Grid>
          <Grid item xs={12} md={0.75} sm={0.75}></Grid>
          <Grid item xs={12} md={3.5} sm={3.5} className='border-right'>
            <Image 
              src={Vision}
              className='core-value-icon'
            />
            <h3>Our Vision</h3>
            <p>Preference for indigenous technology within Africa</p>
          </Grid>
          <Grid item xs={12} md={0.75} sm={0.75}></Grid>
          <Grid item xs={12} md={3.5} sm={3.5}>
            <Image 
              src={CoreValues}
              className='core-value-icon'
            />
            <h3>Core Values</h3>
            <p>Innovation & problem-solving, Effective communication, Learning & growth, Empathy, Productive collaboration</p>
          </Grid>
        </Grid>
      </div>
      
    </Box>
  )
}

export default MissionVisionValues