import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cf.shopee.vn/file/91e77ff3f8b90f12e432a06a623875cc"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Đĩa Fono
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            75k / hộp
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}