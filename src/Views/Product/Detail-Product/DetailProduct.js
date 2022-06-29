import React from "react";
import { useMediaQuery } from "react-responsive";
import { AccordionDescription } from "../../../Assets/Components/Accordion/AccordionDescription/AccordionDescription";
import { CardDetailProduct } from "../../../Assets/Components/Card/CardDetailProduct/CardDetailProduct";
import { CardSeller } from "../../../Assets/Components/Card/CardSeller/CardSeller";
import gambar from "../../../Assets/Img/airmax.jpg";
import "./DetailProduct.css";

export const DetailProduct = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="detail-product-main">
      <div className="container-sm">
        <div className="row">
          <div
            className="col col-lg-8 col-sm-12 col-12"
            id="detail-product-content-left"
          >
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src={gambar}
                  alt="product"
                  className="detail-product-image"
                />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="detail-product-description">
                  {isMobile ? (
                    <AccordionDescription content={text} />
                  ) : (
                    <div>
                      <h5>Deskripsi</h5>
                      <p>{text}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-sm-12 col-12">
            <div className="row">
              <div className="col-12" id="card-product-detail">
                <CardDetailProduct
                  product={"Airmax"}
                  category={"Nike"}
                  price={100000}
                />
              </div>
              <div className="col-12" id="card-product-seller">
                <CardSeller
                  seller_name={"Nama Penjual"}
                  province={"provinsi"}
                  city={"kota"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
