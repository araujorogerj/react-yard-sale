import React from "react";
import Navbar from "../containers/Navbar";
import Logo from "../logos/logo_yard_sale.svg";
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
        
      </div>
    </div>
  );
};

export default Home;
