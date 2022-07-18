import React from 'react';
import './ModalConfirm.css';
import imageModal from '../../Img/jordan1.jpg';

export const ModalConfirm = ({ setModalOpen }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h4>
                        Yeay kamu berhasil mendapat harga yang sesuai
                    </h4>
                </div>
                <div className="body">
                    <p className='text-start h5'>
                        Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                    </p>
                </div>
                <div className="body">
                    <div className='col-lg-12 h5 card bg-secondary'>
                        <div className='card-body'>
                            {/* isi modal */}
                            <div className='row mb-1'>
                                <div className='col-lg-12'>
                                    <h5>Product Match</h5>
                                </div>
                            </div>
                            <div className='row text-start mb-1'>
                                <div className='col-lg-4'>
                                    <h5>IMAGE</h5>
                                </div>
                                <div className='col-lg-8'>
                                    <p>ISI</p>
                                    <p>ISI</p>
                                </div>
                            </div>
                            <div className='row text-start mb-1'>
                                <div className='col-lg-4'>
                                    <h5>IMAGE</h5>
                                </div>
                                <div className='col-lg-8'>
                                    <p>ISI</p>
                                    <p>ISI</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button
                        className='col-lg-12'
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://wa.me/628971793630", "_blank");
                        }}>
                        Hubungi via Whatsapp
                    </button>
                </div>
            </div>
        </div>
    )
}
