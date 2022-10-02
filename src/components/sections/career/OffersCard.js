import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from '../../elements/Image';

export default function OfferCard({icon, header, body}){
    return(
        <Grid container spacing={1} sx={{marginTop: '7%'}} className='offer-card-text' data-aos="fade-up">
            <Grid item xs={12} sm={3} md={3}>
            <Image
                className='offer-card-icon'
                src={icon}
                alt="Hero" 
                />
            </Grid>
            <Grid item xs={12} sm={9} md={9}>
                <Typography variant="body1"  gutterBottom sx={{color: '#2E2F6E', fontWeight: '700'}}>{header}</Typography>
                <Typography variant="body2" color={'#000000'} sx={{maxWidth: '500px', width: '100%'}} gutterBottom>{body}</Typography>
            </Grid>
        </Grid>
    )
}