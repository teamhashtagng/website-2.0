import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import PrimaryButton from '../../elements/PrimaryButton';

import SpaceGuy1 from '../../../assets/images/space-guy-1.png'
import Lines from '../../../assets/images/lines/hero-section-line.png'
import HeroLines from '../../../assets/images/section/HomePage/hero-line.png'

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
    'hero section center-content',
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
    <div>

    
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}} className="btns">
              <h1 className="hero-h1 mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to<br/><span style={{color: '#00B9BC'}}> Hashtag Digital</span>
              </h1>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              In this hub we create digital solutions, to solve real world problems.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <PrimaryButton bgColor={'#2E2F6E'} text={'Let us discuss'}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>

              <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                <Image
                  src={SpaceGuy1}
                  alt="Hero" 
                  />
              </div>
            </Grid>
          </Grid>
          
        </div>
      </div>
      
    </section>
    <div className='hero-lines'>
        <Image
          src={HeroLines}
          style={{zIndex: '-1'}}
        />
      </div>
    </div>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;