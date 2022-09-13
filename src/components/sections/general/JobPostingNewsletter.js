import React from 'react'
import { Grid, Box, Collapse, IconButton, Alert } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton'
import CloseIcon from '@mui/icons-material/Close';
import { Verified } from '@mui/icons-material';

function JobPostingNewsletter (){
  const url = 'https://newhashtagng2.herokuapp.com/jobposting/create_subscription/'
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {fullName: "", email: ""}
  )

  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  function isValidForm(values) {
    const errors ={};
    if (!values.fullName){
      errors.fullName = "Name is required !  ";
    } else if (values.fullName.length > 20) {
      errors.fullName = 'Name cannot exceed 20 characters !  ';
    } else if (!isNaN(values.fullName)) {
      errors.fullName = "Must input string !  ";
    }

    if (!values.email){
      errors.email = "Email is required !  ";
    }  else if (!regex.test(values.email)){
       errors.email = "This is not a valid email !  ";
     };
    return errors;

  }

  function handleChange(e){ 
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value});
  }

  function SendData(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email.toLowerCase(),
      })
    };
    fetch(url, requestOptions).then(response => response.json()).then(data => console.log(data));
  }
     
    function submitForm(event){
      event.preventDefault()
      setOpen(true)
      
      setError(isValidForm(formData))   
      setValid(true)

      if (formData.fullName && formData.email){
        if((formData.fullName.length <= 20 && isNaN(formData.fullName)) && regex.test(formData.email)){
          SendData()
          setFormData({...formData, fullName: '', email: ''})
        }
      } 
  }



  return (
    <div style={{textAlign: 'center', backgroundColor: '#2E2F6E', paddingBottom: '3%'}} className='newletter-mobile'>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{marginTop: '1%'}}>
        {Object.keys(error).length ? <center> 
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
            className='alert-width'>{error.fullName}{ error.email}</Alert></Collapse>
          </center> : <center></center>}
        {Object.keys(error).length === 0 && valid && <center> 
            <Collapse in={open}><Alert severity="success" variant="filled"  action={
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
          <Box >
              <h4 id='newsletter-text'>Subscribe to job posting newsletter</h4>
              <p id='newsletter-text'>and be the first to be notified </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                className='form-width'
                autoComplete="off"
                onSubmit={submitForm}
                >
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={12}>
                    <center>
                      <input 
                        className='border-white subform-width-1' 
                        id="outlined-basic-1" 
                        placeholder='Name' 
                        type="text" 
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      <input 
                        className='border-white subform-width-2' 
                        id="outlined-basic-2" 
                        placeholder='Email Address' 
                        type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className='job-subscribe-btn'>
                        <PrimaryButton bgColor={'#00B9BC'} text={'Subscribe'} />
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