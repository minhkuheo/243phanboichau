import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  contextShoppingCartList: [],
  contextSelectedItemIdList: [],
  addToContextShoppingCartList: () => {},
  removeFromContextShoppingCartList: () => {},
  emptyContextShoppingCartList: () => {}
});

export const ShoppingCartContextProvider = props => {
  const [contextShoppingCartList, updateContextShoppingCartList] = useState([]);
  const [contextSelectedItemIdList, updateContextSelectedItemIdList] = useState(
    []
  );

  // LOCAL HELPER FUNCTIONS
  //
  const addSelectedItemIdToContextList = itemId => {
    let prevList = [...contextSelectedItemIdList];
    prevList.push(itemId);
    updateContextSelectedItemIdList(prevList);
  };
  const removeSelectedItemIdToContextList = itemId => {
    const prevList = contextSelectedItemIdList.filter(id => itemId !== id);
    updateContextSelectedItemIdList(prevList);
  };

  // FUNCTIONS TO CONTEXT PROVIDER
  //
  const addToContextShoppingCartList = item => {
    let prevList = [...contextShoppingCartList];
    prevList.push(item);
    updateContextShoppingCartList(prevList);

    addSelectedItemIdToContextList(item.id);
  };
  const removeFromContextShoppingCartList = item => {
    const prevList = contextShoppingCartList.filter(
      thisItem => thisItem.id !== item.id
    );
    updateContextShoppingCartList(prevList);

    removeSelectedItemIdToContextList(item.id);
  };
  const emptyContextShoppingCartList = () => {
    updateContextShoppingCartList([]);
    updateContextSelectedItemIdList([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        contextShoppingCartList,
        contextSelectedItemIdList,
        addToContextShoppingCartList,
        removeFromContextShoppingCartList,
        emptyContextShoppingCartList
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
