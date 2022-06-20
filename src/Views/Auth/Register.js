import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export const Register = () => {
  const navigate = useNavigate();

  //state untuk disable button
  const [DisableButton, setDisableButton] = useState(true);

  //state di gunakan untuk merubah type inputan password
  const [PasswordShow, setPasswordShow] = useState(false);

  //state untuk menampung email,paswd,role
  const [RegisterState, setRegisterState] = useState({
    nama: null,
    email: null,
    password: null,
    role: null,
  });

  const [isActive, setisActive] = useState({
    penjual: false,
    pembeli: false,
  });

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

  //function untuk cek apakah semua inputan sudah terisi
  const disableSubmit = () => {
    if (
      RegisterState.email !== null &&
      RegisterState.nama !== null &&
      RegisterState.password !== null &&
      RegisterState.role !== null
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
    setRegisterState({
      ...RegisterState,
      [prop]: e.target.value,
    });
  };
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
            handleState(e, "nama");
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
            handleState(e, "email");
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type={PasswordShow ? "text" : "password"}
          className="form-control"
          id="password-register"
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
            <span className="fw-bold">Pembeli</span>
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
            <span className="fw-bold">Penjual</span>
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="button-auth mb-5"
        disabled={DisableButton}
      >
        <span className="fw-bold">Masuk</span>
      </button>

      <div className="d-flex justify-content-center to-register">
        Sudah Punya Akun?
        <p
          onClick={() => {
            navigate(`/auth/login`);
          }}
        >
          Masuk
        </p>
      </div>
    </form>
  );
};
