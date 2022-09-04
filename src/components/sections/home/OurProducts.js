import React from 'react'
import Image from '../../elements/Image'
import Partycoo from '../../../assets/images/section/HomePage/Partycoo-project.png'
import { Box, Grid } from '@mui/material'

const OurProducts = () => {
  return (
    <Box id='product'>
      <div className='container'>
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
      <Image 
          src={Partycoo}
          style={{marginTop: '-20px'}}
        />
    </Box>
  )
}

export default OurProducts