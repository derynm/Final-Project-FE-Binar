import React from "react";
import "./navsecond.css";
import { ReactComponent as IconMenu } from "../../Img/arrow-left-line.svg"
import { useMediaQuery } from "react-responsive";

export const NavbarSecond = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  return (
    <div className="container-fluid nav-second">
    <div className="nav-content d-flex justify-content-between align-items-center">
      <div>{isMobile ?(<IconMenu />):(<span className="nav-content-logo">Sneakers.</span>)}</div>
      <div><span className="page-name-second">Info Akun</span></div>
    </div>

    </div>
  );
};
