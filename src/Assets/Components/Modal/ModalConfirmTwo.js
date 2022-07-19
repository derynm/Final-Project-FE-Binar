import React from 'react'
import './ModalConfirm.css';
import imageModal from '../../Img/jordan1.jpg';

export const ModalConfirmTwo = ({ setModalOpenTwo }) => {
    return (
        <div>
            <div className="modalTwoBackground">
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row titleCloseBtn'>
                                    <div className='col-lg-12 text-end'>
                                        <button
                                            onClick={() => {
                                                setModalOpenTwo(false);
                                            }}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                                <div className="row title">
                                    <h4>
                                        Yeay kamu berhasil mendapat harga yang sesuai
                                    </h4>
                                </div>
                                <div className='row'>
                                    <p className='text-start'>
                                        Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='card border-5'>
                                            <div className='card-body'>
                                                <p className='text-center h5'><b>
                                                    Product Match
                                                </b></p>
                                                <div className='row'>
                                                    <div className='col-lg-3 col-sm-2'>
                                                        <img src={imageModal} alt="" className='imgModal rounded' />
                                                    </div>
                                                    <div className='col-lg-9 col-sm-10'>
                                                        <p>
                                                            <b>Nama Pembeli</b>
                                                            <br />
                                                            Kota
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-3 col-sm-2'>
                                                        <img src={imageModal} alt="" className='imgModal rounded' />
                                                    </div>
                                                    <div className='col-lg-9 col-sm-10'>
                                                        <p>
                                                            <b>Jam Tangan Casio</b>
                                                            <br />
                                                            Ditawar Rp 200.000
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <button
                                                className='col-lg-12 btn btn-primary'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("https://wa.me/628971793630", "_blank");
                                                }}>
                                                Hubungi via Whatsapp
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
