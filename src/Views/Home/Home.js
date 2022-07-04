import React, { useState } from "react";
import "../Home/Home.css";
import "../../Assets/Components/FontawsomeIcons/Font";
import { FooterComponent } from "../../Assets/Components/Footer/FooterComponent";
import { HomeSlider } from "../../Assets/Components/HomeSlider/HomeSlider";
import { NavbarComponent } from "../../Assets/Components/NavBar/NavbarComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardHomePage } from "../../Assets/Components/CardHomePage/CardHomePage";
import { NavbarAfterLogin } from "../../Assets/Components/NavBar/NavbarAfterLogin";

import produk from "../../Assets/Data_Dummy/DataProdukDummy";

export const Home = () => {
  const [homeState, sethomeState] = useState({
    category: "semua",
  });

  const handleState = (e, prop) => {
    sethomeState({
      ...homeState,
      [prop]: e.target.value,
    });
  };

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
    <div>
      <NavbarAfterLogin />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
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
  );
};
