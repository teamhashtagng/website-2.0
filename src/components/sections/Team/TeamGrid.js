import * as React from 'react';
import { Box, Grid } from '@mui/material';
import TeamCard from './TeamCard';
import TeamData from './TeamData';

 export default function TeamGrid (){
    return (
        <Box sx={{ flexGrow: 1, mt: '80px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {TeamData.map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <TeamCard 
                key={_.id}
                profile={_.imge}
                name={_.name}
                role={_.role}
                social={_.social}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
 }