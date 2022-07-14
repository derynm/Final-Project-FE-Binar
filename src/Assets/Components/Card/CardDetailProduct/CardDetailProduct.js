import React from "react";
import "./CardDetailProduct.css";

export const CardDetailProduct = ({
  product,
  category,
  price,
  role,
  isOwner,
}) => {
  const status = sessionStorage.getItem("status");

  const convertToRupiah = () => {
    const numb = price;
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

    return rupiah;
  };

  const convertCategory = () => {
    const kategori = category;
    if (kategori === 1) {
      const textCategory = "Nike";
      return textCategory;
    } else if (kategori === 2) {
      const textCategory = "Adidas";
      return textCategory;
    } else if (kategori === 3) {
      const textCategory = "Puma";
      return textCategory;
    } else if (kategori === 4) {
      const textCategory = "Vans";
      return textCategory;
    } else if (kategori === 5) {
      const textCategory = "Jordan";
      return textCategory;
    }
  };

  return (
    <div className="card-detail-main">
      <div className="card-detail-content">
        <h5 className="card-detail-product-name">{product}</h5>
        <p className="card-detail-product-category">{convertCategory()}</p>
        <p>{convertToRupiah()}</p>
        {status === "in" ? (
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
              <>
                {isOwner ? (
                  <div className="row">
                    <div className="col-12">
                      <button className="card-detail-button not-filled">
                        Edit
                      </button>
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
