import * as React from 'react';
import { Box, Grid } from '@mui/material';
import TeamCard from './TeamCard';
import TeamData from './TeamData';

 export default function TeamGrid (){

    const [desc, setDesc] = React.useState(TeamData)

    function addDesc (id) {
        setDesc(prev => {
            return prev.map(square => {
                return square.id === id ? {...square, on: !square.on} : {...square, on: true}
            }) 
        })
    }

    return (
      <Box sx={{ flexGrow: 1, mt: '80px', zIndex: '9999'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {desc.map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <TeamCard 
                key={_.id}
                profile={_.imge}
                name={_.name}
                role={_.role}
                social={_.social}
                description={_.description}
                state={_.on}
                handleClick={() => addDesc(_.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
 }