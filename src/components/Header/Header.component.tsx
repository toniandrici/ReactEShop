import * as React from "react";
import { Link } from "react-router-dom";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

import { useStateValue } from "../../StateProvide";

import "./Header.styles.scss";
function HeaderComponent() {
  const { state, dispatch } = useStateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout">
          <div className="nav__item">
            <ShoppingBasketIcon className="itemBasket" fontSize="large" />
            <span className="nav__itemLineTwo nav__basketCount">
              {" "}
              {state.basket.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
