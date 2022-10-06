import { Grid } from "@mui/material";
import React from "react";
import FormData from "./FormData";

export default function JobForm () {
    return(
        <React.Fragment>
            <div className='container ' data-aos="fade-up">
                <Grid container spacing={4} sx={{marginTop: '3%', color: '#000000'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                            Application Form
                        </h3>
                        <p className=" reveal-from-bottom hero-subtitle" data-reveal-delay="400" style={{color: '#000000'}}>
                            * Required
                        </p>
                    </Grid>
                </Grid>
                <FormData/>
            </div>
        </React.Fragment>
    )
}