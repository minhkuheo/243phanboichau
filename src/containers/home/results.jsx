import React, { useState, useEffect, useContext } from "react";
import { Box } from "@material-ui/core";
import latinize from 'latinize';
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import ItemCard from "./itemCard";
import { ITEMS } from "../../assets/constants/mockupData";
import Loading from "../../components/loading";

function filterItems(items, searchValue) {
  return items.filter(item => {
    return latinize(item.name).toLowerCase().indexOf(latinize(searchValue).toLowerCase()) > -1;
  });
}

export default ({ searchValue }) => {
  const {
    contextSelectedItemList,
    addToContextShoppingCartList,
    removeFromContextShoppingCartList
  } = useContext(ShoppingCartContext);
  const [loading, setLoading] = useState(true);
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setItemlist(ITEMS);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleOnSelectItem = (newItem, newPrice, newUnit) => {
    // Because of contextSelectedItemList has the format:
    //    {
    //      [item.id] = [unit]
    //    }
    if (contextSelectedItemList[newItem.id] === newUnit) {
      removeFromContextShoppingCartList(newItem);
    } else {
      const newItemObj = {
        id: newItem["id"],
        name: newItem["name"],
        unit: newUnit,
        amount: 1,
        price: newPrice,
        subTotal: newPrice
      };

      addToContextShoppingCartList(newItemObj);
    }
  };

  if (loading) return <Loading />;

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {itemList.map(item => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            handleOnSelect={handleOnSelectItem}
          />
        );
      })}
    </Box>
  );
};
