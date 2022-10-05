import React, { useRef } from 'react';
import { Alert, Box, Button, Modal, TextField, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';
import emailjs from '@emailjs/browser';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

export default function ContactForm(){
    const url = 'https://newhashtagng2.herokuapp.com/contactus/create/'
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState({});
    const [valid, setValid] = React.useState(false);
    const [formData, setFormData] = React.useState(
      {fullName: "", email: "", subject: "", message: ""}
    )

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const form = useRef()

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
          

          if (formData.fullName && formData.email && formData.subject && formData.message){
            if((formData.fullName.length <= 20 && isNaN(formData.fullName)) && regex.test(formData.email)){
              SendData()
              emailjs.sendForm(
                "service_xebv99g",
                // service_xebv99g
                "template_brdmdz5",
                // template_brdmdz5
                form.current,
                "user_5DWzDq3qay2fpLzpX1XoN"
                // user_5DWzDq3qay2fpLzpX1XoN
              )
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );
              setFormData({fullName: '', email: '',subject: "", message: ""})
            }
          } 
          //setFormData({fullName: '', email: '',subject: "", message: ""})
        }

    return(
        <Box className='Contact-form-box' data-aos="fade-up">
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
                { error.subject} {error.message}
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
                <Typography id="keep-mounted-modal-title" variant="h6" component="h6" style={{mt: 2, mb: 5 }}>
                  Thanks for your submission
                </Typography>

                <Link to='/'>
                  <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#00B9BC', mt: 5}}>Continue</Button>
                </Link>
              </Box>
            </Modal>
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
                ref={form}
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
                    <PrimaryButton text={'Submit'} bgColor={'#00B9BC'}/>
                </div>
              </center>
            </Box>
        </Box>
    )
}