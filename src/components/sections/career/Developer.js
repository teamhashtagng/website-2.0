import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryButton from "../../elements/PrimaryButton";

export default function Developer (){

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Red Hat Text',
            'sans-serif',
          ].join(','),
        },
      });

    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <Grid container spacing={0} sx={{marginTop: '4%'}}>
                <Grid item xs={12} sm={9} md={10}>
                    <Typography variant="h6" gutterBottom>Frontend Engineer</Typography>
                    <Typography variant="body2" gutterBottom>Lagos, Full-Time</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                    <Link to="/job-description">
                        <PrimaryButton text={'Apply Now'} bgColor={'#2E2F6E'}/>
                    </Link>
                </Grid>
                <hr className="job-line"/>
            </Grid>
            <Grid container spacing={0} sx={{marginTop: '4%'}}>
                <Grid item xs={12} sm={9} md={10}>
                    <Typography variant="h6" gutterBottom>Backend Engineer</Typography>
                    <Typography variant="body2" gutterBottom>Lagos, Full-Time</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                    <Link to="/job-description">
                        <PrimaryButton text={'Apply Now'} bgColor={'#2E2F6E'}/>
                    </Link>
                    {/* {<Button variant="contained" id="apply-button">Apply Now</Button>} */}
                </Grid>
                <hr className="job-line"/>
            </Grid>
        </React.Fragment>
        </ThemeProvider>
    )
}