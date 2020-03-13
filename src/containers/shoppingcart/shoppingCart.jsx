import React, { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // FormControl,
  // Select,
  // MenuItem,
  TextField,
  IconButton
} from "@material-ui/core";
import { RemoveShoppingCart } from "@material-ui/icons";
import MainActions from "./mainActions";

function calcTotal(itemList) {
  return itemList.reduce((total, item) => {
    return total + parseInt(item.subTotal);
  }, 0);
}

export default () => {
  const {
    contextShoppingCartList,
    updateContextAmountItem,
    removeFromContextShoppingCartList
  } = useContext(ShoppingCartContext);

  const handleOnRemoveItem = item => {
    removeFromContextShoppingCartList(item);
  };
  const handleOnChangeAmount = idx => event => {
    updateContextAmountItem(event.target.value, idx);
  };

  const total = calcTotal(contextShoppingCartList);
  return (
    <>
      <MainActions />

      <TableContainer component={Paper}>
        <Table aria-label="Hóa đơn tính tiền">
          <TableHead>
            <TableRow>
              <TableCell>Tên hàng</TableCell>
              <TableCell align="right">Đơn vị tính</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Đơn giá</TableCell>
              <TableCell align="right">Thành tiền</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contextShoppingCartList.map((item, idx) => {
              // console.log("[item]  ", item);
              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {/* <FormControl>
                    <Select labelId="unit-select-label" id="unit-select" value={item.price[0].unit}>
                      {item.price.map(priceItem => (
                        <MenuItem key={priceItem.unit} value={priceItem.unit}>
                          {priceItem.unit}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}
                    {item.unit}
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="standard-number"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        min: "1"
                      }}
                      value={item.amount}
                      onChange={handleOnChangeAmount(idx)}
                      style={{ maxWidth: "40px" }}
                    />
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.subTotal}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={handleOnRemoveItem}
                    >
                      <RemoveShoppingCart />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell rowSpan={4}></TableCell>
              <TableCell align="center" colSpan={3}>
                <strong>Tổng cộng</strong>
              </TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
