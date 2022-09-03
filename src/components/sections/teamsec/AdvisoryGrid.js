import * as React from 'react';
import { Box, Grid } from '@mui/material';
import AdvisoryCard from './AdvisoryCard';
import TeamData from './AdvisoryData';

 export default function AdvisoryGrid (){

    const [desc, setDesc] = React.useState(TeamData)

    function addDesc (id) {
        setDesc(prev => {
            return prev.map(square => {
                return square.id === id ? {...square, on: !square.on} : {...square, on: true}
            }) 
        })
    }

    return (
        <Box sx={{ flexGrow: 1, mt: '80px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {desc.map((_, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <AdvisoryCard 
                key={_.id}
                profile={_.imge}
                name={_.name}
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