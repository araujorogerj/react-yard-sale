import React from "react";
import "../styles/shoppingcart.scss";
import Close from "../icons/icon_close.png";
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
        <img src={Arrow} alt="arrow" className="arrow-img" onClick={toggleShoppingCart}/>
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>
            <span>$</span>
            <span id="product-price">30</span>,00
          </p>
          <img src={Close} alt="close" />
        </div>
        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>
            <span>$</span>
            <span id="product-price">30</span>,00
          </p>
          <img src={Close} alt="close" />
        </div> 
        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>
            <span>$</span>
            <span id="product-price">30</span>,00
          </p>
          <img src={Close} alt="close" />
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>
            <span>$</span>
            <span>{}</span>,00
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
