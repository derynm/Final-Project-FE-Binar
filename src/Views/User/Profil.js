import React, { useState } from "react";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import "./profil.css";
import avatar from "../../Assets/Img/avatar-account.png";
import Daerah from "../../Assets/Data_Daerah/Data_Daerah";

export const Profil = () => {
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

  return (
    <div className="profil-main">
      <NavbarSecond />
      <div className="container-sm profil-content">
        <form>
          {console.log(ProfilState)}
          <div className="row">
            <div className="col col-lg-4 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center">
              <img
                src={
                  ProfilState.foto === null
                    ? avatar
                    : URL.createObjectURL(ProfilState.foto)
                }
                alt="avatar-account"
                className="avatar"
              />
              <input
                type={"file"}
                onChange={(e) => {
                  handleInput(e, "foto");
                }}
              />
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};