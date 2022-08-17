import React from 'react';
import { Button, Grid } from '@mui/material';
import Image from '../../elements/Image';
import DottedImage from '../../../assets/images/section/CareersFAQsPage/Dotted-about-here.svg';
import OfferCard from './OffersCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Offers from './Offers';
import zIndex from '@mui/material/styles/zIndex';


export default function WorkingHere () {
    return (
        <div className='container'>
            <div>
            <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{display: "flex", flexDirection: "column", justifyContent: "center", zIndex: '1'}} className="btns">
              {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
              <h2 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#2E2F6E', marginTop: '5%', textAlign: 'center'}}>
                About Working Here
              </h2>
            </Grid>
            </Grid>
            <Image
                className='middle-dotted-Career'
                src={DottedImage}
                alt="Hero" 
            />
            <Offers/>
            </div>
        </div>
    )
}