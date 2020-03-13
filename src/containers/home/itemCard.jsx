import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  ButtonGroup,
  Button
} from "@material-ui/core";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "50%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%"
    }
  },
  media: {
    height: 140
  }
}));

export default ({ item, handleOnSelect }) => {
  const classes = useStyles();
  const { contextSelectedItemList } = useContext(ShoppingCartContext);

  const { id, name, imgUrl, price } = item;
  return (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={imgUrl} title={name} />
      <CardContent>
        <ButtonGroup aria-label="outlined price button group">
          {price.map(priceItem => {
            const isSelected = contextSelectedItemList[id]
              ? priceItem.unit === contextSelectedItemList[id]
              : false;
            return (
              <Button
                key={priceItem.unit}
                variant={isSelected ? "contained" : ""}
                color={isSelected ? "primary" : ""}
                onClick={() =>
                  handleOnSelect(item, priceItem.price, priceItem.unit)
                }
              >
                {priceItem.price} / {priceItem.unit}
              </Button>
            );
          })}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
