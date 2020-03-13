import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ButtonGroup, Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: 20
  },
  media: {
    height: 140
  }
});

export default ({ item, selected, handleOnSelect }) => {
  const classes = useStyles();

  const { id, name, imgUrl, price } = item;
  return (
    <Card className={classes.root}>
      <CardHeader title={name}/>
        <CardMedia className={classes.media} image={imgUrl} title={name} />
        <CardContent>
          <ButtonGroup aria-label="outlined price button group">
            {
              price.map(priceItem => (
                <Button 
                  key={priceItem.unit} 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleOnSelect(item, selected, priceItem.price, priceItem.unit)}
                >
                  {priceItem.price} / {priceItem.unit}
                </Button>
              ))
            }
          </ButtonGroup>
        </CardContent>
    </Card>
  );
};
