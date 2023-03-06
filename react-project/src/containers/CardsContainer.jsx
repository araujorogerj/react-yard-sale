import React from "react";
import ProductCard from "../components/ProductCard";
import '../styles/cardscontainer.scss';

const CarsContainer = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default CarsContainer;
