import React from 'react'
import Image from '../../elements/Image'
import Mission from '../../../assets/images/section/AboutPage/Target-Arrow.svg'
import Curves from '../../../assets/images/section/AboutPage/about-curve.png'
import SpaceMission from '../../../assets/images/section/AboutPage/spaceman-mission-1.png'
import CurvedLinesDown from '../../../assets/images/section/AboutPage/Target-curved-middle.png'

import { Box, Grid } from '@mui/material'

const dot = {
    height: '25px',
    width: '25px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
}
const Statistics = () => {
  return (
    <Box>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Image 
                src={SpaceMission}
                style={{width: '500px', marginTop: '100px', position: 'relative', zIndex: '999'}}
            />
        </div>
       
        <Image 
            src={Curves}
            style={{position: 'relative', zIndex: '-1', marginTop: '-400px'}}
        />
        <div className='extra-space' style={{height: '400px', backgroundColor: '#2E2F6E'}}>
            <Image
              src={CurvedLinesDown}
              style={{position: 'absolute', right: '0', marginTop: '-600px',}}
            />
            <div className='container'>
                <Box style={{backgroundColor: 'white', borderRadius: '30px', width: '100%', padding: '20px', textAlign: 'center', position: 'relative'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>9+</h1>
                            <p>Team members</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span class="dot" style={{backgroundColor: '#00B9BC'}}></span></Grid>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>10+</h1>
                            <p>Client works</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span class="dot" style={{backgroundColor: '#2E2F6E'}}></span></Grid>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>4+</h1>
                            <p>Services</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span class="dot" style={{backgroundColor: '#BD9F62'}}></span></Grid>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>1+</h1>
                            <p>Products</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
        
      
    </Box>
  )
}

export default Statistics