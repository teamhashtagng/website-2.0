import React from 'react'
import { TextField, Box } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';

const HashtagNewsletter = () => {
  return (
    <div style={{padding: '30px 10px 50px', textAlign: 'center', backgroundColor: '#2E2F6E'}}>
        <Box sx={{pb: 5}}>
            <h4 style={{color: '#fff'}}>Subscribe to Hashtag Newsletter</h4>
            <p style={{marginTop: '-15px', color: '#fefefe'}}>and be the first to get our juicy information </p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0 },
                    position: 'relative',
                }}
                // className='subform-width'
                noValidate
                autoComplete="off"
                >
                <TextField size='small' className='subform-width' id="outlined-basic" inputProps={{sx:{color:"white"}}} placeholder='Email Address' variant="outlined" />
                <div className='subscribe-btn'>
                  <PrimaryButton bgColor={'#00B9BC'} text={'Subscribe'} />
                </div> 
            </Box>
        </Box>
    </div>
  )
}

export default HashtagNewsletter