import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge
} from "@material-ui/core";
import { Store, Timeline, ShoppingCart } from "@material-ui/icons";
import * as ROUTES from "../../../assets/constants/routers";
import { ShoppingCartContext } from "../../../contexts/shoppingCartContext";

export default () => {
  const [value, setValue] = useState(0);
  const { contextShoppingCartList } = useContext(ShoppingCartContext);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  const shoopingCartItem = () => (
    <Badge badgeContent={contextShoppingCartList.length} color="secondary">
      <ShoppingCart />
    </Badge>
  );

  return (
    <BottomNavigation value={value} onChange={handleOnChange} showLabels>
      <BottomNavigationAction
        component={Link}
        to={ROUTES.HOME}
        label="Hàng hóa"
        icon={<Store />}
      />
      <BottomNavigationAction
        component={Link}
        to={ROUTES.SHOPPING_CART}
        label="Tính tiền"
        icon={shoopingCartItem()}
      />
      <BottomNavigationAction
        component={Link}
        to={ROUTES.ANALYSIS}
        label="Thống kê"
        icon={<Timeline />}
      />
    </BottomNavigation>
  );
};
