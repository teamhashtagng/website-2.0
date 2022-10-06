import React from 'react';
import { Box, Grid } from '@mui/material';
import classNames from 'classnames';
import Image from '../../elements/Image';
import DottedImage from '../../../assets/images/section/TeamsPage/Hero-dotted-design.svg'
import AdvisoryGrid from './AdvisoryGrid';

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
      <div className="container-sm" style={{marginTop: '3%'}} id='advisory-team' data-aos="fade-up">
        <div className={innerClasses}>
          <Grid container data-aos="fade-up">
            <Grid item xs={12} sm={12} md={12} sx={{position: 'relative'}} className="btns">
              <h2 className=" mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200" style={{color: '#2E2F6E', marginTop: '5%', textAlign: 'center'}}>
                Meet The Advisory Team
              </h2>
            </Grid>
          </Grid>
          <AdvisoryGrid/>
        </div>
      </div>
  );
}
export default AdvisoryTeam;