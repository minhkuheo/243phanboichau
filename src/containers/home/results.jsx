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

  // const handleOnClickItem = (item, isSelected) => {
  //   if (isSelected) {
  //     removeFromContextShoppingCartList(item);
  //   } else {
  //     addToContextShoppingCartList(item);
  //   }
  // };

  const handleOnSelectItem = (newItem, newIsSelected, newPrice, newUnit) => {
    if (newIsSelected) {
      removeFromContextShoppingCartList(newItem);
    } else {
      const newItemObj = {
        id: newItem['id'],
        name: newItem['name'],
        unit: newUnit,
        price: newPrice,
        subTotal: newPrice,
      }

      addToContextShoppingCartList(newItemObj);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <p>{searchValue}</p>
      {itemList.map(item => {
        const isSelected = contextSelectedItemIdList.includes(item.id);
        return (
          <ItemCard key={item.id} item={item} selected={isSelected} handleOnSelect={handleOnSelectItem}/>
        );
        // return (
        //   <div
        //     key={item.id}
        //     onClick={() => handleOnClickItem(item, isSelected)}
        //   >
        //     <ItemCard item={item} selected={isSelected} />
        //   </div>
        // );
      })}
    </div>
  );
};
