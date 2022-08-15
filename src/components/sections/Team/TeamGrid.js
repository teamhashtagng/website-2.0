import * as React from 'react';
import { Box, Grid } from '@mui/material';
import TeamCard from './TeamCard';
import TeamData from './TeamData';

 export default function TeamGrid (){

    const [desc, setDesc] = React.useState(TeamData)

    function addDesc (id) {
        setDesc(prev => {
            return prev.map(square => {
                console.log(square)
                return square.id === id ? {...square, on: !square.on} : square
            }) 
        })
    }

    return (
        <Box sx={{ flexGrow: 1, mt: '80px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {desc.map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
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