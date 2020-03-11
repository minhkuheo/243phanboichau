import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: 20
  },
  rootActive: {
    backgroundColor: "green",
    maxWidth: 300,
    marginBottom: 20
  },
  media: {
    height: 140
  }
});

export default ({ item, selected }) => {
  const classes = useStyles();

  const { id, name, imgUrl, price } = item;
  console.log("[selected] ", selected);

  const numberOfPrices = price.length;
  const isFullPrice = numberOfPrices === 2;
  return (
    <Card className={selected ? classes.rootActive : classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Grid container>
            <Grid item xs={isFullPrice ? 6 : 12}>
              <Typography variant="body2" color="textSecondary" component="p">
                {price[0].price} / {price[0].unit}
              </Typography>
            </Grid>
            {isFullPrice && (
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {price[1].price} / {price[1].unit}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
