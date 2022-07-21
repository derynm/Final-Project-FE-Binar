import React, { useState } from "react";
import './ModalConfirm.css';

export const ModalStatus = ({ setModalStatus }) => {

    const [status, setStatus] = useState("berhasil");

    return (
        <div>
            {console.log(status)};
            <div className="modalTwoBackground">
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row titleCloseBtn'>
                                    <div className='col-lg-12 text-end'>
                                        <button
                                            onClick={() => {
                                                setModalStatus(false);
                                            }}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-lg-12'>
                                        <p><b>
                                            Perbarui status penjualan produkmu
                                        </b>
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="status"
                                                value="berhasil"
                                                onChange={(e) => { setStatus(e.target.value) }}
                                                checked={status === "berhasil"}
                                            />
                                            <label className="form-check-label"><b>
                                                Berhasil terjual
                                            </b></label>
                                            <p>
                                                Kamu telah sepakat menjual produk ini kepada pembeli
                                            </p>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="status"
                                                value="batalkan"
                                                onChange={(e) => { setStatus(e.target.value) }}
                                                checked={status === "batalkan"}
                                            />
                                            <label className="form-check-label"><b>
                                                Batalkan transaksi
                                            </b></label>
                                            <p>
                                                Kamu membatalkan transaksi produk ini dengan pembeli
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className="mt-3">
                                            <button
                                                className='col-lg-12 btn btn-primary'
                                            >
                                                Kirim
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
