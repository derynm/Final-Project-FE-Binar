import React from "react";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import { OfferComponents } from "../../Assets/Components/Offer/OfferComponents";
import "./InfoPenawaran.css"

export const InfoPenawaran = () => {
  return (
    <div className="info-penawaran-main">
      <NavbarSecond />
      <div className="container-sm d-flex justify-content-center" style={{backgroundColor:"red"}}>
        <div className="info-penawaran-content " style={{backgroundColor:"blue"}}>
            <OfferComponents/>
        </div>
      </div>
    </div>
  );
};
