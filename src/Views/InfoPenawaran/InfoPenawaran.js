import React from "react";
import { CardSellerInfo } from "../../Assets/Components/Card/CardSeller/CardSeller";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import { OfferComponents } from "../../Assets/Components/Offer/OfferComponents";
import "./InfoPenawaran.css";

export const InfoPenawaran = () => {
  return (
    <div className="info-penawaran-main">
      <NavbarSecond />
      <div className="container-sm d-flex justify-content-center">
        <div className="info-penawaran-content ">
          <OfferComponents />
        </div>
      </div>
    </div>
  );
};
