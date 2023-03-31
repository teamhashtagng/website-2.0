import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import Image from "../../elements/Image";

// images
import WebDev from "../../../assets/images/section/ServicesPage/web-dev.png";
import MobileDev from "../../../assets/images/section/ServicesPage/mobile-dev.png";
import Brand from "../../../assets/images/section/ServicesPage/brand.png";
import Consult from "../../../assets/images/section/ServicesPage/consult.png";
import SEO from "../../../assets/images/section/ServicesPage/seo.png";
import Marketing from "../../../assets/images/section/ServicesPage/marketing.png";
import DataAnalysis from "../../../assets/images/section/ServicesPage/data-stream.png";
import CloudComputing from "../../../assets/images/section/ServicesPage/cloud.png";

//svgs
import ServiceDots from "../../../assets/images/section/ServicesPage/Dotted-Top.svg";
import ServiceMiddle from "../../../assets/images/section/ServicesPage/Dotted-middle.svg";
// import ServiceFull from "../../../assets/images/section/ServicesPage/Dotted-Full.svg";
import DottedImage from "../../../assets/images/section/CareersFAQsPage/Dotted-about-here.svg";

const services = [
  {
    id: 1,
    image: WebDev,
    title: "Website Development",
    text: `Our team of web development experts can help you 
    design or redesign your website to create an exciting and 
    professional online presence.`,
  },
  {
    id: 2,
    image: MobileDev,
    title: "App Development",
    text: `Our app developers can build modern, bespoke application
     software for use on web browsers, Android and iOS systems, 
     which are well-aligned with your business and security 
     requirements.`,
  },
  {
    id: 3,
    image: Brand,
    title: "Brand Design",
    text: `Through our design services, we help you communicate 
    what makes your business unique and promote brand recognition.`,
  },
  {
    id: 4,
    image: Consult,
    title: "Technical Consulting",
    text: `Our consultants have a wealth of experience and expertise 
    in strategy, design, technology, and industry knowledge, and 
    they use this to deliver insights and solutions for businesses.`,
  },
  {
    id: 5,
    image: SEO,
    title: "SEO Optimization",
    text: `With our data-driven SEO optimization professionals, Your 
    brand's website will be more visible to your potential 
    customers/investors, which will in turn increase the traffic 
    on your website and give your business a chance to sell your 
    product and render your services to a greater number of people.`,
  },
  {
    id: 6,
    image: Marketing,
    title: "Digital Marketing",
    text: `Our digital marketers have a strategic approach to ensure 
    that all of your products and services are targeted appropriately 
    and results in profitable business.`,
  },
  {
    id: 7,
    image: DataAnalysis,
    title: "Data analysis and visualization",
    text: `Data makes the world go round, with our skilled data analyst, 
    we use surveys to create better problem-solving strategies for your 
    business and ensure that your products look simple enough to your customers.`,
  },
  {
    id: 8,
    image: CloudComputing,
    title: "Cloud hosting/Support",
    text: `We can help your development/technical team host and scale 
    application workloads in the Cloud (including Azure, AWS and 
    Google clouds). With quality architectural knowledge and years 
    of practical experience, our team is dedicated to help your business 
    succeed by delivering reliable services and saving costs at the same time.`,
  },
];

export default function Service() {
  return (
    <React.Fragment>
      <Box sx={{ position: "relative" }}>
        <Image
          className="service-dotted"
          src={ServiceDots}
          style={{
            position: "absolute",
            right: "0",
            marginTop: "-200px",
          }}
        />
        <Image
          className="service-dotted"
          src={ServiceMiddle}
          style={{
            position: "absolute",
            right: "10%",
            marginTop: "380px",
          }}
        />
        <Image
          className="service-dotted"
          src={ServiceMiddle}
          style={{
            position: "absolute",
            right: "20%",
            marginTop: "88rem",
          }}
        />
        <Image
          className="service-dotted"
          src={ServiceMiddle}
          style={{
            position: "absolute",
            right: "0",
            bottom: "10rem",
            marginTop: "-220px",
          }}
        />
        <Container data-aos="fade-up">
          {services.map((data) => (
            <Box key={data.id}>
              {data.id % 2 === 0 ? (
                <Grid
                  container
                  spacing={8}
                  sx={{ my: "10%" }}
                  justifyContent="center"
                  alignItems="center"
                  data-aos="fade-up"
                  className="service-reverse"
                >
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="h5"
                      style={{
                        color: "#2E2F6E",
                        fontWeight: 700,
                        marginBottom: "1%",
                      }}
                      component="div"
                    >
                      {data.title}
                    </Typography>
                    <Typography variant="p" component="div">
                      {data.text}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Image src={data.image} />
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  spacing={8}
                  sx={{ my: "10%" }}
                  justifyContent="center"
                  alignItems="center"
                  data-aos="fade-up"
                >
                  <Grid item xs={12} sm={6}>
                    <Image src={data.image} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="h5"
                      style={{
                        color: "#2E2F6E",
                        fontWeight: 700,
                        marginBottom: "1%",
                      }}
                      component="div"
                    >
                      {data.title}
                    </Typography>
                    <Typography variant="p" component="div">
                      {data.text}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          ))}
        </Container>
        <Image className="middle-dotted-Service" src={DottedImage} alt="Hero" />
      </Box>
    </React.Fragment>
  );
}
