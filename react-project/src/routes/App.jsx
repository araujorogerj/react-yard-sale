import React from "react";
import Layout from "../containers/Layout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../containers/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import AllProducts from "../pages/AllProducts";
import { CartDataProvider } from "../contexts/CartContext.js";

const App = () => {
  return (
    <BrowserRouter>
      <CartDataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </CartDataProvider>
    </BrowserRouter>
  );
};
export default App;
