import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PrimaryButton from '../../elements/PrimaryButton';
import { Box, Grid, TextField } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});


export default function FormData() {
    return (
      <ThemeProvider theme={theme}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="form-active"
                >
                    <Grid container spacing={4} sx={{marginTop: '1%', color: '#000000'}}>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            id="form-active filled-required"
                            required
                            label="Full Name"
                            focused
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="Email Address"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="Contact Number"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container spacing={1} sx={{color: '#000000', width: '50%'}}>
                            <Grid item xs={12} sm={6} md={6}>
                                <p className=" reveal-from-bottom hero-subtitle" data-reveal-delay="400" style={{color: '#000000'}}>
                                    CV / Resume *
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <PrimaryButton text={'Upload your CV'} bgColor={'#2E2F6E'} />
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="What part of the job and working with us attracted you the most?"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="What is a work, study or passion project that you’re most proud of?"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="Portfolio"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            id="filled-required"
                            label="LinkedIn"
                            variant="standard"
                            focused
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <PrimaryButton text={'Apply Now'} bgColor={'#00B9BC'} />
                        </Grid>
                    </Grid>
                </Box>
      </ThemeProvider>
    );
  }