import React, { useState } from "react";
import Searching from "./searching";
import Results from "./results";
import { getItemLists } from "../../firebase";
import Loading from "../../components/loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState();
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = event => setSearchValue(event.target.value);

  React.useEffect(() => {
    const fetchItems = async () => {
      const itemsSnapshot = await getItemLists();

      const myItems = itemsSnapshot.docs.map(docSnapshot => docSnapshot.data());
      console.log("[myItems] ", myItems);
      setItems(myItems);
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Searching
        searchValue={searchValue}
        onChangeSearchValue={handleSearchChange}
      />
      <Results items={items} searchValue={searchValue} />
    </div>
  );
};

export default Home;
