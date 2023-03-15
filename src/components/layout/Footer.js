import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import classNames from "classnames";
import { Grid, Box } from "@mui/material";
import Logo from "../../assets/images/logo-png.png";
// import FooterNav from './partials/FooterNav';
import FooterSocial from "./partials/FooterSocial";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes} style={{ backgroundColor: "white" }}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top" style={{ marginTop: "100px" }}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to="/">
                    <img src={Logo} width="200" alt="" className="float-righ" />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Grid container spacing={4}>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{ color: "#2E2F6E" }}>Company</h5>
                      <Link to="/about-us">
                        <p>About Hashtag</p>
                      </Link>
                      <a href="/service">
                        <p>Our Services</p>
                      </a>
                      <p>
                        <a
                          style={{ color: "#727272" }}
                          href="https://hashtagng.medium.com/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </p>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{ color: "#2E2F6E" }}>Team</h5>
                      <a href="/team#core-team">
                        <p>Core Team</p>
                      </a>
                      <a href="/team#advisory-team">
                        <p>Advisory Team</p>
                      </a>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                      <h5 style={{ color: "#2E2F6E" }}>Careers</h5>
                      <a href="/careers#open-postions">
                        <p>Openings</p>
                      </a>
                      <a href="/careers#FAQs">
                        <p>FAQs</p>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <h5>Contact Us</h5>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={4}>
                  <FooterSocial />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={4} md={4}>
                      <p>
                        <a
                          style={{ color: "#727272" }}
                          href="https://goo.gl/maps/gu2qVUkq8jL249T58"
                          target="_blank"
                        >
                          Office address: 196 Herbert Macaulay Way, Yaba 100001,
                          Lagos
                        </a>
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <p>
                        <a
                          style={{ color: "#727272" }}
                          href="mailto:teamhashtagng@gmail.com"
                        >
                          teamhashtagng@gmail.com
                        </a>{" "}
                        <br />{" "}
                        <a
                          style={{ color: "#727272" }}
                          href="mailto:hello@hashtagng.com"
                        >
                          hello@hashtagng.com
                        </a>
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <p>
                        <a style={{ color: "#727272" }} href="tel:09129403029">
                          0912 940 3029
                        </a>
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <br />
            <br />
            <div
              className="footer-copyright"
              style={{ color: "#9CA9B3", textAlign: "center" }}
            >
              &copy; 2022 Hashtag Digital Services. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
