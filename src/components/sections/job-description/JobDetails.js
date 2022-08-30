import React from 'react';
import { Grid, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';
import { Link } from 'react-router-dom';

export default function JobDetails (){
    return (
        <React.Fragment>
            <div className='container'>
                <Grid container spacing={5} sx={{marginTop: '5%'}}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Experience</Typography>
                        <Typography variant="body2" color={'#000000'} sx={{fontWeight: '400'}} gutterBottom>2 -3 Years</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Seniority Level</Typography>
                        <Typography variant="body2" color={'#000000'} gutterBottom>Entry Level</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>Employment Type</Typography>
                        <Typography variant="body2" color={'#000000'} gutterBottom>Full Time</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{marginTop: '3%'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Role Overview
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <p className="m-0 mb-32 reveal-from-bottom hero-subtitle" style={{color: '#000000'}} data-reveal-delay="400">
                            We are looking for a Front-End Web Developer who is motivated to combine the art of 
                            design with the art of programming. Responsibilities will include translation of the 
                            UI/UX design wireframes to actual code that will produce visual elements of the 
                            application. You will work with the UI/UX designer and bridge the gap between graphical 
                            design and technical implementation, taking an active role on both sides and defining 
                            how the application looks as well as how it works.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{marginTop: '3%'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Duties and Responsibilities
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <ul>
                            <li>Develop new user-facing features</li>
                            <li>Build reusable code and libraries for future use</li>
                            <li>Ensure the technical feasibility of UI/UX designs</li>
                            <li>Optimize application for maximum speed and scalability</li>
                            <li>Assure that all user input is validated before submitting to back-end</li>
                            <li>Collaborate with other team members and stakeholders</li>
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
                            <li>Proficient understanding of web markup, including HTML5, CSS3</li>
                            <li>Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS</li>
                            <li>Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery</li>
                            <li>Good understanding of asynchronous request handling, partial page updates, and AJAX</li>
                            <li>
                                Basic knowledge of image authoring tools, to be able to crop, resize, or perform 
                                small adjustments on an image. Familiarity with tools such as as Gimp or Photoshop 
                                is a plus.
                            </li>
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