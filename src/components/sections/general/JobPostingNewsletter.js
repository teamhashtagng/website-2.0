import React from 'react'
import { Grid, Box } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton'

function JobPostingNewsletter (){
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [formData, setFormData] = React.useState(
    {fullName: "", email: ""}
  )

  function isValidEmail(emailAdd) {
    return /\S+@\S+\.\S+/.test(emailAdd);
  }

  const handleChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value});
  
  console.log(formData)

  function submitForm(event){
    event.preventDefault()
    setOpen(true)

    if (!isValidEmail(formData.email)) {
      setError('Email is invalid');
    } else if (isValidEmail(formData.email)) {
      setError('Email is valid');
    } else {
      setError(null);
    }
    

    console.log(formData)

    setFormData({fullName: '', email: ''})
  }


  return (
    <div style={{textAlign: 'center', backgroundColor: '#2E2F6E', paddingBottom: '3%'}} className='newletter-mobile'>
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
                        placeholder='Name' type="text" 
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