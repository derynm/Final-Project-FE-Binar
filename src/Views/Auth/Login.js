import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  const navigate = useNavigate();

  //state untuk disable button
  const [DisableButton, setDisableButton] = useState(true);

  //state di gunakan untuk merubah type inputan password
  const [PasswordShow, setPasswordShow] = useState(false);

  //state untuk menampung email,paswd,role
  const [LoginState, setLoginState] = useState({
    email: null,
    password: null,
    role: null,
  });

  
  const [isActive, setisActive] = useState({
    penjual: false,
    pembeli: false,
  });

  //function untuk cek apakah semua inputan sudah terisi
  const disableSubmit = () => {
    if (
      LoginState.email !== null &&
      LoginState.password !== null &&
      LoginState.role !== null
    ) {
      setDisableButton(false);
    }
  };

  //untuk cek apakah sudah terisi semua (menjalankan functio disableSubmit tiap rerender)
  useEffect(() => {
    disableSubmit();
  });

  //fungsig untuk memasukan data dari inputan ke dalam state
  const handleState = (e, prop) => {
    setLoginState({
      ...LoginState,
      [prop]: e.target.value,
    });
  };

  //fungsi untuk aktifkan tombol
  const toggleActive = (role) => {
    if (role === "penjual") {
      setisActive({
        penjual: true,
        pembeli: false,
      })
    }else (
      setisActive({
        penjual: false,
        pembeli: true,
      })
    )
  };

  return (
    <form>
      {console.log(LoginState.role)}
      <h3>Masuk</h3>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email-login"
          onChange={(e) => {
            handleState(e, "email");
          }}
        />
      </div>
      <div className="mb-1">
        <label className="form-label">Password</label>
        <input
          type={PasswordShow ? "text" : "password"}
          className="form-control"
          id="password-login"
          onChange={(e) => {
            handleState(e, "password");
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

      <div className="row mb-3">
        <div className="col-6">
          <button
            type="button"
            className={
              isActive.pembeli
                ? "button-role-selected"
                : "button-role-not-selected"
            }
            value="pembeli"
            onClick={(e) => {
              handleState(e, "role");
              toggleActive("pembeli");
            }}
          >
            Pembeli
          </button>
        </div>

        <div className="col-6">
          <button
            type="button"
            className={
              isActive.penjual
                ? "button-role-selected"
                : "button-role-not-selected"
            }
            value="penjual"
            onClick={(e) => {
              handleState(e, "role");
              toggleActive("penjual");
            }}
          >
            Penjual
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="button-auth mb-4"
        disabled={DisableButton}
      >
        Masuk
      </button>

      <div className="d-flex justify-content-center to-register">
        Pengguna Baru?
        <p
          onClick={() => {
            navigate(`/auth/register`);
          }}
        >
          Daftar
        </p>
      </div>
    </form>
  );
};
