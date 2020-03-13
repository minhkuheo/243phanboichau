import React, { useContext } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 0px",
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default () => {
  const classes = useStyles();
  const { emptyContextShoppingCartList } = useContext(ShoppingCartContext);

  return (
    <div className={classes.root}>
      <Button
        className={classes.margin}
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => emptyContextShoppingCartList()}
      >
        Hủy toa
      </Button>
      <Button
        className={classes.margin}
        size="large"
        variant="contained"
        color="secondary"
      >
        Toa mới
      </Button>
    </div>
  );
};
