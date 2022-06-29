import React from "react";
import "../Home/Home.css"
import "../../Assets/Components/FontawsomeIcons/Font"
import { FooterComponent } from "../../Assets/Components/Footer/FooterComponent";
import { HomeSlider } from "../../Assets/Components/HomeSlider/HomeSlider";
import { NavbarComponent } from "../../Assets/Components/NavBar/NavbarComponent";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardHomePage } from "../../Assets/Components/CardHomePage/CardHomePage";

export const Home = () => {
  return (
    <div className="container-sm">
      <NavbarComponent />
      <div>
        <HomeSlider/>
      </div>
      <div className="text-kategoriHeader">
        <p className="text-kategori">Telusuri Kategori</p>
      </div>
      <div className="buttonHome-1 d-flex">
      <div className="row">
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />NIKE</Button>{' '}
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />ADIDAS</Button>{' '}
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />PUMA</Button>{' '}
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />VANS</Button>{' '}
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />Converse</Button>{' '}
        <Button className="button-kategori col col-lg-2 col-sm-2"><FontAwesomeIcon className="icon-button1" icon="fa-brands fa-searchengin" size="xl" />New Balance</Button>{' '}
      </div>
      </div>
      <div className="cardHome">
        <CardHomePage/>
      </div>
      <div className="footerHome">
        <FooterComponent />
      </div>
    </div>
  );
};
