import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Grid} from '@mui/material';

function cards(){
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={2} lg={1} >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="h3" color="text.secondary">
            Lizards are a
    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3} md={2} lg={1}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="h3" color="text.secondary">
            Lizards are a
    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3} md={2} lg={1}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="h3" color="text.secondary">
            Lizards are a
    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3} md={2} lg={1}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="h3" color="text.secondary">
            Lizards are a
    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
  );
}
export default cards;