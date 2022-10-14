import React, { useEffect } from 'react'
import Image from '../../elements/Image'
import { Box, Grid } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductData from './ProductData';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Autoplay, Pagination} from "swiper";

const OurProducts = () => {
  useEffect(() => {
    setTimeout(function() {
    AOS.init({ easing: 'ease-out-back', duration: 3000, startEvent: 'DOMContentLoaded', once: false});
  }, []); }, 1000)
  
  return (
    <Box id='product'>
      <div className='container' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <Grid container>
          <Grid item sm={8} md={8}>

          </Grid>
          <Grid item sm={4} md={4}>
            <h1 className='products-h1'>Our <br/>Products</h1>
            <p>Here are few of our own made products</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            
          </Grid>
        </Grid>
      </div>
      <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1800">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        > {ProductData.map((item) => (
          <SwiperSlide>
            <div>
              <Image 
                src={item.image}
                style={{marginTop: '-20px', marginBottom: '0'}}
              />
              <div className='product-btn'>
                <center>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <PrimaryButton text={'View product'} bgColor={'#00B9BC'} />
                  </a> 
                </center>
              </div>
            </div>
          </SwiperSlide>

        ))}
        </Swiper>
      </div>
    </Box>
  )
}

export default OurProducts