import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavbarSecond } from '../../../Assets/Components/NavBar/NavbarSecond';
import './AddProduct.css';

export const AddProduct = () => {

    const [inputProduk, setInputProduk] = useState({
        namaProduk: null,
        hargaProduk: null,
        kategori: null,
        deskripsi: null,
        fotoProduk: null,
        isFailed: false,
    });

    const handleState = (e, prop) => {
        if (prop === "fotoProduk") {
            if (e.target.files[0].size <= 1048576) {
                setInputProduk({
                    ...inputProduk,
                    [prop]: e.target.files[0],
                    isFailed: true,
                });
            }else {
                alert("Ukuran file terlalu besar")
                setInputProduk({
                    ...inputProduk,
                    isFailed: true,
                });
            }
        } else {
            setInputProduk({
                ...inputProduk,
                [prop]: e.target.value,
            });
        }
    };

    return (
        <div>
        <NavbarSecond page={"Input Produk"}/>
            <div className='container add-produk-main'>
                <Form>
                    {console.log(inputProduk)}
                    <Form.Group className="mb-4">
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control type="text" id="nama_produk" name="nama_produk" placeholder="Nama Produk"
                            onChange={(e) => {
                                handleState(e, "namaProduk")
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Harga Produk</Form.Label>
                        <Form.Control type="number" id="harga_produk" name="harga_produk" placeholder="Rp 0,00"
                            onChange={(e) => {
                                handleState(e, "hargaProduk")
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select
                            onChange={(e) => {
                                handleState(e, "kategori")
                            }} >
                            <option value="3">Adidas</option>
                            <option value="5">Jordan</option>
                            <option value="4">Puma</option>
                            <option value="1">Nike</option>
                            <option value="6">Vans</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control type="text" id="deskripsi" name="deskripsi" placeholder="Deskripsi"
                            onChange={(e) => {
                                handleState(e, "deskripsi")
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Foto Porduk</Form.Label>
                        <Form.Control type="file" id="foto_produk" name="foto_produk" accept="image/*"
                            onChange={(e) => {
                                handleState(e, "fotoProduk")
                            }} />
                    </Form.Group>

                    <input type="submit" className='col-md-12 add-produk-button' value="Submit" />
                </Form>
            </div>
        </div>
    )
}
