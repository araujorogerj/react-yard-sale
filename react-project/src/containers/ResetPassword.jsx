import React from "react";
import "../styles/global.css";
import "../styles/resetPassword.scss";
import logo from "../logos/logo_yard_sale.svg";
import emailIcon from "../icons/email.svg";
import Navbar from "../containers/Navbar";

const ResetPassword = () => {
  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">
            Please check your inbox for instructions on how to reset the
            password
          </p>
          <div className="email-image">
            <img src={emailIcon} alt="email" />
          </div>
          <button className="primary-button login-button">Login</button>
          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
