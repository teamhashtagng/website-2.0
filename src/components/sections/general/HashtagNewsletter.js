import React from 'react'
import { TextField, Box, Alert } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';

function HashtagNewsletter() {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("")

  function isValidEmail(emailAdd) {
    return /\S+@\S+\.\S+/.test(emailAdd);
  }

  function handleChange(event){
    const emailAddress = event.target.value
    setEmail(emailAddress)
  }

  console.log(email)

  function submitForm(event){
    event.preventDefault()

    if (!isValidEmail(email)) {
      setError('Email is invalid');
    } else if (isValidEmail(email)) {
      setError('Email is valid');
    } else {
      setError(null);
    }
    
    console.log(email)
  }

  return (
    <div style={{padding: '30px 10px 50px', textAlign: 'center', backgroundColor: '#2E2F6E'}}>
        <Box sx={{pb: 5}}>
          {error === 'Email is invalid' && <center><Alert severity="error" variant="filled" sx={{width: '60%'}}>{error}</Alert></center>}
          {error === 'Email is valid' && <center><Alert severity="success" variant="filled" sx={{width: '60%'}}>Thank You For Subscribing</Alert></center>}
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
                onSubmit={submitForm}
                >
                <TextField 
                  size='small' 
                  type='email'
                  name="email"
                  className='subform-width' 
                  id="outlined-basic" 
                  inputProps={{sx:{color:"white"}}} 
                  placeholder='Email Address' variant="outlined" 
                  value={email}
                  onChange={handleChange}
                />


                <div className='subscribe-btn'>
                  <PrimaryButton bgColor={'#00B9BC'} text={'Subscribe'} />
                </div> 
            </Box>
        </Box>
    </div>
  )
}

export default HashtagNewsletter