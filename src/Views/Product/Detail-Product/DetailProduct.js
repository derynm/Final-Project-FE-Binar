import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { AccordionDescription } from "../../../Assets/Components/Accordion/AccordionDescription/AccordionDescription";
import { CardDetailProduct } from "../../../Assets/Components/Card/CardDetailProduct/CardDetailProduct";
import { CardSeller } from "../../../Assets/Components/Card/CardSeller/CardSeller";
import { NavbarAfterLogin } from "../../../Assets/Components/NavBar/NavbarAfterLogin";
import { useParams } from "react-router-dom";
import {
  fetchDetailProduct,
  fetchDataUser,
  fetchTransactionSeller,
} from "../../../Redux/Action/Action";
import "./DetailProduct.css";
import { LoadingAuth } from "../../../Assets/Components/Loading/LoadingAuth";
import { NavbarBeforeLogin } from "../../../Assets/Components/NavBar/NavbarBeforeLogin";

const DetailProduct = (props) => {
  const { productId } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const status = sessionStorage.getItem("status");

  useEffect(() => {
    const Token = sessionStorage.getItem("acc_token");
    if (Token) {
      const timer = setTimeout(
        () => props.getTransactionSeller(props.userDetail.userId, Token),
        6000
      );
      return () => clearTimeout(timer);
    }
  }, [props.userDetail.userId]);

  //useEffect untuk ambil data barang dan check dalam posisi login atau tidak
  useEffect(() => {
    props.getProductDetail(productId);

    if (status === "in") {
      const Token = sessionStorage.getItem("acc_token");
      props.getUserDetail(Token);
    }
  }, []);

  const checkOwner = () => {
    if (props.detailProduct.userId === props.userDetail.userId) {
      return true;
    }
  };

  return (
    <>
      {status === "in" ? (
        <NavbarAfterLogin dataTransaksi={props.dataTransaksiSeller} />
      ) : (
        <NavbarBeforeLogin />
      )}

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
                      productImg={props.detailProduct.img}
                      category={props.detailProduct.category}
                      price={props.detailProduct.price}
                      isOwner={checkOwner()}
                      role={props.userDetail.roles?.[0]?.rolesId === 1 ? 1 : 2}
                      dataBuyyer={props.userDetail}
                    />
                  </div>
                  <div className="col-12" id="card-product-seller">
                    <CardSeller
                      avatar={props.detailProduct.imgpenjual}
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
    userDetail: state.home.user_data,
    dataTransaksiSeller: state.home.transaksi_seller,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (id) => dispatch(fetchDetailProduct(id)),
    getUserDetail: (token) => dispatch(fetchDataUser(token)),
    getTransactionSeller: (id, token) =>
      dispatch(fetchTransactionSeller(id, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
