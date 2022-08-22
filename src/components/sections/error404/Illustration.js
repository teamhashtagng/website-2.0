import React from 'react';
import Image from '../../elements/Image';
import { Box, Grid } from '@mui/material';
import spaceguy from '../../../assets/images/section/Error404Page/space-guy-with-ballons.png'
import dotted from '../../../assets/images/section/Error404Page/dotted-oops.png'
import curves from '../../../assets/images/section/Error404Page/Curve-line-bottom-1.svg'

export default function Illustration(){
    return (
        <Box>
            <div className='container'>
                <h1 style={{marginTop: '300px'}}>Oops!</h1>
                
            </div>
            <Image
                src={dotted}
                alt="dots" 
                style={{position: 'relative', marginTop: '-300px'}}
            />
            <div style={{backgroundImage: `url(${curves})`, height: '500px'}}></div>
            <div>
                <Grid container>
                    <Grid item md={6} sm={6}></Grid>
                    <Grid item md={6} sm={6}>
                        <Image
                            src={spaceguy}
                            alt="Space guy"
                            style={{position: 'relative', right: '0', top: '0', width: '80%'}} 
                        />
                    </Grid>
                </Grid>
            </div>
        </Box>
       
    )
}