import React from "react";
import "./ViewCard.css";
import { Link } from "react-router-dom";

function ViewCard({ view }) {
  return (
    <div className="viewCard">
      <h2 className="viewCard__maskName">{view.name}</h2>
      <div className="viewCard__main">
        <div className="viewCard__mainTitle">
          <h1>{view.name.substring(0, 26)}</h1>
          <li>
            <span className="price__tag">£ {view.id}</span>
          </li>
        </div>
        <div className="viewCard__cicle">
          <li>Alc Vol.</li>
          <li>
            <span className="alc__circle">{view.abv}%</span>
          </li>
        </div>
      </div>
      <div className="viewCard__medium">
        <img src={view.image_url} alt="" />
      </div>
      <div className="viewCard__info">
        <h2>{view.brewers_tips}</h2>
        <p>{view.description}</p>
        <h3>{view.method.twist}</h3>{" "}
        <Link to="/search">
          <button className="info__btn">BACK TO BEERS</button>
        </Link>
      </div>
    </div>
  );
}

export default ViewCard;
