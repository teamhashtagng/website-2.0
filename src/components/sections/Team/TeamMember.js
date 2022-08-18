import React from 'react';
import { Box, Grid } from '@mui/material';
import classNames from 'classnames';
import Image from '../../elements/Image';
import DottedImage from '../../../assets/images/section/TeamsPage/Hero-dotted-design.svg'
import TeamGrid from './TeamGrid';

const TeamMember = ({
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
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} sx={{position: 'relative'}} className="btns">
              {/* <p className="m-0 reveal-from-bottom primary-color" data-reveal-delay="400"><b>OONFTs</b></p> */}
              <h2 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#2E2F6E', marginTop: '5%', textAlign: 'center'}}>
                Meet the brains
              </h2>
            </Grid>
         </Grid>
          <Image
            className='middle-dotted'
            src={DottedImage}
            alt="Hero" 
          />

          <TeamGrid/>

        </div>
      </div>
    </section>
  );
}
export default TeamMember;