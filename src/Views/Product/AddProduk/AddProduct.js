import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './AddProduct.css';

export const AddProduct = () => {

    const [inputProduk, setInputProduk] = useState({
        namaProduk: null,
        hargaProduk: null,
        kategori: null,
        deskripsi: null,
        fotoProduk: null
    });

    const handleState = (e, prop) => {
        if (prop === "fotoProduk") {
            setInputProduk({
                ...inputProduk,
                [prop]: e.target.files[0],
            });
        } else {
            setInputProduk({
                ...inputProduk,
                [prop]: e.target.value,
            });
        }
    };

    return (
        <div>
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
                            <option value="adidas">Adidas</option>
                            <option value="jordan">Jordan</option>
                            <option value="puma">Puma</option>
                            <option value="nike">Nike</option>
                            <option value="vans">Vans</option>
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
                        <Form.Control type="file" id="foto_produk" name="foto_produk"
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
