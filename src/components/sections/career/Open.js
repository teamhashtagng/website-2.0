import React from 'react';
import { Container } from '@mui/system';
import positions from '../../../assets/images/section/CareersFAQsPage/Open-position-image.png'

export default function Open (){
    return(
        <React.Fragment>
            <Container maxWidth='false' className='open-position' sx={{backgroundImage: `url(${positions})`}}></Container>
        </React.Fragment>
    )
}