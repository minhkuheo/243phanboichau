import React, { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import ItemCard from "./itemCard";
import { ITEMS } from "../../assets/constants/mockupData";
import Loading from "../../components/loading";

export default ({ searchValue }) => {
  const {
    contextSelectedItemIdList,
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

  const handleOnClickItem = (item, isSelected) => {
    if (isSelected) {
      removeFromContextShoppingCartList(item);
    } else {
      addToContextShoppingCartList(item);
    }
  };

  if (loading) return <Loading />;
  console.log("[contextSelectedItemIdList] ", contextSelectedItemIdList);
  return (
    <div>
      <p>{searchValue}</p>
      {itemList.map(item => {
        const isSelected = contextSelectedItemIdList.includes(item.id);
        return (
          <div
            key={item.id}
            onClick={() => handleOnClickItem(item, isSelected)}
          >
            <ItemCard item={item} selected={isSelected} />
          </div>
        );
      })}
    </div>
  );
};
