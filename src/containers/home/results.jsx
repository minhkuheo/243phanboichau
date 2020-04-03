import React, { useState, useEffect, useContext } from "react";
import { Box } from "@material-ui/core";
import latinize from "latinize";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import ItemCard from "./itemCard";
import { ITEMS } from "../../assets/constants/mockupData";
import Loading from "../../components/loading";

function filterItems(items, searchValue) {
  return items.filter(item => {
    return (
      latinize(item.name)
        .toLowerCase()
        .indexOf(latinize(searchValue).toLowerCase()) > -1
    );
  });
}

export default ({ searchValue, items }) => {
  const {
    contextSelectedItemList,
    addToContextShoppingCartList,
    removeFromContextShoppingCartList
  } = useContext(ShoppingCartContext);
  const [loading, setLoading] = useState(true);
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setItemlist(items);
      // setItemlist(ITEMS);
      setLoading(false);
    };
    fetchData();
  }, [items]);

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

  const renderList = filterItems(itemList, searchValue);
  const isItemListEmpty = !renderList[0];

  // console.log("[renderList] ", renderList);
  console.log("[contextSelectedItemList] ", contextSelectedItemList);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {isItemListEmpty ? (
        <h1>Không tìm thấy mặt hàng với tên tương ứng trong danh sách</h1>
      ) : (
        renderList.map(item => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              handleOnSelect={handleOnSelectItem}
            />
          );
        })
      )}
    </Box>
  );
};
