import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";

const Description = () => {

  useEffect(() => {
    AOS.init({ easing: 'ease-out-back', duration: 3000});
  }, []);

  return (
    <div className='container' data-aos="fade-up">
      <Box className='about-quote'>
        <p style={{fontSize: '100px', paddingTop: '30px', paddingBottom: '-150px', position: 'relative', color: 'white', marginBottom: '0'}}>"</p>
        <p style={{color: 'white'}}>We are a team of young and passionate minds. And we have a goal, which is to “make things work,” especially at home in Africa.</p>
      </Box>
    </div>
  )
}

export default Description