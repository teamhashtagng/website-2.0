import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';

import DottedImage from '../../../assets/images/section/ContactPage/hero-dotted-design.svg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content Hero-Banner-Contact',
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
            <Image
            className='hero-dotted-contact'
            src={DottedImage}
            alt="Hero" 
            />
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={12} style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: 'center'}} className="btns">
              {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
              <h1 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" id='hero-text-bottom' data-reveal-delay="200" style={{color: '#FFFFFF'}}>
                Contact
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom hero-subtitle" data-reveal-delay="400">
                Reach out to us
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;