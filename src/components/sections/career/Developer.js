import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function Developer (){
    return (
        <React.Fragment>
            <Grid container spacing={0} sx={{marginTop: '4%'}}>
                <Grid item xs={12} sm={9} md={10}>
                    <Typography variant="h6" gutterBottom>Frontend Engineer</Typography>
                    <Typography variant="body2" gutterBottom>Lagos, Full-Time</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                    <Button variant="contained" id="apply-button">Apply Now</Button>
                </Grid>
                <hr className="job-line"/>
            </Grid>
            <Grid container spacing={0} sx={{marginTop: '4%'}}>
                <Grid item xs={12} sm={9} md={10}>
                    <Typography variant="h6" gutterBottom>Backend Engineer</Typography>
                    <Typography variant="body2" gutterBottom>Lagos, Full-Time</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                    <Button variant="contained" id="apply-button">Apply Now</Button>
                </Grid>
                <hr className="job-line"/>
            </Grid>
        </React.Fragment>
    )
}