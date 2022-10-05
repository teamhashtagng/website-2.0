import React from 'react';
import { Grid } from '@mui/material';
import OfferCard from './OffersCard';
import Trophy from '../../../assets/images/section/CareersFAQsPage/Trophy.svg';
import Gadgets from '../../../assets/images/section/CareersFAQsPage/Gadgets.svg';
import Chart from '../../../assets/images/section/CareersFAQsPage/Pie-Chart.svg';
import Medical from '../../../assets/images/section/CareersFAQsPage/Medical-insurance.svg';
import Learning from '../../../assets/images/section/CareersFAQsPage/Learning-cultuer.svg';
import food from '../../../assets/images/section/CareersFAQsPage/Healthy-food.svg';

export default function Offers (){
    return (
        <React.Fragment>
            <Grid container spacing={5} sx={{marginTop: '3%', zIndex: '999'}}>
                <Grid item xs={12} sm={6} md={6}>
                    <OfferCard
                        icon={Trophy}
                        header={'Condusive Environment'}
                        body={'Enjoy challenging work, and a satisfying job without any hierarchy.'}
                    />
                     <OfferCard
                        icon={Learning}
                        header={'Culture of learning'}
                        body={'Regular brown bag hinches to keep the brain rejuvenated.'}
                    />
                    {/* <OfferCard
                        icon={food}
                        header={'Healthy Meals and Snacks'}
                        body={'Food is on the house so it feels like home.'}
                    />
                    <OfferCard
                        icon={Gadgets}
                        header={'Best Gadgets'}
                        body={'Pamper the tech savy in you with gadgets and advanced technology.'}
                    /> */}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <OfferCard
                        icon={Chart}
                        header={'Shared Success'}
                        body={'Equity ownership and opportunity await.'}
                    />
                    <OfferCard
                        icon={Medical}
                        header={'Medical Insurance'}
                        body={'We have got you covered, literally.'}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}