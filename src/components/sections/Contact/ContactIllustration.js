import React from 'react';
import Image from '../../elements/Image';
import { Container } from '@mui/material';
import spaceguy from '../../../assets/images/section/ContactPage/Space-guy-laptop.png'
import dotted from '../../../assets/images/section/ContactPage/Bottom-dotted-design.svg'
import tempguy from '../../../assets/images/space-guy-1.png'

export default function ContactIllustration(){
    return (
        <Container maxWidth='false' className='contact-illus'>
        <div className='container'>
            <div className='site-header-inner'>
                <Image
                className='bottom-dotted-contact'
                src={dotted}
                alt="Space guy" 
                />
                <Image
                className='contact-space-guy'
                src={spaceguy}
                alt="Space guy" 
                />

            </div>
        </div>
        </Container>
    )
}