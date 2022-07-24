import React, { useEffect, useState } from "react";
import "../DafarJual/DaftarJual.css";
import profile from "../../Assets/Img/blank-image.jpg";
import box from "../../Assets/Img/box.png";
import love from "../../Assets/Img/hearth.png";
import dollar from "../../Assets/Img/dollar.png";
import { Button } from "react-bootstrap";
import { CardHomePage } from "../../Assets/Components/CardHomePage/CardHomePage";
import { NavbarAfterLogin } from "../../Assets/Components/NavBar/NavbarAfterLogin";
import { connect } from "react-redux";
import { fetchDataUser } from "../../Redux/Action/Action";

const DaftarJual = (props) => {
  const Host = process.env.REACT_APP_HOST;
  const status = sessionStorage.getItem("status");
  const Token = sessionStorage.getItem("acc_token");
  const [Show, setShow] = useState(false);
  const [DataProduct, setDataProduct] = useState(null);
  const [Load, setLoad] = useState(false)

  useEffect(() => {
    if(props.userDetail == {} ){
      handleDashboard()
    }
  }, [setLoad]);

 
const getData=async()=>{
 await  props.getUserDetail(Token).then(
  setLoad(true)

 );
}

  useEffect(() => {
    if (status === "in") {
      const Token = sessionStorage.getItem("acc_token");
      getData()

    }
    
    {console.log(props.userDetail,"ini props")}
   
  }, []);

  const handleDashboard = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `${Host}product/seller/${props.userDetail.userId}`,
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(response.data)
        setDataProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showCard = () => {
    console.log(DataProduct, "dataproduk")
    return DataProduct?.map((value, key) => {
      return <div className="col col-lg-2 col-sm-3 col-6" key={key}>
        <CardHomePage
          idProduk={value.idProduct}
          gambarProduk={value.img}
          namaProduk={value.productName}
          kategori={value.category}
          harga={value.price}
        />
      </div>;
    });
  };

  return (
    <div className="daftar-jual">
      {console.log(Show)}
      <NavbarAfterLogin />
      <div className="daftar-value container-sm">
        <div className="title">
          <h1 className="h1-daftarJual">Daftar Jual Saya</h1>
        </div>
        {/* border utama */}
        <div className="border-utama">
          <div>
            <img
              className="image-profile"
              src={profile}
              width={60}
              height={60}
            />
          </div>
          <div className="profile-penjual">
            <p className="nama-penjual">Nama Penjual</p>
            <p>Kota</p>
          </div>
          <div className="cover-button-edit">
            <div className="button-edit col col-lg-2 col-sm-3 col-4">
              <Button className="buttonEdit">Edit</Button>
            </div>
          </div>
        </div>
        {/* border left and card*/}
        <div className="border-left-card-utama">
          <div className="border-left-card">
            <div className="border-left">
              <div>
                <p className="title-kategori">Kategori</p>
              </div>
              <div className="semua-produk">
                <img
                  className="img-semua-produk"
                  src={box}
                  width={20}
                  height={20}
                />
                <p className="text-border-left">Semua Produk</p>
              </div>
              <div className="diminati">
                <img
                  className="img-diminati"
                  src={love}
                  width={20}
                  height={20}
                />
                <p className="text-border-left">Diminati</p>
              </div>
              <div className="terjual">
                <img
                  className="img-terjual"
                  src={dollar}
                  width={20}
                  height={20}
                />
                <p className="text-border-left">Terjual</p>
              </div>
            </div>
            <div>
              <Button className="button-tambahProduk" variant="outline-primary">
                Tambah Produk
              </Button>
            </div>
          </div>
          {console.log(props.userDetail)}
          {console.log([props.userDetail.userId])}
          {/* {console.log({handleDashboard})} */}
          {/* {Show ? handleDashboard() : null} */}
          {/* {DataProduct !== null ? showCard():(null)} */}
          {showCard()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.home.user_data,
    dataProduct: state.home.data_produk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetail: (token) => dispatch(fetchDataUser(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DaftarJual);
