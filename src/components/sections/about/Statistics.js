import React, { useEffect } from 'react'
import Image from '../../elements/Image'
import Curves from '../../../assets/images/section/AboutPage/about-curve.png'
import SpaceMission from '../../../assets/images/section/AboutPage/spaceman-mission-1.png'
import CurvedLinesDown from '../../../assets/images/section/AboutPage/Target-curved-middle.png'

import { Box, Grid } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";

const Statistics = () => {

    useEffect(() => {
        AOS.init({ easing: 'ease-out-back', duration: 3000});
      }, []);

  return (
    <Box>
        
       <div style={{backgroundImage: `url(${Curves})`, backgroundSize: 'cover', height: '700px'}}>
       <div style={{display: "flex", justifyContent: "center"}} data-aos="fade-up">
            <Image 
                src={SpaceMission}
                style={{width: '500px', marginTop: '70px'}}
            />
        </div>
       
       </div>
        {/* <Image 
            src={Curves}
            style={{position: 'relative', zIndex: '-1', marginTop: '-400px'}}
        /> */}
        <div style={{ paddingBottom: '100px', backgroundColor: '#2E2F6E'}}>
            <Image
              src={CurvedLinesDown}
              style={{position: 'absolute', right: '0'}}
              className='about-curve'
            />
            <div className='container' style={{paddingBottom: '100px', zIndex: '9999'}} data-aos="fade-up">
                <Box style={{backgroundColor: 'white', borderRadius: '30px', width: '100%', padding: '20px', textAlign: 'center', zIndex: '9999'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>9+</h1>
                            <p>Team members</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span className="dot" style={{backgroundColor: '#00B9BC'}}></span></Grid>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>10+</h1>
                            <p>Client works</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span className="dot" style={{backgroundColor: '#2E2F6E'}}></span></Grid>
                        <Grid item xs={12} md={2.5} sm={2.5}>
                            <h1>4+</h1>
                            <p>Services</p>
                        </Grid>
                        <Grid item xs={12} md={0.6} sm={0.6}><span className="dot" style={{backgroundColor: '#BD9F62'}}></span></Grid>
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