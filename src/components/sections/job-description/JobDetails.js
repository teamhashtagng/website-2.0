import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

export default function JobDetails (){
    return (
        <React.Fragment>
            <div className='container'>
                <Grid container spacing={5} sx={{marginTop: '3%'}}>
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
            </div>
        </React.Fragment>
    )
}