import React from "react";
import "./CardDetailProduct.css";

export const CardDetailProduct = ({ product, category, price, role }) => {
  const convertToRupiah = () => {
    const numb = price;
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

    return rupiah
  };

  return (
    <div className="card-detail-main">
      <div className="card-detail-content">
        <h5 className="card-detail-product-name">{product}</h5>
        <p className="card-detail-product-category">{category}</p>
        <p>{convertToRupiah()}</p>
        <div className="card-detail-group-button">
          {role === 1 ? (
            <div className="row">
              <div className="col-12">
                <button className="card-detail-button filled">
                  Saya tertarik dan ingin nego
                </button>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <button className="card-detail-button filled">Terbitkan</button>
              </div>
              <div className="col-12">
                <button className="card-detail-button not-filled">Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
