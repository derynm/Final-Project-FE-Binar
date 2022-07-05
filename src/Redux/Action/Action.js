import axios from "axios";
import { FETCH_DATA_PRODUKL,FETCH_USER_DETAIL } from "./Types";
import { useNavigate } from "react-router-dom";



function fetchDataProduk() {
  return "hai";
}

function fetchDataUser(token) {
  return (dispatch) => {
    let config = {
      method: "get",
      url: "https://sneakers-staging.herokuapp.com/profile",
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    };
  
    axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_USER_DETAIL,
          userData : response.data
        })
      })
      .catch(function (error) {
        alert("sesi anda berakhir mohon login kembali")
        useNavigate(`/auth/login`)
      });
  }
}

export { fetchDataUser };
