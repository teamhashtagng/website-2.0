import React from 'react'
import { TextField, Box } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';

const HashtagNewsletter = () => {
  return (
    <div style={{padding: '30px 0px 50px', textAlign: 'center', backgroundColor: '#2E2F6E'}}>
        <Box>
            <h4 style={{color: '#fff'}}>Subscribe to Hashtag's Newsletter</h4>
            <p style={{marginTop: '-15px', color: '#fefefe'}}>and be the first to get our juicy information </p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField size='small' className='border-white' id="outlined-basic" placeholder='Email Address' variant="outlined" />
            </Box>
            <div style={{position: 'absolute', right: '26%'}}>
                <PrimaryButton bgColor={'#00B9BC'} text={'Subscribe'} />
            </div>
        </Box>
    </div>
  )
}

export default HashtagNewsletter