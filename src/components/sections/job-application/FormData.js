import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimaryButton from '../../elements/PrimaryButton';
import { Box, Button, Grid, TextField, Modal, Typography, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import axios from 'axios';

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


export default function ApplicationForm() {
  const url = `https://newhashtagng2.herokuapp.com/jobposting/create/`
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/; 
  //const numbers = /^[0-9]+$/;
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [formValues, setformValues] = React.useState(
    {fullName: "", email: "", phoneNumber: "", upload: "", attracted: "", passion: "", portfolio: "", linkedIn : ""}
    )
  const random = Math.floor(10000000000 + Math.random() * 90000000000)
  const tag = `${formValues.fullName + random}`;
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
    } else if (values.fullName.length > 30) {
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
    setformValues({ ...formValues, [name]: type === "file" ? files[0] : value});
  }
  
  async function SendData( key, name, email, phone, file, passion, attracted, portfolio, linkedIn){
    const data = new FormData();
    data.append('tags', key);
    data.append('full_name', name);
    data.append('email_address', email);
    data.append('contact_number', phone);
    data.append('upload_resume', file);
    data.append('most_proud_of_project', passion);
    data.append('job_interest', attracted);
    data.append('portfolio', portfolio);
    data.append('linkedin', linkedIn);
    const response = await axios.post(url, data);
    console.log(response.data)
  }

  function submitForm(event){
    event.preventDefault()
    handleOpen()
    
    setError(isValidForm(formValues))
    
    setValid(true)
    console.log(valid)
    
    console.log(formValues)

    if (formValues.fullName && formValues.email && formValues.phoneNumber 
      && formValues.upload && formValues.passion && formValues.attracted 
      && formValues.portfolio && formValues.linkedIn){
        if((formValues.fullName.length <= 20 && isNaN(formValues.fullName)) && regex.test(formValues.email) 
        && regexURL.test(formValues.linkedIn) && !isNaN(formValues.phoneNumber, formValues.passion)){
          console.log(formValues)
          SendData(tag, formValues.fullName, formValues.email, formValues.phoneNumber, formValues.upload, formValues.passion, formValues.attracted, formValues.portfolio, formValues.linkedIn )
          setformValues({fullName: "", email: "", phoneNumber: "", upload: null, attracted: "", passion: "", portfolio: "", linkedIn : ""})
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
            data-aos="fade-up"
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
                    value={formValues.fullName}
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
                    value={formValues.email}
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    required
                    id="filled-required"
                    label="Contact Number"
                    variant="standard"
                    type='text'
                    focused
                    name='phoneNumber'
                    value={formValues.phoneNumber}
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
                  {
                      formValues.upload && 
                      <Stack direction="row" alignItems="center" spacing={1} sx={{marginTop: '15px'}} >

                        <CheckCircleIcon sx={{marginLeft: '5px', fontSize: '20px', color: 'green'}}/>
                        <Typography variant="overline" gutterBottom sx={{lineHeight: '15px'}}>
                          {formValues.upload.name}
                        </Typography>
                        {/* <Typography variant="p">
                          {formValues.upload.File.name}
                        </Typography> */}
                    </Stack>
                    }
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
                    value={formValues.attracted}
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
                    value={formValues.passion}
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
                    value={formValues.portfolio}
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
                    value={formValues.linkedIn}
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