import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Question from '../../../assets/images/section/CareersFAQsPage/Space-guy-question.png'
import Image from "../../elements/Image";
import FAQquestions from "./FAQquestions";

export default function FAQs(){
    return (
        <Container maxWidth='false' className="FAQ-question-bg">
            <div className="container" style={{marginTop: '2%'}}>
            <Grid container spacing={1} sx={{marginTop: '7%', marginBottom: '10%'}} className='offer-card-text'>
                <Grid item xs={12} sm={6} md={6} sx={{paddingTop: '3%'}}>
                    <h1 className=" mt-0 mb-16 reveal-from-bottom FAQ-header" data-reveal-delay="200" style={{color: '#2E2F6E', textAlign: 'left'}}>
                        Frequently
                        Asked Questions
                    </h1>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Image
                        className='offer-card-icon' id='space-question'
                        src={Question}
                        alt="Hero" 
                    />
                </Grid>
            </Grid>
            <FAQquestions/>
            </div>
        </Container>
    )
}