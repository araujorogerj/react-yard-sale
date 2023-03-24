import React from "react";
import "../styles/shoppingcart.scss";
import Arrow from "../icons/flechita.svg";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const ShoppingCart = () => {
  const { qty, setQty } = useContext(CartContext);
  const productNum = document.getElementsByClassName("shopping-cart");
  const num = productNum.length;
  setQty(num);

  return (
    <aside className="product-detail">
      <div className="title-container">
        <img
          src={Arrow}
          alt="arrow"
          className="arrow-img"
          onClick={toggleShoppingCart}
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="shopping-cart"></div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>
            <span>$</span>
            <span className="cartTotal">{}</span>,00
          </p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

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

export default ShoppingCart;
