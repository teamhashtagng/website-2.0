import React from 'react'
import { Grid, TextField, Box } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton'

const JobPostingNewsletter = () => {
  return (
    <div style={{padding: '50px', textAlign: 'center', backgroundColor: '#2E2F6E'}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Box >
              <h4 id='newsletter-text'>Subscribe to job posting newsletterr</h4>
              <p id='newsletter-text'>and be the first to be notified </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                // className='subform-width'
                noValidate
                autoComplete="off"
                >
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField size='small' className='border-white subform-width' id="outlined-basic" inputProps={{sx:{color:"white"}}} placeholder='Name' variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField size='small' className='border-white subform-width' id="outlined-basic" inputProps={{sx:{color:"white"}}} placeholder='Email Address' variant="outlined" />
                    <PrimaryButton className='subscribe-btn' bgColor={'#00B9BC'} text={'Subscribe'} width={'100px'} /> 
                  </Grid>
                </Grid>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default JobPostingNewsletter