import React, { useState } from "react";
import "./Auth.css";

export const Auth = () => {
  //state untuk type (login/register)
  const [PageType, setPageType] = useState(true);

  //state untuk ganti input type password
  const [PasswordShow, setPasswordShow] = useState(false);

  const [RegisterState, setRegisterState] = useState({
    nama: null,
    email: null,
    password: null,
  });
  const [LoginState, setLoginState] = useState({
    email: null,
    password: null,
  });

  //function untuk ganti dari login ke register dan sebaliknya
  const handlePageType = () => {
    setPageType(!PageType);
    setLoginState({
      email: "",
      password: "",
    });
    setRegisterState({
      nama: "",
      email: "",
      password: "",
    })
  };

  const handleState = (e, type, prop) => {
    type === "register"
      ? setRegisterState({
          ...RegisterState,
          [prop]: e.target.value,
        })
      : setLoginState({
          ...LoginState,
          [prop]: e.target.value,
        });
  };

  //function berisi form login
  const formLogin = () => {
    return (
      <form>
      {console.log(LoginState)}
        <h3>Masuk</h3>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email-login"
            onChange={(e) => {
              handleState(e, "login", "email");
            }}
            value={LoginState.email}
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Password</label>
          <input
            type={PasswordShow ? "text" : "password"}
            className="form-control"
            id="password-login"
            onChange={(e) => {
              handleState(e, "login", "password");
            }}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPassword"
            onChange={() => {
              setPasswordShow(!PasswordShow);
            }}
          />
          <label className="form-check-label">Tampilkan Password</label>
        </div>

        <button type="submit" className="button-auth mb-5">
          Masuk
        </button>

        <div className="d-flex justify-content-center to-register">
          Pengguna Baru?
          <p
            onClick={() => {
              handlePageType();
            }}
          >
            Daftar
          </p>
        </div>
      </form>
    );
  };

  //function berisi form register
  const formRegister = () => {
    return (
      <form>
        <h3>Daftar</h3>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            id="nama-register"
            onChange={(e) => {
              handleState(e, "register", "nama");
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email-register"
            onChange={(e) => {
              handleState(e, "register", "email");
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-register"
            onChange={(e) => {
              handleState(e, "register", "password");
            }}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPassword"
            onChange={() => {
              setPasswordShow(!PasswordShow);
            }}
          />
          <label className="form-check-label">Tampilkan Password</label>
        </div>

        <button type="submit" className="button-auth mb-5">
          Login
        </button>

        <div className="d-flex justify-content-center to-register">
          Sudah Punya Akun?
          <p
            onClick={() => {
              handlePageType();
            }}
          >
            Masuk
          </p>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid auth-main">
      <div className="row auth-content">
        <div className="col col-lg-7 col-sm-12 col-12 auth-left-side">
          <div></div>
        </div>
        <div className="col col-lg-5 col-sm-12 col-12 d-flex justify-content-center d-flex align-items-center auth-right-side">
          <div className="auth-right-side-form">
            {PageType ? formLogin() : formRegister()}
          </div>
        </div>
      </div>
    </div>
  );
};
