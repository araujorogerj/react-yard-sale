import React, { useEffect, useState } from "react";
import AddToCart from "../icons/bt_add_to_cart.svg";
import "../styles/productcard.scss";
import { products } from "../functions/api";
import { addToCart } from "../functions/cartFunctions";

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    products(setProduct);
  }, []);

  return (
    <>
      {product != null
        ? product.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.images} alt={prod.title} className="prod-img"/>
              <div className="product-info">
                <div>
                  <p>
                    <span>$</span>
                    <span className="prod-price">{prod.price}</span>,00
                  </p>
                  <p className="prod-title">{prod.title}</p>
                </div>
                <figure>
                  <img src={AddToCart} alt="Add to cart" className="addToCart"/>
                </figure>
              </div>
            </div>
          ))
        : "no products available"}
    </>
  );
};

export default ProductCard;
