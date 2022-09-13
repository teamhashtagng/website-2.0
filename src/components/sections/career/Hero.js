import React from 'react';
import { Grid } from '@mui/material';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';

import DottedImage from '../../../assets/images/section/TeamsPage/Hero-dotted-design.svg'
import PrimaryButton from '../../elements/PrimaryButton';
import { HashLink } from 'react-router-hash-link';

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
    'hero section center-content Hero-Banner-Career',
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
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}} className="btns">
              {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
              <h1 className="hero-h1 mt-0 mb-16 reveal-from-bottom hero-h1-banner" data-reveal-delay="200" style={{color: '#00B9BC'}}>
                Work With Us
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom hero-subtitle" data-reveal-delay="400">
                We are a Nigeria-based startup & we are ready for new talent to join our company.
              </p>
              <HashLink 
                to='#open-postions'
                smooth
              >
              <PrimaryButton text={'View Jobs'} bgColor={'#00B9BC'}/>
              </HashLink>
              </Grid>
            <Grid item xs={12} sm={6} md={6}>
            </Grid>
          </Grid>
        </div>
      </div>
        <Image
          className='hero-dotted'
          src={DottedImage}
          alt="Hero" 
          style={{position: 'absolute', right: '0'}}
          />
          <div className='under-curve'></div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;