import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Views/Home/Home";
import { AddProduct } from "../Views/Product/AddProduct";
import { Auth } from "../Views/Auth/Auth";
import { Login } from "../Views/Auth/Login";
import { Register } from "../Views/Auth/Register";
import { HomeSlider } from "../Assets/Components/HomeSlider/HomeSlider";
import { CardHomePage } from "../Assets/Components/CardHomePage/CardHomePage";
import { DetailProduct } from "../Views/Product/DetailProduct";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cobahomeslider" element={<HomeSlider />} />
      <Route path="/cobacard" element={<CardHomePage />} />

      {/* Auth */}
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Product */}
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/detail-product" element={<DetailProduct />} />
    </Routes>
  );
};
