import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryButton from '../../elements/PrimaryButton';
import { Box, Button, Grid, TextField, Modal, Typography, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

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
  const numbers = /^[0-9]+$/;
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {fullName: "", email: "", phoneNumber: "", upload: "", attracted: "", passion: "", portfolio: "", linkedIn : ""}
    )
  const random = Math.floor(1000 + Math.random() * 9000)
  const tag = `${formData.fullName + random}`;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    textAlign: 'center',
    boxShadow: "rgb(145 158 171 / 20%) 0px 11px 15px -7px, rgb(145 158 171 / 14%) 0px 24px 38px 3px, rgb(145 158 171 / 12%) 0px 9px 46px 8px",
    padding: "32px",
    borderRadius: "25px"
  };

  
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
    } else if (!values.phoneNumber.match(numbers)) {
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
    handleOpen()
    
    setError(isValidForm(formData))
    
    setValid(true)
    console.log(valid)
    
    console.log(formData)

    if (formData.fullName && formData.email && formData.phoneNumber 
      && formData.upload && formData.passion && formData.attracted 
      && formData.portfolio && formData.linkedIn){
        if((formData.fullName.length <= 20 && isNaN(formData.fullName)) 
          && regex.test(formData.email) && regexURL.test(formData.linkedIn) 
          && formData.phoneNumber.match(numbers)){
          SendData()
          setFormData({fullName: "", email: "", phoneNumber: "", upload: null, attracted: "", passion: "", portfolio: "", linkedIn : ""})
      }
    } 
  }


    return (
      <ThemeProvider theme={theme}>
        {Object.keys(error).length ? <center> 
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <Box sx={style} style={{color: 'red'}}>
              <ErrorIcon sx={{fontSize: '100px'}}/>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{color: 'red'}}>
                Error Submiting This Form!
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2, mb: 4 }}>
                {error.fullName}  { error.email}  
                { error.passion} {error.phoneNumber} { error.attracted}  { error.linkedIn} 
                { error.portfolio} { error.upload}
              </Typography>

              <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#00B9BC'}}>Continue</Button>
            </Box>
          </Modal>
          </center> : <center></center>}
        {!Object.keys(error).length && valid && <center> 
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <Box sx={style} style={{color: 'green'}}>
                <CheckCircleIcon sx={{fontSize: '100px'}}/>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{color: '#2E2F6E'}}>
                  Your application was successful
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2, mb: 3 }}>
                  A message has been sent to your email, 
                  our team will get back to  you shortly. 
                </Typography>
                
                <Link to='/careers'>
                  <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#00B9BC'}}>Continue</Button>
                </Link>
              </Box>
            </Modal>
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
                    type='text'
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
                    type='email'
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
                    type='number'
                    focused
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Stack direction="row" alignItems="center" spacing={4} sx={{marginLeft: '1%'}}>
                    <label for="upload">CV / Résumé*</label>
                    <Button variant="contained" component="label" sx={{backgroundColor: '#2E2F6E', borderRadius: '10px', fontSize: '16px', fontWeight: 400}}>
                      Upload your CV
                      <input required hidden id='upload' type='file' accept=".pdf, .doc, .docx" name="upload" onChange={handleChange}/>
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="What part of the job and working with us attracted you the most?"
                    variant="standard"
                    type='text'
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
                    type='text'
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
                    type='text'
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
                    type='text'
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