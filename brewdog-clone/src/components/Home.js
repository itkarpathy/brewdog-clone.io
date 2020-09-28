import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RedeemIcon from "@material-ui/icons/Redeem";

function Home() {
  return (
    <div className="home">
      <div className="home__boxInfo">
        <div className="home__boxInfoLeft">
          <RedeemIcon />
          <h3>Free delivery when you fill a box*</h3>
        </div>
        <h3 className="box__infoMiddle">
          Orders dispatched in 3-5 working days
        </h3>
        <div className="home__boxInfoRight">
          <ShoppingCartIcon />
          <h3>Shop best-selling bundles</h3>
        </div>
      </div>
      <div className="banner">
        <div className="banner__content">
          <h2>BORN IN ELLON. ENJOYED WORLDWIDE.</h2>
          <h1>Punk Ipa Limited Time Offer</h1>
          <p>
            For a limited time only, get our 48 pack of Punk IPA for £49.95. Now
            with FREE next day delivery included*
          </p>
          <p className="banner__buyBtn">Buy Punk IPA x 48</p>
        </div>
      </div>
      <div className="home__bottom">
        <h1>A BEER MADE BY BREWDOG & THE WIND.</h1>
        <img
          src="http://images.ctfassets.net/b0qgo9rl751g/2atq5DNWhiTPPPhGWi6z4x/2e17ce31bc5576cb26e86b1e28c7c9b5/summer-hp.jpg"
          alt="brewdog.jp"
        />
        <p>
          To celebrate our Brewery being powered by the wind, we’ve made a wind
          powered beer. Hello My Name Is Gale is a juicy and delicious Hazy IPA.
          Notes of pineapple, mango and stone-fruit mix it up. Brewed with oats
          and wheat and left unfiltered for a smooth juicy ride.
        </p>
        <p className="btn">Buy Hello My Name Is Gale</p>
      </div>
    </div>
  );
}

export default Home;
