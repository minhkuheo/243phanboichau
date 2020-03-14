import React, { useContext } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Delete, Save } from '@material-ui/icons';
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
        variant="contained"
        color="secondary"
        startIcon={<Delete />}
        onClick={() => emptyContextShoppingCartList()}
      >
        Hủy toa - Delete
      </Button>
      <Button
        className={classes.margin}
        variant="contained"
        color="secondary"
        startIcon={<Save />}
        style={{ backgroundColor: 'green' }}
      >
        Toa mới - Save and New
      </Button>
    </div>
  );
};
