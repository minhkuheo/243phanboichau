import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Store, Timeline, ShoppingCart } from "@material-ui/icons";
import * as ROUTES from '../../../assets/constants/routers';

export default () => {
  const [value, setValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleOnChange} showLabels>
      <BottomNavigationAction component={Link} to={ROUTES.HOME} label="Hàng hóa" icon={<Store />} />
      <BottomNavigationAction component={Link} to={ROUTES.SHOPPING_CART} label="Tính tiền" icon={<ShoppingCart />} />
      <BottomNavigationAction component={Link} to={ROUTES.ANALYSIS} label="Thống kê" icon={<Timeline />} />
    </BottomNavigation>
  );
};
