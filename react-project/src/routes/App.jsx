import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import ResetPassword from "../containers/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
