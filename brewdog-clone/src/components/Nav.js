import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Nav() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://www.brewdog.com/static/version1597216385/frontend/Born/arcticFox/en_US/images/logo.svg"
            alt=""
          />
        </Link>
        <div className="nav__left__links">
          <li>Beer</li>
          <li>Community</li>
          <li>Locations</li>
          <li>Shop</li>
        </div>
      </div>
      <div className="nav__right">
        <li>
          <Link to="/search">
            <div className="nav__search">
              <h3>Search</h3>
              <SearchIcon />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <div className="nav__login">
              <h3>Hello, {user}</h3>
              <PersonOutlineIcon />
            </div>
          </Link>
        </li>
        <Link to="/checkout">
          <div className="nav__basket">
            <div className="nav__basketLeft">
              <h3>£</h3>
              <h3>{basket.amount}</h3>
            </div>
            <div className="nav__basketRight">
              <img
                src="https://www.brewdog.com/static/version1597216385/frontend/Born/arcticFox/en_US/images/icon-cart-empty-20.svg"
                alt=""
              />
              <p className="nav__basketCircle">{basket.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
