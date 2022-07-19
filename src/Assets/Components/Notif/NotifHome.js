import React from "react";
import sepatu from "../../Img/airmax.jpg";
import "./NotifHome.css";

export const NotifHome = ({
  photoProduct,
  productName,
  price,
  offersPrice,
}) => {
  return (
    <>
      <div className="row notif-home-main">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img src={`data:image/jpeg;base64,${photoProduct}`} alt="product" />
        </div>
        <div className="col-9">
          <p>{productName}</p>
          <p>{price}</p>
          <p>{`Ditawar ${offersPrice}`}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
