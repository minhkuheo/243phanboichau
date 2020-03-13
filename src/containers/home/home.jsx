import React, { useState } from "react";
import Searching from './searching';
import Results from './results';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = event => setSearchValue(event.target.value);

  return (
    <div>
      <Searching searchValue={searchValue} onChangeSearchValue={handleSearchChange} />
      <Results searchValue={searchValue}/>
    </div>
  );
};

export default Home;
