import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import * as FIREBASE_NODES from "./collectionNames";

const firebaseConfig = {
  apiKey: "AIzaSyDaC0-_Vzy2XEUpVtB4iWE8GWFka7NVDHQ",
  authDomain: "phanboichau243hp.firebaseapp.com",
  databaseURL: "https://phanboichau243hp.firebaseio.com",
  projectId: "phanboichau243hp",
  storageBucket: "phanboichau243hp.appspot.com",
  messagingSenderId: "867104021646",
  appId: "1:867104021646:web:98edb9c4e13d2fd194bddf",
  measurementId: "G-BN0FYER40J"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

// ********************************************************** //
export const getItemLists = () => {
  return db
    .collection(FIREBASE_NODES.ITEMSTORAGE)
    .doc(FIREBASE_NODES.RETAILS)
    .collection(FIREBASE_NODES.RETAILITEMS)
    .get();
};
// ********************************************************** //

export const createGroceryList = (userName, userId) => {
  return db.collection("groceryLists").add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    createdBy: userId,
    users: [
      {
        userId: userId,
        name: userName
      }
    ]
  });
};

export const getGroceryList = groceryListId => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .get();
};

export const getGroceryListItems = groceryListId => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .collection("items")
    .get();
};

export const streamGroceryListItems = (groceryListId, observer) => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .collection("items")
    .orderBy("created")
    .onSnapshot(observer);
};

export const addUserToGroceryList = (userName, groceryListId, userId) => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .update({
      users: firebase.firestore.FieldValue.arrayUnion({
        userId: userId,
        name: userName
      })
    });
};

export const addGroceryListItem = (item, groceryListId, userId) => {
  return getGroceryListItems(groceryListId)
    .then(querySnapshot => querySnapshot.docs)
    .then(groceryListItems =>
      groceryListItems.find(
        groceryListItem =>
          groceryListItem.data().name.toLowerCase() === item.toLowerCase()
      )
    )
    .then(matchingItem => {
      if (!matchingItem) {
        return db
          .collection("groceryLists")
          .doc(groceryListId)
          .collection("items")
          .add({
            name: item,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: userId
          });
      }
      throw new Error("duplicate-item-error");
    });
};
