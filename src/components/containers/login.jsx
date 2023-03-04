import React from "react";

const login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email adress
          </label>
          <input
            type="email"
            id="password"
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*******"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Login"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default login;