import React from 'react';
import { Box, Grid } from '@mui/material';
import classNames from 'classnames';
import Image from '../../elements/Image';
import DottedImage from '../../../assets/images/section/TeamsPage/Hero-dotted-design.svg'
import TeamGrid from './TeamGrid';

const AdvisoryTeam = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
      <div className="container-sm" style={{marginTop: '-8%'}} id='Advisory-team' >
        <div className={innerClasses}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} sx={{position: 'relative'}} className="btns">
              <h2 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#2E2F6E', marginTop: '5%', textAlign: 'center'}}>
                Meet The Advisory Team
              </h2>
            </Grid>
          </Grid>
          <TeamGrid/>
        </div>
        <Image
          className='middle-dotted'
          src={DottedImage}
          alt="Hero" 
        />
      </div>
  );
}
export default AdvisoryTeam;