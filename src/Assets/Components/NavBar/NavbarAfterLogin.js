import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../NavBar/NavbarAfterLogin.css";
import { useMediaQuery } from "react-responsive";
import list from "../../Img/list.svg";
import alarm from "../../Img/alarm.svg";
import user from "../../Img/user.svg";

export const NavbarAfterLogin = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <div
            className={
              isMobile ? "null" : "container-sm d-flex justify-content-between"
        }
          >
            <div
              className="d-flex justify-content-between"
              style={isMobile ? { width: "400px" } : null}
            >
              <Navbar.Brand href="#home">Sneakers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>

            <div className="d-flex align-items-center">
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav
                  className="me-auto d-flex justify-content-between"
                  style={isMobile ? null : { width: "100px" }}
                >
                  <div className="imageButton">
                    {isMobile ? (
                      <p>null</p>
                    ) : (
                      <img src={list} width={20} alt="" />
                    )}
                  </div>
                  <div className="imageButton">
                    <img src={alarm} width={20} alt="" />
                  </div>
                  <div className="imageButton">
                    <img src={user} width={20} alt="" />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
