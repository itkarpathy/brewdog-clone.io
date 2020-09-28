import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // const tax = 4.62;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h1>Order Summary</h1>
            <div className="subtotal__wrapper">
              <div className="subtotal__orders">
                <li>SUBTOTAL </li>
                <li>
                  <strong>{value}</strong>
                </li>
              </div>
              <div className="subtotal__delivery">
                <li>delivery (standard dispatch - 3 - 5 working days)</li>
                <li>$5.95</li>
              </div>
              <div className="subtotal_tax">
                <li>TAX</li>
                <div className="subtotal__taxAmount">
                  <li>£</li>
                  <li>4.62</li>
                </div>
              </div>
              <div className="subtotal__totalAmount">
                <h1>TOTAL</h1>
                <h1>{value}</h1>
              </div>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
