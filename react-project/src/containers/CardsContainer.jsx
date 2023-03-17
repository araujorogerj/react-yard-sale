import React, { useEffect }  from "react";
import ProductCard from "../components/ProductCard";
import '../styles/cardscontainer.scss';
import { products } from "../functions/api";

const CarsContainer = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductCard />
      </div>
    </section>
  );
};

export default CarsContainer;
