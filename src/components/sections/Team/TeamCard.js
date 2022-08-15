import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function TeamCard({profile, name, role, social}) {
  return (
    <Card className='Team-card' 
      sx={{ maxWidth: 310, boxShadow: 'none', backgroundColor: '#e5e7ec'}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={profile}
          alt="Team member"
          id='profile-img'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" id='Team-card-name' component="div" color='#2E2F6E'>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: 'center', mb: '10px'}} >
        <a href={social.Instagram} target='_blank'>
            <IconButton size="medium" sx={{ color: '#2E2F6E'}}><InstagramIcon/></IconButton>
        </a>
        <a href={social.Twitter} target='_blank'>
            <IconButton size="medium" sx={{ color: '#2E2F6E'}}><TwitterIcon/></IconButton>
        </a>
        <a href={social.LinkedIn} target='_blank'>
            <IconButton size="medium" sx={{ color: '#2E2F6E'}}><LinkedInIcon/></IconButton>
        </a>
      </CardActions>
    </Card>
  );
}