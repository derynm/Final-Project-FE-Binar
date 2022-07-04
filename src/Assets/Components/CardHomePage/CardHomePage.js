import React from "react";
import { Card } from "react-bootstrap";
import "../CardHomePage/CardHomePage.css";

export const CardHomePage = ({gambarProduk,namaProduk, kategori, harga, funtion}) => {

  const convertToRupiah = () => {
    const numb = harga;
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

    return rupiah
  };

  return (
    <div className="utama">
      <Card className="cardUtama"onClick={funtion}>
        <img className="photo-produk" src={gambarProduk} alt="produk"/>
        <Card.Body>
          <h6 className="nama-produk">{namaProduk}</h6>
          <Card.Text className="textCategory">
            {kategori}
          </Card.Text>
          <Card.Text className="textPrice">
            {convertToRupiah()}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
