import React from 'react'
import sepatu from "../../Img/airmax.jpg"
import "./NotifHome.css"

export const NotifHome = (photoProduct,productName,price,offersPrice) => {
  return (
    <>
        <div className='row notif-home-main'>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <img src={sepatu} alt='product'/>
            </div>
            <div className='col-9'>
                <p>Nama Produk</p>
                <p>Rp.200000</p>
                <p>Ditawar Rp.1900000</p>
            </div>
        </div>
        <hr/>
    </>
  )
}
