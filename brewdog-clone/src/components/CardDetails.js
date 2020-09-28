import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function CardDetails({ item }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: item.id,
        name: item.name,
        image: item.image_url,
      },
    });
  };
  return (
    <div>
      <div className="card">
        <img src={item.image_url} alt="img" />
        <div className="card__info">
          <li>{item.name.substring(0, 6)}</li>
          <li>{item.abv}%</li>
          <li>{item.first_brewed}</li>
        </div>
        <div className="card__views">
          <Link to={`/details/${item.id}`}>
            <button className="btn__details">details</button>
          </Link>
        </div>

        <div className="card__buttons">
          <button className="card__btn" onClick={addToBasket}>
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
