import React from "react";
import CarsContainer from "../containers/CardsContainer";
import Navbar from "../containers/Navbar";
import "../styles/products.scss";
import Logo from "../logos/logo_yard_sale.svg";

const AllProducts = () => {
  return (
    <div>
      <Navbar />
      <div className="product-page">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="products-logo" />
        </div>
        <CarsContainer />
      </div>
    </div>
  );
};

export default AllProducts;
