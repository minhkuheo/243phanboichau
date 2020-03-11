import React, { useState, useEffect } from 'react';
import ItemCard from './itemCard';

const test = [1,2];

export default ({searchValue}) => {
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {

  }, []);
  
  return (
    <div>
      <p>{searchValue}</p>
      {
        test.map((item, idx) => (
          <ItemCard key={idx} />
        ))
      }
    </div>
  );
}