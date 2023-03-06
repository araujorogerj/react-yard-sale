import React from "react";
import Bici from "../icons/bici.jpg";
import AddToCart from "../icons/bt_add_to_cart.svg";
import "../styles/productcard.scss";

const ProductCard = () => {
  return(
    <div className="product-card">
      <img src={Bici} alt="Bike" />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={AddToCart} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;