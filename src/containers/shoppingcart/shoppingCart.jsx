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
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import { RemoveShoppingCart } from "@material-ui/icons";

export default () => {
  const { contextShoppingCartList } = useContext(ShoppingCartContext);

  return (
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
          {contextShoppingCartList.map(item => {
            console.log("[item]  ", item);
            return (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">
                  <FormControl>
                    <Select labelId="unit-select-label" id="unit-select">
                      {item.price.map(priceItem => (
                        <MenuItem value={priceItem.unit}>
                          {priceItem.unit}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">30000</TableCell>
                <TableCell align="right">60000</TableCell>
                <TableCell align="right">
                  <RemoveShoppingCart color="action" />
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell rowSpan={4}></TableCell>
            <TableCell align="center" colSpan={3}>
              <strong>Tổng cộng</strong>
            </TableCell>
            <TableCell align="right">0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
