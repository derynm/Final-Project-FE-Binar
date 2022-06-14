import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Views/Home/Home";
import { AddProduct } from "../Views/Product/AddProduct";
import { EditProduct } from "../Views/Product/EditProduct";
import { DeleteProduct } from "../Views/Product/DeleteProduct";
import { Auth } from "../Views/Auth/Auth";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route path="/auth" element={<Auth/>} />

      {/* Product */}
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product" element={<EditProduct />} />
      <Route path="/delete-product" element={<DeleteProduct />} />
    </Routes>
  );
};
