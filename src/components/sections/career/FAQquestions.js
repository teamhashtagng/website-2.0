import { Container, Grid } from "@mui/material";
import React from "react";

export default function FAQquestions (){
    return(
        <React.Fragment>
            <Container maxWidth='false' className='FAQ-question-bg'>
                <Grid container spacing={1} sx={{marginTop: '7%'}}>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '3%'}}></Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}