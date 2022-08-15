import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function TeamCard({profile, name, role, social}) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={profile}
          alt="Team member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <a href={social.facebook}>
            <Button size="small" startIcon={<FacebookRoundedIcon/>}></Button>
        </a>
        <a href={social.twitter}>
            <Button size="small" startIcon={<TwitterIcon/>}></Button>
        </a>
        <a href={social.linkedIn}>
            <Button size="small" startIcon={<LinkedInIcon/>}></Button>
        </a>
      </CardActions>
    </Card>
  );
}