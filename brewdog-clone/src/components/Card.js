import React from "react";
import "./Card.css";
import CardDetails from "./CardDetails";

function Card({ items }) {
  return (
    <div className="cards">
      {items.map((item) => (
        <CardDetails key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Card;
