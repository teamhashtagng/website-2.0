import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import PrimaryButton from '../../elements/PrimaryButton';

export default function CTA() {
  return (
    <React.Fragment>
        <Container maxWidth='false' sx={{backgroundColor: '#2E2F6E'}}>
            <Container maxWidth="sm" style={{padding: '40px 0px 50px', textAlign: 'center'}}>
                    <Grid container spacing={1} justifyContent='center'>
                        <Grid item xs={12} md={8}>
                            <Typography variant='p' className='Cta-text' component='div' sx={{}}>Love to be part of our team?</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PrimaryButton bgColor={'#00B9BC'} text={'  Join Us  '} />
                        </Grid>
                    </Grid>
            </Container>
        </Container>
    </React.Fragment>
  );
}
