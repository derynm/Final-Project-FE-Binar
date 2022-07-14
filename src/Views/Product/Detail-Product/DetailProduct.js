import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { AccordionDescription } from "../../../Assets/Components/Accordion/AccordionDescription/AccordionDescription";
import { CardDetailProduct } from "../../../Assets/Components/Card/CardDetailProduct/CardDetailProduct";
import { CardSeller } from "../../../Assets/Components/Card/CardSeller/CardSeller";
import { NavbarAfterLogin } from "../../../Assets/Components/NavBar/NavbarAfterLogin";
import gambar from "../../../Assets/Img/airmax.jpg";
import { useParams } from "react-router-dom";
import { fetchDetailProduct } from "../../../Redux/Action/Action";
import "./DetailProduct.css";
import { LoadingAuth } from "../../../Assets/Components/Loading/LoadingAuth";

const DetailProduct = (props) => {
  const { productId } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  useEffect(() => {
    const Token = sessionStorage.getItem("acc_token");
    props.getProductDetail(productId, Token);
  }, []);

  return (
    <>
      {console.log(props.detailProduct)}
      <NavbarAfterLogin />
      <div className="detail-product-main">
        <div className="container-sm">
          {props.detailProduct.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center load-detail-product">
              <LoadingAuth />
            </div>
          ) : (
            <div className="row">
              <div
                className="col col-lg-8 col-sm-12 col-12"
                id="detail-product-content-left"
              >
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img
                      src={`data:image/jpeg;base64,${props.detailProduct.img}`}
                      alt="product"
                      className="detail-product-image"
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <div className="detail-product-description">
                      {isMobile ? (
                        <AccordionDescription
                          content={props.detailProduct.description}
                        />
                      ) : (
                        <div>
                          <h5>Deskripsi</h5>
                          <p>{props.detailProduct.description}</p>
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
                      product={props.detailProduct.productName}
                      category={props.detailProduct.category}
                      price={props.detailProduct.price}
                    />
                  </div>
                  <div className="col-12" id="card-product-seller">
                    <CardSeller
                      seller_name={props.detailProduct.username}
                      province={props.detailProduct.provinsi}
                      city={props.detailProduct.kota}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    detailProduct: state.home.detail_produk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (id, token) => dispatch(fetchDetailProduct(id, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
