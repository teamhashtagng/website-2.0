import { Grid } from "@mui/material";
import React from "react";
import Image from "../../elements/Image";
import PrimaryButton from "../../elements/PrimaryButton";
import AccordionQuestion from "./Accordion";
import dotted from '../../../assets/images/section/CareersFAQsPage/FAQs-dotted.svg'
import { Link } from "react-router-dom";


export default function FAQquestions (){
    return(
        <React.Fragment>
                <Grid container spacing={4} sx={{marginTop: '8%'}}>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '5%'}}>
                        <AccordionQuestion
                            title={'Do you provide customer support?'}
                            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '5%'}}>
                        <AccordionQuestion
                            title={'Do you provide customer support?'}
                            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} >
                        <AccordionQuestion sx={{paddingTop: '10%'}}
                            title={'Do you provide customer support?'}
                            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '3%'}}>
                        <AccordionQuestion
                            title={'Do you provide customer support?'}
                            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{marginTop: '1%', marginBottom: '0%'}}>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '5%'}}>
                        <h4 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#ffffff', marginTop: '5%', textAlign: 'center'}}>
                            Didn’t find an answer?
                        </h4>
                        <p className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#ffffff', textAlign: 'center'}}>
                            Our team is just an email away and ready to answer your questions
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{paddingTop: '1%', paddingBottom: '3%'}}>
                        <center>
                        <Link to="/contact-us">
                            <PrimaryButton bgColor={'#00B9BC'} text={'  Contact Us  '}/>
                        </Link>
                        </center>
                    </Grid>
                </Grid>
                <Image
                    className='Answer-dotted'
                    src={dotted}
                    alt="dotted" 
                />
        </React.Fragment>
    )
}