import React from "react";
import { NavbarSecond } from "../../Assets/Components/NavBar/NavbarSecond";
import "./profil.css"

export const Profil = () => {
  return (
    <div>
      <NavbarSecond />
      <div className="container-sm">
        <form>
          <div className="row">
            <div className="col col-lg-4 col-sm-12 col-12">asdad</div>
            <div className="col col-lg-8 col-sm-12 col-12 profil-right">
              {" "}
              <div className="mb-3">
                <label className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama-profil"
                  aria-describedby="emailHelp"
                />

              </div>
              <div className="mb-3">
                <label className="form-label">
                  Kota
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="kota-profil"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat-profil"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  No Handphone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="kota-profil"
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
