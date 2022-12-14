import React, { useEffect } from "react";
import { TextField, Box, Alert, Collapse, IconButton } from "@mui/material";
import PrimaryButton from "../../elements/PrimaryButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function HashtagNewsletter() {
  const url =
    "https://hashtagbackend.herokuapp.com/contactus/create_subscription/";
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");

  function isValidEmail(emailAdd) {
    return /\S+@\S+\.\S+/.test(emailAdd);
  }

  function handleChange(event) {
    const emailAddress = event.target.value;
    setEmail(emailAddress);
  }

  function SendData(email) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: email,
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function submitForm(event) {
    event.preventDefault();
    setOpen(true);

    let data = JSON.stringify({
      email: email.toLowerCase(),
    });

    if (!isValidEmail(email)) {
      setError("Email is invalid");
    } else if (isValidEmail(email)) {
      setError("Email is valid");
      SendData(data);
      setEmail("");
    } else {
      setError(null);
    }

    console.log(email);
  }

  useEffect(() => {
    setTimeout(function () {
      AOS.init({
        easing: "ease-out-back",
        duration: 3000,
        startEvent: "DOMContentLoaded",
        once: false,
      });
    }, []);
  }, 1000);

  return (
    <div
      style={{
        padding: "30px 10px 50px",
        textAlign: "center",
        backgroundColor: "#2E2F6E",
      }}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <Box sx={{ pb: 5 }}>
        {error === "Email is invalid" && (
          <center>
            <Collapse in={open}>
              <Alert
                severity="error"
                variant="filled"
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
                className="alert-width"
              >
                {error}
              </Alert>
            </Collapse>
          </center>
        )}

        {error === "Email is valid" && (
          <center>
            <Collapse in={open}>
              <Alert
                severity="success"
                variant="filled"
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
                className="alert-width"
              >
                Thank You For Subscribing
              </Alert>
            </Collapse>
          </center>
        )}

        <h4 style={{ color: "#fff" }}>Subscribe to Hashtag Newsletter</h4>
        <p style={{ marginTop: "-15px", color: "#fefefe" }}>
          and be the first to get our juicy information{" "}
        </p>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0 },
            position: "relative",
          }}
          // className='subform-width'
          autoComplete="on"
          onSubmit={submitForm}
        >
          <TextField
            size="small"
            type="email"
            name="email"
            className="subform-width"
            id="outlined-basic"
            inputProps={{ sx: { color: "white" } }}
            placeholder="Email Address"
            variant="outlined"
            value={email}
            onChange={handleChange}
          />

          <div className="subscribe-btn">
            <PrimaryButton bgColor={"#00B9BC"} text={"Subscribe"} />
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default HashtagNewsletter;
