import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';


function ContactDetail () {

  return (
    <div className='container overlay-section'>
        <div className='site-header-inner' id='middle-section' data-aos="fade-up">
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} style={{ textAlign: 'left'}} className="btns">
                <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                Contact Us
                </h3>
                <Typography variant='p' fontSize={'17px'} sx={{maxWidth: '360px', lineHeight: '26.86px'}}>
                    Let us know if you have any questions, we’d 
                    be happy to answer them.
                </Typography>
                <ContactInfo/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', textAlign: 'center'}} className="btns">
                <ContactForm/>
            </Grid>
        </Grid>
        </div>
    </div>
  );
}


export default ContactDetail;