import React from 'react';
import { Alert, Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ContactForm(){
    const url = 'https://newhashtagng2.herokuapp.com/contactus/create/'
    const [open, setOpen] = React.useState(true);
    const [error, setError] = React.useState({});
    const [valid, setValid] = React.useState(false);
    const [formData, setFormData] = React.useState(
      {fullName: "", email: "", subject: "", message: ""}
    )

    function isValidForm(values) {
        const errors ={};
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
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

        if (!values.subject){
        errors.subject = "Subject is required !";
        }

        if (!values.message){
        errors.message = "Message is required !";
        }
        return errors;
    
      }
    
      function handleChange (e){
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
            subject: formData.subject,
            message: formData.message,
          })
        };
        fetch(url, requestOptions).then(response => response.json()).then(data => console.log(data));
      }
        
        function submitForm(event){
          event.preventDefault()
          setOpen(true)
          
          setError(isValidForm(formData))
          
          setValid(true)
          console.log(valid)
          
          console.log(formData)
          
          //setFormData({fullName: '', email: '',subject: "", message: ""})
        }

    return(
        <Box className='Contact-form-box'>
          {Object.keys(error).length ? <center> 
            <Collapse in={open}><Alert severity="error" variant="filled" sx={{width: '100%', marginTop: '5%'}}  action={
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
            className='alert-width'>{error.fullName}  { error.email}  { error.subject}  { error.message}</Alert></Collapse>
          </center> : <center></center>}
        {!Object.keys(error).length && valid && <center> 
            <Collapse in={open}><Alert severity="success" variant="filled" sx={{width: '100%', marginTop: '5%'}}  action={
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
            className='alert-width'>Thank You For Contacting Us {SendData()}</Alert></Collapse>
          </center>}
            <h3 className="hero-h1 mt-0 mb-16 reveal-from-bottom contact-h3" data-reveal-delay="200" style={{color: '#2E2F6E'}}>
                Drop us a line
            </h3>
            <Typography variant='p' className='form-subtitle' fontSize={'17px'} sx={{lineHeight: '25px'}}>
                Please feel free to contact us if you have any further questions or concerns. 
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%' },
                }}
                autoComplete="off"
                onSubmit={submitForm}
            >
              <center>
                <TextField
                id="standard-password-input"
                label="Name"
                type="text"
                variant="standard"
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}

                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Email"
                type="email"
                variant="standard"
                name='email'
                value={formData.email}
                onChange={handleChange}                    

                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Subject"
                type="text"
                variant="standard"
                name='subject'
                value={formData.subject}
                onChange={handleChange}

                sx={{mt: '30px'}}
                />
                <TextField
                id="standard-password-input"
                label="Your Message"
                type="text"
                variant="standard"
                name='message'
                value={formData.message}
                onChange={handleChange}

                sx={{mt: '30px'}}
                />
                <div style={{ marginTop: '8%', marginBottom: '8%'}}>
                    <PrimaryButton text={'Submit'} bgColor={'#00B9BC'} onClick={()=> (console.log('hello'))}/>
                </div>
               {/* { <Button variant="contained" onClick={()=> (console.log('hello'))}>Submit</Button>} */}
              </center>
            </Box>
        </Box>
    )
}