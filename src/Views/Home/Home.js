import React from "react";
import "../Home/Home.css";
import "../../Assets/Components/FontawsomeIcons/Font";
import { FooterComponent } from "../../Assets/Components/Footer/FooterComponent";
import { HomeSlider } from "../../Assets/Components/HomeSlider/HomeSlider";
import { NavbarComponent } from "../../Assets/Components/NavBar/NavbarComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardHomePage } from "../../Assets/Components/CardHomePage/CardHomePage";
import { NavbarAfterLogin } from "../../Assets/Components/NavBar/NavbarAfterLogin";

export const Home = () => {
  return (
    <div>
    <NavbarAfterLogin/>
      <div className="container-sm">
        <div className="home-carousel ">
          <HomeSlider />
        </div>
        <div className="home-kategori">
          <h5>Telusuri kategori</h5>
          <div className="home-kategori-button-grup">
            <div className="row">
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
                  Semua
                </button>
              </div>
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
                  Nike
                </button>
              </div>
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
                  Vans
                </button>
              </div>
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
                  Puma
                </button>
              </div>
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
                  <FontAwesomeIcon
                    className="icon-button1"
                    icon="fa-brands fa-searchengin"
                    size="xl"
                  />
                  Jordan
                </button>
              </div>
              <div className="col col-lg-2 col-sm-3 col-4">
                <button className="button-kategori">
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
          <div className="row">
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
            <div className="col col-lg-2 col-sm-3 col-6">
              <CardHomePage
                namaProduk={"sepatu"}
                kategori={"nike"}
                harga={1000000}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
