import React from "react";
import { CardSellerInfo } from "../Card/CardSeller/CardSeller";
import produk from "../../Img/airmax.jpg";
import "./OfferComponents.css";

export const OfferComponents = ({status,productName,originaPrice,offerPrice,}) => {
  return (
    <div className="offer-main">
      <CardSellerInfo />
      <p className="offer-title">Daftar Produk yang Ditawar</p>
      <div className="offer-content">
        <div className="row">
          <div className="col col-lg-1 col-sm-1 col-2">
            <img className="offer-content-image" src={produk} alt="asd" />
          </div>
          <div className="offer-product col col-lg-11 col-sm-11 col-10">
            <div className="d-flex justify-content-between">
              <p className="offer-status">penawaran produk</p>
              <p className="offer-time"> 12 Apr, 14.04</p>
            </div>
            <div className="offer-product-detail">
              <p className="offer-product-name">Airmax</p>
              <p className="offer-original-price">Rp.250000</p>
              <p className="offer-price">Rp.200000</p>
            </div>
          </div>
        </div>
        <div className="offer-button-group d-flex justify-content-end">
          <button className="offer-button offer-decline not-filled">
            Tolak
          </button>
          <button className="offer-button offer-accept filled">Terima</button>
        </div>
        <hr/>
      </div>
    </div>
  );
};
