import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Store, Timeline } from "@material-ui/icons";

export default () => {
  const [value, setValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleOnChange} showLabels>
      <BottomNavigationAction label="Hàng hóa" icon={<Store />} />
      <BottomNavigationAction label="Analysis" icon={<Timeline />} />
    </BottomNavigation>
  );
};
