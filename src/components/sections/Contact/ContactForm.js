import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';

export default function ContactForm(){
    return(
        <Box className='Contact-form-box'>
            <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom contact-h3" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                Drop us a line
            </h3>
            <Typography variant='p' className='form-subtitle' fontSize={'17px'} sx={{lineHeight: '25px'}}>
                Please feel free to contact us if you have any further questions or concerns. 
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                id="standard-password-input"
                label="Your Name"
                type="text"
                variant="standard"
                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Email"
                type="email"
                variant="standard"
                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Subject"
                type="text"
                variant="standard"
                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Your Message"
                type="text"
                variant="standard"
                sx={{mt: '30px'}}
                />
                <div style={{}}>
                    <Button variant="contained" 
                    sx={{width: '200px', bgcolor: '#00B9BC', mt: '40px', boxShadow: 'none' }}
                    > Submit</Button>
                </div>
            </Box>
        </Box>
    )
}