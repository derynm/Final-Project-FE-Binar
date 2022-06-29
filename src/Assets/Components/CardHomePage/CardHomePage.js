import React from "react";
import { Button, Card } from "react-bootstrap";
import "../CardHomePage/CardHomePage.css";
import jordan1 from "../../Img/jordan 1 unc.webp"
import jordan2 from "../../Img/jordan4.jpg"

export const CardHomePage = ({namaProduk, kategori, harga, funtion}) => {
  return (
    <div className="utama">
      <Card className="cardUtama" style={{ width: "" }} onClick={funtion}>
        <Card.Img variant="top" src={jordan1} />
        <Card.Body>
          <Card.Title>{namaProduk}</Card.Title>
          <Card.Text>
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
