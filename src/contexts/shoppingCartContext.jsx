import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  contextShoppingCartList: [],
  contextSelectedItemList: {},
  addToContextShoppingCartList: () => {},
  removeFromContextShoppingCartList: () => {},
  updateContextAmountItem: () => {},
  emptyContextShoppingCartList: () => {}
});

export const ShoppingCartContextProvider = props => {
  const [contextShoppingCartList, updateContextShoppingCartList] = useState([]);
  const [contextSelectedItemList, updateContextSelectedItemIdList] = useState(
    {}
  );

  // LOCAL HELPER FUNCTIONS
  //
  const addSelectedItemIdToContextList = item => {
    const prevObject = { ...contextSelectedItemList };
    prevObject[item.id] = item.unit;
    updateContextSelectedItemIdList(prevObject);
  };
  const removeSelectedItemIdToContextList = item => {
    const prevObject = { ...contextSelectedItemList };
    delete prevObject[item.id];
    updateContextSelectedItemIdList(prevObject);
  };

  // FUNCTIONS TO CONTEXT PROVIDER
  //
  const addToContextShoppingCartList = item => {
    let prevList = [...contextShoppingCartList];
    if (contextSelectedItemList[item.id]) {
      let index;
      const N = contextShoppingCartList.length;
      for (let i = 0; i < N; i++) {
        if (contextShoppingCartList[i].id === item.id) {
          index = i;
          break;
        }
      }

      prevList[index].unit = item.unit;
      prevList[index].price = item.price;
      prevList[index].subTotal = item.price;
    } else {
      prevList.push(item);
    }
    updateContextShoppingCartList(prevList);

    addSelectedItemIdToContextList(item);
  };
  const removeFromContextShoppingCartList = item => {
    const prevList = contextShoppingCartList.filter(
      thisItem => thisItem.id !== item.id
    );
    updateContextShoppingCartList(prevList);

    removeSelectedItemIdToContextList(item);
  };
  const updateContextAmountItem = (newAmount, idx) => {
    let prevList = [...contextShoppingCartList];
    prevList[idx].amount = newAmount;
    prevList[idx].subTotal =
      newAmount * parseInt(prevList[idx].price).toString();
    updateContextShoppingCartList(prevList);
  };
  const emptyContextShoppingCartList = () => {
    updateContextShoppingCartList([]);
    updateContextSelectedItemIdList([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        contextShoppingCartList,
        contextSelectedItemList,
        addToContextShoppingCartList,
        removeFromContextShoppingCartList,
        updateContextAmountItem,
        emptyContextShoppingCartList
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
