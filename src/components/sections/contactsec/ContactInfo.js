import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';

export default function ContactInfo() {
    return (
        <Grid container spacing={5} data-aos="fade-up">
            <Grid item xs={12} sm={6} md={6} >
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <div>
                        <LocationOnIcon sx={{color: '#2E2F6E'}}/>
                    </div>
                    <Typography variant="p" id='contact-info-text' gutterBottom>ADDRESS</Typography><br/>
                    <Typography variant='p' fontSize={'17px'} gutterBottom>Office address: Anibaba street, Owode-onirin, Lagos.</Typography>
                </Box>
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <div>
                        <EmailIcon sx={{color: '#2E2F6E'}}/>
                    </div>
                    <Typography variant="p" id='contact-info-text' gutterBottom>EMAIL</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>teamhashtagng@gmail.com hello@hashtagng.com</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Box sx={{mt: '40px', mb: '70px'}}>
                    <div>
                        <AccessTimeFilledIcon sx={{ color: '#2E2F6E'}}/>
                    </div>
                    <Typography variant="p" id='contact-info-text' gutterBottom>OPENING HOURS</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>Monday to Friday: 9am to 5pm</Typography>
                </Box>
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <div>
                        <PhoneIcon sx={{ color: '#2E2F6E'}}/>
                    </div>
                    <Typography variant="p" id='contact-info-text' gutterBottom>PHONE</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>Reach us on mobile <br/> 0912 940 3029</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}