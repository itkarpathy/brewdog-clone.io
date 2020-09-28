import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div className="checkout__empty">
          <ShoppingCartIcon fontSize="large" />
          <h2>Your basket is emtpy</h2>
          <p>BUT IT DOESN'T HAVE TO BE...</p>
          <Link to="/search">
            <button>ADD A PUNK</button>
          </Link>
        </div>
      ) : (
        <div className="checkout__topTitle">
          <h2 className="checkout__title">Your basket:</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.name}
              image={item.image}
            />
          ))}
        </div>
      )}
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
