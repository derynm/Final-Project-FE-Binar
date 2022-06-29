import React from "react";
import { Card } from "react-bootstrap";
import "../CardHomePage/CardHomePage.css";
import jordan1 from "../../Img/jordan 1 unc.webp"
import jordan2 from "../../Img/jordan4.jpg"

export const CardHomePage = ({gambarProduk,namaProduk, kategori, harga, funtion}) => {
  return (
    <div className="utama">
      <Card className="cardUtama"onClick={funtion}>
        <img className="photo-produk" src={jordan1} alt="produk"/>
        <Card.Body>
          <h6 className="nama-produk">{namaProduk}</h6>
          <Card.Text className="textCategory">
            {kategori}
          </Card.Text>
          <Card.Text className="textPrice">
            {harga}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
