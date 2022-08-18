import React from 'react'
import Image from '../../elements/Image'
import ServiceCurve from '../../../assets/images/shapes/curved-services.png'
import ServiceDots from '../../../assets/images/section/HomePage/Features-dotted-design.svg'
import SoftwareDev from '../../../assets/images/section/HomePage/Software-dev.svg'
import ProductMngt from '../../../assets/images/section/HomePage/Product-mangement.svg'
import DevOps from '../../../assets/images/section/HomePage/Devops-cloud.svg'
import DataAnalysis from '../../../assets/images/section/HomePage/Data-analysis.svg'
import CurvedBottom from '../../../assets/images/section/HomePage/Feature-curved-bottom.png'
import CurvedLinesDown from '../../../assets/images/section/HomePage/Feature-curves-down.svg'
import SpaceGuyRocket from '../../../assets/images/section/HomePage/Spaceguy-Rocket.png'
import LeftDots from '../../../assets/images/section/HomePage/left-side-dots.png'
import { Box, Grid } from '@mui/material'

const services = [
  { image: SoftwareDev, title: 'Software Development', text: 'We build and develop digital solutions for pertinent challenges around Africa' },
  { image: ProductMngt, title: 'Product Management', text: 'Building and managing products and its processes' },
  { image: DevOps, title: 'DevOps & Cloud Support', text: 'Build, deploy and optimize Cloud based apps' },
  { image: DataAnalysis, title: 'Data Analysis & Visualisation', text: 'Tracking and evaluating performance of products & more' },
]
const Services = () => {
  return (
    <Box>
      <Image 
        src={ServiceCurve}
      />
      <Box style={{backgroundColor: '#2E2F6E'}}>
        <div className='container' style={{paddingTop: '50px', paddingBottom: '50px'}}>
          <h2 style={{color: '#00B9BC'}}>We proffer solutions for <br/> your business</h2>
          <p style={{color: 'white'}}>By solving new problems and enhancing <br/>existing solutions.</p>
          <Image
            src={ServiceDots}
            style={{position: 'absolute', right: '0', marginTop: '-500px'}}
          />
        </div>
        <Box>
          <div className='container'>
            <Grid container spacing={10} className='services_'>
              
                { services.map((service, index) => (
                  <Grid key={index} item xs={12} md={6} sm={6}>
                    <Image 
                      src={service.image}

                    />
                    <h3 style={{ color: 'white' }}>{service.title}</h3>
                    <p style={{ color: 'white' }}>{service.text}</p>
                  </Grid>
                )) }
                
            </Grid>
          </div>
        </Box>
        <div className='extra-space' style={{height: '500px'}}>
          <Image
              src={LeftDots}
              style={{position: 'absolute', left: '0', marginTop: '100px'}}
            />
            <Image
              src={CurvedLinesDown}
              style={{position: 'absolute', right: '0', marginTop: '-600px',}}
            />
        </div>
      </Box>
      <Box style={{backgroundImage: `url(${CurvedBottom})`, backgroundSize: 'cover', height: '500px'}}>

      </Box>
      <div className='container'>
        <Image 
            src={SpaceGuyRocket}
            className='space-guy'
            style={{position: 'relative', zIndex: '999'}}
          />
      </div>
      
    </Box>
  )
}

export default Services