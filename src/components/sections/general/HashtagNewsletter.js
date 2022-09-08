import React from 'react'
import { TextField, Box, Alert, Collapse, IconButton } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function HashtagNewsletter() {
  const url = 'https://newhashtagng2.herokuapp.com/contactus/create_subscription/'
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("")

  function isValidEmail(emailAdd) {
    return /\S+@\S+\.\S+/.test(emailAdd);
  }

  function handleChange(event){
    const emailAddress = event.target.value
    setEmail(emailAddress)
  }

  async function SendData(data){
    try {
      console.log(data)
      // make axios post request
      const response = await axios.post( url,
        data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
      });
      console.log(response.data)
    } catch(error) {
      console.log(error.response)
    }
  }

  function submitForm(event){
    event.preventDefault()
    setOpen(true)

    let data = JSON.stringify({
      email: email
    })

    if (!isValidEmail(email)) {
      setError('Email is invalid');
    } else if (isValidEmail(email)) {
      setError('Email is valid');
      SendData(data)
    } else {
      setError(null);
    }
    

    console.log(email)

    setEmail("")
  }

  return (
    <div style={{padding: '30px 10px 50px', textAlign: 'center', backgroundColor: '#2E2F6E'}}>
        <Box sx={{pb: 5}}>
          {error === 'Email is invalid' && <center> 
            <Collapse in={open}><Alert severity="error" variant="filled"  action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
            }
            className='alert-width'>{error}</Alert></Collapse>
          </center>}

          {error === 'Email is valid' && <center>
            <Collapse in={open}><Alert severity="success" variant="filled" 
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
                }
              className='alert-width'>Thank You For Subscribing</Alert></Collapse>
            </center>}

            <h4 style={{color: '#fff'}}>Subscribe to Hashtag Newsletter</h4>
            <p style={{marginTop: '-15px', color: '#fefefe'}}>and be the first to get our juicy information </p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0 },
                    position: 'relative',
                }}
                // className='subform-width'
                autoComplete="on"
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