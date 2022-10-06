import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import PrimaryButton from "../../elements/PrimaryButton";
import classNames from 'classnames';

// const propTypes = {
//   ...SectionProps.types
// }

// const defaultProps = {
//   ...SectionProps.defaults
// }


export default function Hero({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  }) {

    const outerClasses = classNames(
        'hero section center-content Hero-Banner-Job',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
      const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );

    return(
        <section
            {...props}
            className={outerClasses}
        >
        <div className="container-sm">
          <div className={innerClasses}>
                <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6} style={{}} className="btns" data-aos="fade-up">
                {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
                <h1 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#FFFFFF'}}>
                    Backend Engineer
                </h1>
                <Link to="/job-application">
                    <PrimaryButton text={'Apply Now'} bgColor={'#00B9BC'} />
                </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ paddingTop: '5%'}} className="btns view-opens">
                  <a href='/careers#open-postions'>
                    <p className=" reveal-from-bottom hero-subtitle" data-reveal-delay="400">
                    View Other Openings
                    </p>
                  </a>
                </Grid>
                </Grid>

            </div>
            </div>
        </section>
    )
}