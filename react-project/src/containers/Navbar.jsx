import React from "react";
import menu from "../icons/icon_menu.svg";
import logo from "../logos/logo_yard_sale.svg";
import shoppingCart from "../icons/icon_shopping_cart.svg";
import "../styles/global.css";
import "../styles/navbar.scss";
import DesktopMenu from "../components/DesktopMenu";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="/">All</a>
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
            <li className="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-desktop-menu active">
        <DesktopMenu />
      </div>
    </div>
  );
};

function toggleDesktopMenu() {
  var click = true;

  if (click === false) {
    document.querySelector(".nav-desktop-menu").classList.toggle("active");
    click = true;
  } else {
    document.querySelector(".nav-desktop-menu").classList.toggle("active");
    click = true;
  }
}
export default Navbar;
