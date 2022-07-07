import React, { useState } from "react";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import "./profil.css";
import avatar from "../../Assets/Img/avatar-account.png";
import Daerah from "../../Assets/Data_Daerah/Data_Daerah";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingAuth } from "../../Assets/Components/Loading/LoadingAuth";

const Profil = (props) => {
  const accToken = sessionStorage.getItem("acc_token");
  const Host = process.env.REACT_APP_HOST;
  const navigate = useNavigate();

  //state untuk menampung hasil inputan
  const [ProfilState, setProfilState] = useState({
    foto: null,
    nama: null,
    provinsi: null,
    kota: null,
    alamat: null,
    no_hp: null,
  });

  const [isLoading, setisLoading] = useState(false);

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
          {props.userDetail.provinsi? (<option>{props.userDetail.provinsi}</option>):(<option>Pilih Provinsi</option>)}
            
            {Daerah.map((value, key) => (
              <option key={key} value={value.provinsi}>
                {value.provinsi}
              </option>
            ))}
          </select>
        </div>

        {/* dropdown select untuk kota */}
        {ProfilState.provinsi !== null || props.userDetail.provinsi? (
          <div className="mb-3">
            <label className="form-label">Kota</label>
            <select
              id="kota-profil"
              className="form-select"
              onChange={(e) => handleInput(e, "kota")}
            >
              {props.userDetail.kota? (<option>{props.userDetail.kota}</option>):(<option>Pilih Provinsi</option>)}
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
      if (e.target.files[0].size <= 1200000) {
        setProfilState({
          ...ProfilState,
          [prop]: e.target.files[0],
        });
      } else {
        alert("Ukuran file terlalu besar");
      }
    } else {
      setProfilState({
        ...ProfilState,
        [prop]: e.target.value,
      });
    }
  };

  const updateProfil = async (token) => {
    setisLoading(true);
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
      url: `${Host}update`,
      headers: {
        Authorization: `Bearer ${accToken}`,
        ...Headers,
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        setisLoading(false);
        alert("Update profil berhasil");
        navigate(`/`);
      })
      .catch(function (error) {
        const err_token = error.response.data.error_message.split(" ");
        if (err_token[3] === "expired") {
          setisLoading(false);
          alert("Sesi anda telah berakhir mohon login kembali");
          navigate(`/auth/login`);
        } else {
          setisLoading(false);
          alert("Update profil gagal");
        }
      });
  };

  return (
    <div className="profil-main">
      {console.log(props.userDetail)}
      <NavbarSecond page={"Profil"} />
      <div className="container-sm profil-content">
        <div className="row">
          <div className="col col-lg-4 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center profil-left">
            {props.userDetail.img ? (
              <>
              <img
              src={`data:image/jpeg;base64,${props.userDetail.img}`}
              alt="avatar-account"
              className="avatar"
            />
              </>
            ) : (
              <>
                <img
                  src={
                    ProfilState.foto === null
                      ? avatar
                      : URL.createObjectURL(ProfilState.foto)
                  }
                  alt="avatar-account"
                  className="avatar"
                />
              </>
            )}
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
                defaultValue={props.userDetail.username}
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
                defaultValue={props.userDetail.alamat}
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
                defaultValue={props.userDetail.notelepon}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              {isLoading ? (
                <LoadingAuth />
              ) : (
                <button
                  type="submit"
                  className="button-input-profil"
                  onClick={() => {
                    updateProfil(accToken);
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.home.user_data,
  };
};

export default connect(mapStateToProps)(Profil);
