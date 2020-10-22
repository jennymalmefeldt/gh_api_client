import React, { useState, useEffect } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchName();
  }, []);

  const fetchName = async () => {
    let response = await axios.get();
  };

  let itemDisplay = item.map((search) => {
    return (

      <>
      <li>
        {item.login}
      </li>
        <Input type="text" name="search" placeholder="Input GH username" />
        <Button name="search">Search</Button>
      </>
    );
  });
};

export default GHSearch;
