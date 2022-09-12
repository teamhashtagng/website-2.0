import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryButton from '../../elements/PrimaryButton';
import { Alert, Box, Button, Collapse, IconButton, Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
    typography: {
      fontFamily: [
        'Red Hat Display',
        'sans-serif',
      ].join(','),
    },
});


export default function FormData() {
  const url = 'https://newhashtagng2.herokuapp.com/jobposting/create/'
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const regexURL = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'); 
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {fullName: "", email: "", phoneNumber: "", upload: "", attracted: "", passion: "", portfolio: "", linkedIn : ""}
    )
  const random = Math.floor(1000 + Math.random() * 9000)
  const tag = `${formData.fullName + random}`

  
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

    if (!values.phoneNumber){
        errors.phoneNumber = "phoneNumber is required !";
    } else if (isNaN(values.phoneNumber)) {
        errors.phoneNumber = "Contact Must be a Number !  ";
      }

    if (!values.upload){
    errors.attracted = "Resume is required !";
    }

    if (!values.attracted){
    errors.attracted = "Field is required !";
    }
    if (!values.passion){
    errors.passion = "Field is required !";
    }
    if (!values.linkedIn){
    errors.linkedIn = "Linkedin is required !";
    } else if (!regexURL.test(values.linkedIn)){
      errors.email = "Not a valid linkedIn link !  ";
   };
    return errors;

  }

  function handleChange (e){
    const {name, value, files, type} = e.target
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value});
  }
  
  function SendData(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tags : {
          name: tag
        },
        full_name: formData.fullName,
        email_address: formData.email.toLowerCase(),
        contact_number: formData.phoneNumber,
        upload_resume: formData.upload,
        most_proud_of_project: formData.passion,
        job_interest: formData.attracted,
        portfolio: formData.portfolio,
        linkedin: formData.linkedIn
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

    if (formData.fullName && formData.email && formData.phoneNumber 
      && formData.upload && formData.passion && formData.attracted 
      && formData.portfolio && formData.linkedIn){
        if((formData.fullName.length <= 20 && isNaN(formData.fullName)) && regex.test(formData.email) && regexURL.test(formData.linkedIn)){
          SendData()
          setFormData({fullName: "", email: "", phoneNumber: "", upload: null, attracted: "", passion: "", portfolio: "", linkedIn : ""})
      }
    } 
  
    console.log(tag)
  }


    return (
      <ThemeProvider theme={theme}>

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
            className='alert-width'>{error.fullName}  { error.email}  
            { error.passion} {error.phoneNumber} { error.attracted}  { error.linkedIn} 
            { error.portfolio} { error.upload}</Alert></Collapse>
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
            className='alert-width'>Thank You For Applying</Alert></Collapse>
          </center>}
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
            className="form-active"
            onSubmit={submitForm}
        >
            <Grid container spacing={4} sx={{marginTop: '1%', color: '#000000'}}>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    id="form-active filled-required"
                    required
                    label="Full Name"
                    focused
                    variant="standard"
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="Email Address"
                    variant="standard"
                    focused
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="Contact Number"
                    variant="standard"
                    focused
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <input type='file' accept=".pdf, .doc, .docx" name="upload" onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="What part of the job and working with us attracted you the most?"
                    variant="standard"
                    focused
                    name='attracted'
                    value={formData.attracted}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="What is a work, study or passion project that you’re most proud of?"
                    variant="standard"
                    focused
                    name='passion'
                    value={formData.passion}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    id="filled-required"
                    label="Portfolio"
                    variant="standard"
                    focused
                    name='portfolio'
                    value={formData.portfolio}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="LinkedIn"
                    variant="standard"
                    focused
                    name='linkedIn'
                    value={formData.linkedIn}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <PrimaryButton text={'Apply Now'} bgColor={'#00B9BC'} />
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
    );
  }