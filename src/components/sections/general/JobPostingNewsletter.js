import React from 'react'
import { Grid, Box } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton'

const JobPostingNewsletter = () => {
  return (
    <div style={{textAlign: 'center', backgroundColor: '#2E2F6E', paddingBottom: '3%'}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Box >
              <h4 id='newsletter-text'>Subscribe to job posting newsletter</h4>
              <p id='newsletter-text'>and be the first to be notified </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '70%' },
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                // className='subform-width'
                noValidate
                autoComplete="off"
                >
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={12}>
                    <center>
                      <input className='border-white subform-width-1' id="outlined-basic-1" placeholder='Name' type="text" />
                      <input className='border-white subform-width-2' id="outlined-basic-2" placeholder='Email Address' type="email" />
                      <div className='job-subscribe-btn'>
                        <PrimaryButton bgColor={'#00B9BC'} text={'Subscribe'} width={'100px'} />
                      </div>
                    </center>
                  </Grid>
                </Grid>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default JobPostingNewsletter