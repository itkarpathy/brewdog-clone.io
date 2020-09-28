import React, { useState, useEffect } from "react";
import "./Search.css";
import Card from "./Card";
import SearchCard from "./SearchCard";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.punkapi.com/v2/beers?beer_name=${query}`
      );

      setItems(result.data);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="search">
      <div className="search__delivery">
        <a href="#">Free delivery when you fill a box*</a>
      </div>
      <SearchCard getQuery={(q) => setQuery(q)} />
      <div className="search__filter">
        <select>
          <option value="selected">selected</option>
          <option value="Price">Price</option>
          <option value="Alc">ABV</option>
        </select>

        <select>
          <option value="selected">selected</option>
          <option value="5">0-5%</option>
          <option value="10">5%- up to stars</option>
        </select>
      </div>

      <Card items={items} />
    </div>
  );
}

export default Search;
