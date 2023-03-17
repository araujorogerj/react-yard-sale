import React from "react";
import Navbar from "../containers/Navbar";
import CardsContainer from "../containers/CardsContainer";
import Logo from "../logos/logo_yard_sale.svg";
import ProductCard from "../components/ProductCard";
import "../styles/global.css";
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="title">
          <img src={Logo} className="home-logo" alt="logo"/>
        </div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
