import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

import SpaceGuy from '../../../assets/images/section/Error404Page/space-guy-ballon.png'
import DottedImage from '../../../assets/images/section/Error404Page/dotted-oops.svg'
import PrimaryButton from '../../elements/PrimaryButton';


const Hero = () => {

  return (
    <div className='not-found-bg'>
      <div className="container-sm not-found-page">
          <Grid container spacing={5} >
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}} className="btns">
              <h1 className="hero-h1 mt-0 mb-16 reveal-from-bottom error-hero-h1" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                Oops!
              </h1>
              <Typography variant='h5' sx={{textAlign: 'center', color: '#000000'}}>Sorry, it’s not you. It’s us</Typography>
              <Typography variant='body1' sx={{textAlign: 'center', mb: '6%'}}gutterBottom>Please refresh the page</Typography>
              <center>
                <Link to='/'>
                <PrimaryButton text={'Ok, got it'} bgColor={'#00B9BC'}/>
                </Link>
              </center>
              </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Image
                    className='hero-oops'
                    src={SpaceGuy}
                    alt="Hero" 
                />
            </Grid>
          </Grid>
        </div>
        <Image
            className='not-found-dotted'
            src={DottedImage}
            alt="Hero" 
        />
    </div>
  );
}

export default Hero;