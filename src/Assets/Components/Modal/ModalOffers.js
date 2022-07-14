import React from "react";
import "./Modal.css";

export const ModalOffers = ({ closed }) => {
  return (
    <div className="base-modal d-flex justify-content-center align-items-center">
      <div className="modal-body d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="modal-text col-12 d-flex align-items-center">
            <p>Masukan Tawaranmu</p>
          </div>
          <div className="modal-item-offers col-12 d-flex align-items-center mb-4">
            {/* {tambahin item yang di tawar} */}
            <img/> 
          </div>
          <div className="modal-input col-12 d-flex align-items-center mb-4">
            <input type="number" className="form-control" />
          </div>
          <div className="modal-note col-12 d-flex align-items-center mb-4">
            <p>
              Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </p>
          </div>
          <div className="group-modal-button d-flex align-items-end  justify-content-around">
            <button
              className="modal-button offers-button col-12"
              style={{ backgroundColor: "#43c4f7" }}
              onClick={closed}
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
