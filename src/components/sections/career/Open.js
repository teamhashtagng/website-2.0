import React from 'react';
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import positions from '../../../assets/images/section/CareersFAQsPage/Open-position-image.png'

export default function Open (){
    return(
        <React.Fragment>
            <Container maxWidth='false' sx={{backgroundImage: `url(${positions})`, height: '350px'}}></Container>
        </React.Fragment>
    )
}