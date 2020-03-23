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
        <ButtonGroup aria-label="outlined price button group">
          <Button
            variant={isRetailSelected ? "contained" : ""}
            color={isRetailSelected ? "primary" : ""}
            onClick={() =>
              handleOnSelect(item, sale.retailPrice, sale.retailUnit)
            }
          >
            {sale.retailPrice} / {sale.retailUnit}
          </Button>
          {sale.wholesaleUnit && (
            <Button
              variant={isWholesaleSelected ? "contained" : ""}
              color={isWholesaleSelected ? "primary" : ""}
              onClick={() =>
                handleOnSelect(item, sale.wholesalePrice, sale.wholesaleUnit)
              }
            >
              {sale.wholesalePrice} / {sale.wholesaleUnit}
            </Button>
          )}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
