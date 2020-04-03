import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "48%",
      marginRight: 10
    },
    [theme.breakpoints.up("lg")]: {
      width: "48%",
      marginRight: 10
    }
  },
  media: {
    height: 140
  },
  spaceButton: {
    marginBottom: theme.spacing(1)
  }
}));

export default ({ item, handleOnSelect }) => {
  const classes = useStyles();
  const { contextSelectedItemList } = useContext(ShoppingCartContext);

  const { id, name, imgUrl } = item;

  const isRetailSelected = contextSelectedItemList[id]
    ? item.retailUnit === contextSelectedItemList[id]
    : false;
  const isWholesaleSelected = contextSelectedItemList[id]
    ? item.wholesaleUnit === contextSelectedItemList[id]
    : false;
  return (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={imgUrl} title={name} />
      <CardContent>
        <Button
          className={classes.spaceButton}
          variant="outlined"
          // variant={isRetailSelected ? "contained" : "outlined"}
          color={isRetailSelected ? "secondary" : "default"}
          endIcon={isRetailSelected ? <Check /> : null}
          onClick={() =>
            handleOnSelect(item, item.retailPrice, item.retailUnit)
          }
          fullWidth
        >
          {item.retailPrice} / {item.retailUnit}
        </Button>

        {item.wholesaleUnit && (
          <Button
            variant="outlined"
            // variant={isWholesaleSelected ? "contained" : "outlined"}
            color={isWholesaleSelected ? "secondary" : "default"}
            endIcon={isWholesaleSelected ? <Check /> : null}
            onClick={() =>
              handleOnSelect(item, item.wholesalePrice, item.wholesaleUnit)
            }
            fullWidth
          >
            {item.wholesalePrice} / {item.wholesaleUnit}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
