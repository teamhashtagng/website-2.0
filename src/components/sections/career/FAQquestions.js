import { Grid } from "@mui/material";
import React from "react";
import Image from "../../elements/Image";
import PrimaryButton from "../../elements/PrimaryButton";
import AccordionQuestion from "./Accordion";
import dotted from '../../../assets/images/section/CareersFAQsPage/FAQs-dotted.svg'
import { Link } from "react-router-dom";
import QuestionData from "./QuestionData";


export default function FAQquestions (){
    //const [question ] = React.useexpanded(QuestionData)

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <React.Fragment>
                <Grid container spacing={4} sx={{marginTop: '8%'}}> 
                {QuestionData.map((_, index) => (
                    <Grid item xs={12} sm={12} md={12} key={index} data-aos="fade-up">
                    <AccordionQuestion 
                        key={_.id}
                        panelNo={_.panelNo}
                        title={_.title}
                        description={_.description}
                        expanded={expanded}
                        handleChange={handleChange( _.panelNo)}
                    />
                    </Grid>
                ))}
                </Grid>

                <Grid container spacing={2} sx={{marginTop: '1%', marginBottom: '0%'}} data-aos="fade-up">
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