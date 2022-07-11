import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconAdd } from "../../../Img/add-fill.svg";
import "./ButtonSell.css";

export const ButtonSell = () => {
  const navigate = useNavigate();
  return (
    <div className="button-sell-main">
      <div
        className="button-sell-content d-flex align-items-center"
        onClick={() => {
          navigate(`/add-product`);
        }}
      >
        <p className="flex-grow-1 button-sell-text">Jual</p>
        <IconAdd />
      </div>
    </div>
  );
};
