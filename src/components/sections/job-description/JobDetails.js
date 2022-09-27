import React from 'react';
import { Grid, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import DottedImage from '../../../assets/images/section/FrontendDescPage/dotted-main-section.svg';

export default function JobDetails (){
    return (
        <React.Fragment>
            <div className='container'>
                <Grid container spacing={5} sx={{marginTop: '5%'}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Experience</Typography>
                        <Typography variant="body2" color={'#000000'} sx={{fontWeight: '400'}} gutterBottom>2 - 3 Years</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Seniority Level</Typography>
                        <Typography variant="body2" color={'#000000'} gutterBottom>Junior Level</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Employment Type</Typography>
                        <Typography variant="body2" color={'#000000'} gutterBottom>Full Time</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{marginTop: '3%'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Overview
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Image
                            className='job-dotted'
                            src={DottedImage}
                            alt="Hero" 
                        />
                        <p className="m-0 mb-32 reveal-from-bottom hero-subtitle" style={{color: '#000000'}} data-reveal-delay="400">
                            Hashtag is a software & media Startup, focused on developing unique digital solutions that are
                            relatable to a typical African.
                            Founded in 2020, we have gradually formed a (small but) credible team, who have been working on
                            the 'next big thing' in the world of digital solutions. While at that, we keep rooting for great talents, to
                            come help us achieve more and be a part of the shared vision at Hashtag.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{marginTop: '3%'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Duties and Responsibilities
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{zIndex: '999'}}>
                        <ul>
                            <li> 1 - 3 years experience of developing applications with Django and using Django-rest-framework</li>
                            <li> Experience developing unit tests in Django and Python.</li>
                            <li> Intermediate to advanced level knowledge of Python, Docker/containerization, git & Github.</li>
                            <li> Should own a working laptop with modest configuration to work with.</li>
                            <li> Must be willing to learn and keep up to date with new technology trends.</li>
                            <li> An individual with demonstrated sense of ownership, ready to directly & indirectly contribute to the success of our Startup.</li>
                            <li> Possesses excellent communication skills.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop: '3%'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Skills And Qualifications
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <ul>
                            <li> A Bachelor's degree in Computer science/engineering, Systems Engineering, Mathematics or related fields of study</li>
                            <li> Having worked in the past to deploy at least one application to Production by self.</li>
                            <li> Sound knowledge of API documentation with Swagger & Django-rest-framework</li>
                            <li> Recent experience working within a startup team & working remotely.</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ paddingBottom: '5%'}}>
                        <Link to="/job-application">
                            <PrimaryButton text={'Apply Now'} bgColor={'#00B9BC'} />
                        </Link>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    )
}