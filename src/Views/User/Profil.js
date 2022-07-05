import React, { useEffect, useState } from "react";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import "./profil.css";
import avatar from "../../Assets/Img/avatar-account.png";
import Daerah from "../../Assets/Data_Daerah/Data_Daerah";
import axios from "axios";

export const Profil = () => {
  const accToken = sessionStorage.getItem("acc_token");
  const Host = process.env.REACT_APP_HOST;


  //state untuk menampung hasil inputan
  const [ProfilState, setProfilState] = useState({
    foto: null,
    nama: null,
    provinsi: null,
    kota: null,
    alamat: null,
    no_hp: null,
  });

  const selectDaerah = () => {
    //untuk filter kota sesuai provinsi
    const getKota = Daerah.filter(
      (value) => value.provinsi === ProfilState.provinsi
    ).map((value) => value.kota);
    return (
      <div>
        {/* dropdown select provinsi */}
        <div className="mb-3">
          <label className="form-label">Provinsi</label>
          <select
            id="profil-provinsi"
            className="form-select"
            onChange={(e) => handleInput(e, "provinsi")}
          >
            <option>Pilih Provinsi</option>
            {Daerah.map((value, key) => (
              <option key={key} value={value.provinsi}>
                {value.provinsi}
              </option>
            ))}
          </select>
        </div>

        {/* dropdown select untuk kota */}
        {ProfilState.provinsi !== null ? (
          <div className="mb-3">
            <label className="form-label">Kota</label>
            <select
              id="kota-profil"
              className="form-select"
              onChange={(e) => handleInput(e, "kota")}
            >
              <option>Pilih Kota</option>
              {getKota.map((value) =>
                value.map((value, key) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))
              )}
            </select>
          </div>
        ) : null}
      </div>
    );
  };

  //fungsi untuk memasukan data dari inputan ke dalam state
  const handleInput = (e, prop) => {
    //khusus untuk handle inputn foto
    if (prop === "foto") {
      setProfilState({
        ...ProfilState,
        [prop]: e.target.files[0],
      });
    } else {
      setProfilState({
        ...ProfilState,
        [prop]: e.target.value,
      });
    }
  };

  const updateProfil = (token) => {
    const FormData = require("form-data");
    let data = new FormData();
    data.append("img", ProfilState.foto);
    data.append("username", ProfilState.nama);
    data.append("notelepon", ProfilState.no_hp);
    data.append("provinsi", ProfilState.provinsi);
    data.append("kota", ProfilState.kota);
    data.append("alamat", ProfilState.alamat);

    let config = {
      method: "put",
      url: `${Host}update/dery@mail.com`,
      headers: {
        Authorization: `Bearer ${accToken}`,
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="profil-main">
      <NavbarSecond />
      <div className="container-sm profil-content">
        <form>
          {/* {console.log(ProfilState)} */}
          <div className="row">
            <div className="col col-lg-4 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center profil-left">
              <img
                src={
                  ProfilState.foto === null
                    ? avatar
                    : URL.createObjectURL(ProfilState.foto)
                }
                alt="avatar-account"
                className="avatar"
              />
              <label className="costum-input-image">
                <input
                  type={"file"}
                  className="form-control-image"
                  onChange={(e) => {
                    handleInput(e, "foto");
                  }}
                />
                <span className="button-input-profil">Edit image</span>
              </label>
            </div>
            <div className="col col-lg-8 col-sm-12 col-12 profil-right">
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="nama-profil"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    handleInput(e, "nama");
                  }}
                />
              </div>

              {selectDaerah()}

              <div className="mb-3">
                <label className="form-label">Alamat</label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat-profil"
                  onChange={(e) => {
                    handleInput(e, "alamat");
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">No Handphone</label>
                <input
                  type="text"
                  className="form-control"
                  id="kota-profil"
                  onChange={(e) => {
                    handleInput(e, "no_hp");
                  }}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="button-input-profil">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
