import axios from "axios";
import { FETCH_DATA_PRODUK, FETCH_USER_DETAIL,FETCH_DETAIL_PRODUK } from "./Types";

const Host = process.env.REACT_APP_HOST;

function fetchDataUser(token) {
  let config = {
    method: "get",
    url: `${Host}profile`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    await axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_USER_DETAIL,
          userData: response,
        });
      })
      .catch(function (error) {
        alert("Sesi anda telah berakhir mohon login kembali");
        window.location.replace(`/auth/login`);
      });
  };
}

function fetchDataProduct() {
  let config = {
    method: "get",
    url: `${Host}product/display-all`,
    headers: {},
  };

  return async (dispatch) => {
    await axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_DATA_PRODUK,
          dataProduk: response,
        });
      })
      .catch(function (error) {
        console.log(error);
        alert("fetch produk gagal");
      });
  };
}

function fetchDetailProduct(id, token) {
  var config = {
    method: "get",
    url: `${Host}product/display/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return async (dispatch) => {
    await axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_DETAIL_PRODUK,
          detailProduk: response,
        })
      })
      .catch(function (error) {
        alert("Sesi anda telah berakhir mohon login kembali");
        window.location.replace(`/auth/login`);
      });
  };
}

export { fetchDataUser, fetchDataProduct, fetchDetailProduct };
