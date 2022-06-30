import React from "react";
import { CardSellerInfo } from "../Card/CardSeller/CardSeller";
import produk from "../../Img/airmax.jpg";
import "./OfferComponents.css";

export const OfferComponents = () => {
  return (
    <div className="offer-main d-flex">
      <CardSellerInfo />
      <p className="offer-title">Daftar Produk yang Ditawar</p>
      <div className="offer-content">
        <img className="offer-content-image" src={produk} alt="asd" />
      </div>
    </div>
  );
};
