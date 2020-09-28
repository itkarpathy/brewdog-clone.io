import React, { useState, useEffect } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ViewCard from "./ViewCard";

function Details() {
  const { id } = useParams({});
  const [views, setViews] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.punkapi.com/v2/beers/${id}`);

      console.log(result.data);

      setViews(result.data);
    };
    fetchItems();
  }, [id]);

  return (
    <div className="details">
      {views.map((view) => (
        <ViewCard key={view.id} view={view} />
      ))}
    </div>
  );
}

export default Details;
