import React, { useContext } from "react";
import { makeStyles, FormControl, TextField } from "@material-ui/core";
// import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  form: {
    marginRight: 10
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div>
      <p>Admin sẽ thực hiện:</p>
      <ul>
        <li>Thêm mặt hàng</li>
        <li>Cấp nhật giá cho từng mặt hàng (Edit)</li>
        <li>Cập nhật dán nhãn mặt hàng còn hay hết</li>
      </ul>

      <form autoComplete="off" className={classes.root}>
        <fieldset>
          <legend>Nhâp vào</legend>
          <TextField id="ten mat hang" label="Tên sản phẩm" fullWidth />
          <TextField id="ngay nhap mat hang" label="ngày nhập hàng sản phẩm" />
          <TextField id="gia nhap mat hang" label="giá nhập vào" />
          {/* <FormControl>
          </FormControl>
          <FormControl>
          </FormControl> */}
        </fieldset>
        <fieldset>
          <legend>Bán ra</legend>
          <FormControl>
            <TextField id="don vi mat hang" label="Đơn vị tính sản phẩm" />
          </FormControl>
          <FormControl>
            <TextField id="gia ban ra mat hang" label="Giá bán ra" />
          </FormControl>
        </fieldset>
      </form>
    </div>
  );
};
