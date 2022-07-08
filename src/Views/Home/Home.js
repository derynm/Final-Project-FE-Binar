import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import "../../Assets/Components/FontawsomeIcons/Font";
import { FooterComponent } from "../../Assets/Components/Footer/FooterComponent";
import { HomeSlider } from "../../Assets/Components/HomeSlider/HomeSlider";
import { connect } from "react-redux";
import { CardHomePage } from "../../Assets/Components/CardHomePage/CardHomePage";
import { NavbarAfterLogin } from "../../Assets/Components/NavBar/NavbarAfterLogin";
import produk from "../../Assets/Data_Dummy/DataProdukDummy";
import { NavbarBeforeLogin } from "../../Assets/Components/NavBar/NavbarBeforeLogin";
import { fetchDataUser } from "../../Redux/Action/Action";
import { ButtonSell } from "../../Assets/Components/Button/ButtonSell/ButtonSell";

const Home = (props) => {
  const [homeState, sethomeState] = useState({
    category: "semua",
    isLogin: true,
  });

  const handleState = (e, prop) => {
    sethomeState({
      ...homeState,
      [prop]: e.target.value,
    });
  };

  useEffect(() => {
    const Token = sessionStorage.getItem("acc_token");
    if (!Token) {
      sethomeState({
        ...homeState,
        isLogin: !homeState.isLogin,
      });
    } else {
      props.getUserDetail(Token);
    }
  }, []);

  const showProduk = (data, kategori) => {
    if (kategori === "semua") {
      return data.map((value, key) => {
        return (
          <div className="col col-lg-2 col-sm-3 col-6" key={key}>
            <CardHomePage
              gambarProduk={value.photo}
              namaProduk={value.title}
              kategori={value.category}
              harga={value.price}
            />
          </div>
        );
      });
    } else {
      return data
        .filter((value) => value.category === kategori)
        .map((value, key) => {
          return (
            <div className="col col-lg-2 col-sm-3 col-6" key={key}>
              <CardHomePage
                gambarProduk={value.photo}
                namaProduk={value.title}
                kategori={value.category}
                harga={value.price}
              />
            </div>
          );
        });
    }
  };

  return (
    <>
      {props.userDetail.roles?.[0]?.rolesId === 2 ? <ButtonSell /> : null}
      <div>
        {console.log(props.userDetail)}

        {homeState.isLogin ? <NavbarAfterLogin /> : <NavbarBeforeLogin />}
        <div className="container-sm">
          <div className="home-carousel ">
            <HomeSlider />
          </div>
          <div className="home-kategori">
            <h5>Telusuri kategori</h5>
            <div className="home-kategori-button-grup">
              <div className="row">
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="semua"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Semua
                  </button>
                </div>
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="nike"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Nike
                  </button>
                </div>
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="vans"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Vans
                  </button>
                </div>
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="puma"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Puma
                  </button>
                </div>
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="jordan"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Jordan
                  </button>
                </div>
                <div className="col col-lg-2 col-sm-3 col-4">
                  <button
                    className="button-kategori"
                    type="button"
                    value="adidas"
                    onClick={(e) => {
                      handleState(e, "category");
                    }}
                  >
                    Adidas
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-card-grup">
            <div className="row">{showProduk(produk, homeState.category)}</div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.home.user_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetail: (token) => dispatch(fetchDataUser(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
