import React from 'react'
import "../DafarJual/DaftarJual.css"
import profile from "../../Assets/Img/blank-image.jpg"
import box from "../../Assets/Img/box.png"
import love from "../../Assets/Img/hearth.png"
import dollar from "../../Assets/Img/dollar.png"
import { Button } from 'react-bootstrap'
import { CardHomePage } from '../../Assets/Components/CardHomePage/CardHomePage'
import { NavbarAfterLogin } from '../../Assets/Components/NavBar/NavbarAfterLogin'

export const DaftarJual = () => {
  return (
    <div className='daftar-jual'>
        <NavbarAfterLogin/>
        <div className='daftar-value container-sm'>
            <div className='title'>
                <h1 className='h1-daftarJual'>Daftar Jual Saya</h1>
            </div>
            {/* border utama */}
            <div className='border-utama'>
                <div>
                    <img className='image-profile'
                    src={profile}
                    width={60}
                    height={60}   
                    />
                </div>
                <div className='profile-penjual'>
                    <p className='nama-penjual'>Nama Penjual</p>
                    <p>Kota</p>
                </div>
                <div className='cover-button-edit'>
                    <div className='button-edit col col-lg-2 col-sm-3 col-4'>
                        <Button className='buttonEdit'>Edit</Button>
                    </div>
                </div>
            </div>
            {/* border left and card*/}
            <div className='border-left-card'>
                <div className='border-left'>
                    <div>
                        <p className='title-kategori'>Kategori</p>   
                    </div>
                    <div className='semua-produk'>
                        <img className='img-semua-produk'
                        src={box}
                        width={20}
                        height={20}
                        />
                        <p className='text-border-left'>Semua Produk</p>
                    </div>
                    <div className='diminati'>
                        <img className='img-diminati'
                        src={love}
                        width={20}
                        height={20}
                        />
                        <p className='text-border-left'>Diminati</p>
                    </div>
                    <div className='terjual'>
                        <img className='img-terjual'
                        src={dollar}
                        width={20}
                        height={20}
                        />
                        <p className='text-border-left'>Terjual</p>
                    </div>
                </div>
                {/* card */}
                <div className='border-card'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
