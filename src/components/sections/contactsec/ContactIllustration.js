import React from 'react';
import Image from '../../elements/Image';
import { Container, Grid } from '@mui/material';
import spaceguy from '../../../assets/images/section/ContactPage/Space-guy-laptop.png'
import dotted from '../../../assets/images/section/ContactPage/Bottom-dotted-design.svg'
import tempguy from '../../../assets/images/space-guy-1.png'

export default function ContactIllustration(){
    return (
        <Container maxWidth='false' className='contact-illus'>
            <Image
                className='bottom-dotted-contact'
                src={dotted}
                alt="Space guy" 
            />
            <div className='container'>
                <div className='site-header-inner'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>

                            <Image
                            className='contact-space-guy'
                            src={spaceguy}
                            alt="Space guy" 
                            />
                        </Grid>
                    </Grid>

                </div>
            </div>
        </Container>
    )
}