import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../NavBar/NavbarAfterLogin.css";
import { useMediaQuery } from "react-responsive";
import list from "../../Img/list.svg";
import alarm from "../../Img/alarm.svg";
import user from "../../Img/user.svg";
import { useNavigate } from "react-router-dom";
import { NotifHome } from "../Notif/NotifHome";
import { LoadingAuth } from "../Loading/LoadingAuth";

export const NavbarAfterLogin = ({ dataTransaksi }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("acc_token");
    sessionStorage.removeItem("status");
    window.location.reload(false);
  };

  const showNotif = () => {
    return dataTransaksi
      .filter((value) => value.status === "ditawar")
      .map((value, index) => {
        return (
          <li key={index}>
            <NotifHome
              productName={value.productName}
              photoProduct={value.imgproduk}
              price={value.price}
              offersPrice={value.tawar}
            />
          </li>
        );
      });
  };
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
              <Navbar.Brand
                href="#home"
                className="logo-after"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                Sneakers
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>

            <div className="d-flex align-items-center">
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav
                  className="me-auto d-flex justify-content-between align-items-lg-center"
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
                    {isMobile ? (
                      <p>Notifikasi</p>
                    ) : (
                      <>
                        <div className="dropdown remove-icon">
                          <p
                            className="dropdown-toggle"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src={alarm} width={20} alt="" />
                          </p>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            {dataTransaksi.length <= 0 ? (
                              <div className="d-flex justify-content-center">
                                <LoadingAuth />
                              </div>
                            ) : (
                              showNotif()
                            )}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="imageButton">
                    {isMobile ? (
                      <>
                        <p
                          onClick={() => {
                            navigate(`/profil/detail`);
                          }}
                        >
                          Profile
                        </p>
                        <p
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="dropdown remove-icon">
                          <p
                            className="dropdown-toggle"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img src={user} width={20} alt="" />
                          </p>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  navigate(`/profil/detail`);
                                }}
                              >
                                Profil
                              </p>
                            </li>
                            <li>
                              <p
                                className="dropdown-item"
                                onClick={() => {
                                  logout();
                                }}
                              >
                                Logout
                              </p>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
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
