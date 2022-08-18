import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';

export default function ContactInfo() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} >
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <LocationOnIcon sx={{ width: '25px', color: '#2E2F6E'}}/>
                    <Typography variant="p" id='contact-info-text' gutterBottom>ADDRESS</Typography><br/>
                    <Typography variant='p' fontSize={'17px'} gutterBottom>Office address: Anibaba street, Owode-onirin, Lagos.</Typography>
                </Box>
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <EmailIcon sx={{ width: '25px', color: '#2E2F6E'}}/>
                    <Typography variant="p" id='contact-info-text' gutterBottom>EMAIL</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>teamhashtagng@gmail.com hello@hashtagng.com</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Box sx={{mt: '40px', mb: '30px'}}>
                    {/* <AccessTimeFilledIcon sx={{ width: '25px', color: '#2E2F6E'}}/> */}
                    <Typography variant="p" id='contact-info-text' gutterBottom>OPENING HOURS</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>Monday to Friday: 10am to 7pm Saturday: 10am to 4pm</Typography>
                </Box>
                <Box sx={{mt: '40px', mb: '30px'}}>
                    <PhoneIcon sx={{ width: '25px', color: '#2E2F6E'}}/>
                    <Typography variant="p" id='contact-info-text' gutterBottom>PHONE</Typography><br/>
                    <Typography variant="p" fontSize={'17px'} gutterBottom>Call customer services on 091 294 03029</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}