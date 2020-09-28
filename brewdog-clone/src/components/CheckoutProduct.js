import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkout__left">
        <img src={image} alt="" />
        <div className="checkout__list">
          <h2>{title}</h2>
        </div>
        <div className="checkout__remove">
          <div className="checkout__removePrice">
            <li>£</li>
            <h3>{id}</h3>
          </div>

          <button onClick={removeFromBasket}>X</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
