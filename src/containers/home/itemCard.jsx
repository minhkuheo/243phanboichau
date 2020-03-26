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

  const { id, name, imgUrl, sale } = item;

  const isRetailSelected = contextSelectedItemList[id]
    ? sale.retailUnit === contextSelectedItemList[id]
    : false;
  const isWholesaleSelected = contextSelectedItemList[id]
    ? sale.wholesaleUnit === contextSelectedItemList[id]
    : false;
  return (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={imgUrl} title={name} />
      <CardContent>
        <Button
          className={classes.spaceButton}
          variant={isRetailSelected ? "contained" : "outlined"}
          color={isRetailSelected ? "secondary" : "default"}
          endIcon={isRetailSelected ? <Check /> : null}
          onClick={() =>
            handleOnSelect(item, sale.retailPrice, sale.retailUnit)
          }
          fullWidth
        >
          {sale.retailPrice} / {sale.retailUnit}
        </Button>

        {sale.wholesaleUnit && (
          <Button
            variant={isWholesaleSelected ? "contained" : "outlined"}
            color={isWholesaleSelected ? "secondary" : "default"}
            endIcon={isWholesaleSelected ? <Check /> : null}
            onClick={() =>
              handleOnSelect(item, sale.wholesalePrice, sale.wholesaleUnit)
            }
            fullWidth
          >
            {sale.wholesalePrice} / {sale.wholesaleUnit}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
