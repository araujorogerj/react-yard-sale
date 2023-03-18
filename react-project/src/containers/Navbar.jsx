import React from "react";
import menu from "../icons/icon_menu.svg";
import logo from "../logos/logo_yard_sale.svg";
import shoppingCart from "../icons/icon_shopping_cart.svg";
import "../styles/global.css";
import "../styles/navbar.scss";
import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";
import ShoppingCart from "../components/ShoppinCart";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const { qty, setQty } = useContext(CartContext);
  return (
    <div>
      <nav>
        <img
          src={menu}
          alt="menu"
          className="menu"
          onClick={toggleMobileMenu}
        />
        <div className="mobileMenu inactive">
          <MobileMenu />
        </div>
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="/products">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={toggleDesktopMenu}>
              platzi@example.com
            </li>
            <li className="navbar-shopping-cart" onClick={toggleShoppingCart}>
              <img src={shoppingCart} alt="shopping cart" />
              <div>{qty}</div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-desktop-menu inactive">
        <DesktopMenu />
      </div>
      <div className="shopping-cart-desktop inactive">
        <ShoppingCart />
      </div>
    </div>
  );
};

function toggleDesktopMenu() {
  var click = true;

  if (click === false) {
    document.querySelector(".nav-desktop-menu").classList.toggle("inactive");
    click = true;
  } else {
    document.querySelector(".nav-desktop-menu").classList.toggle("inactive");
    click = true;
  }
}

function toggleMobileMenu() {
  var click = true;
  if (click === false) {
    document.querySelector(".mobileMenu").classList.toggle("inactive");
    click = true;
  } else {
    document.querySelector(".mobileMenu").classList.toggle("inactive");
    click = true;
  }
}

function toggleShoppingCart() {
  var click = true;
  if (click === false) {
    document
      .querySelector(".shopping-cart-desktop")
      .classList.toggle("inactive");
    click = true;
  } else {
    document
      .querySelector(".shopping-cart-desktop")
      .classList.toggle("inactive");
    click = true;
  }
}

export default Navbar;
