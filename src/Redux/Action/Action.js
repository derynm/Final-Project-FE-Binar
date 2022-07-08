import axios from "axios";
import { FETCH_DATA_PRODUK, FETCH_USER_DETAIL } from "./Types";

function fetchDataUser(token) {
  let config = {
    method: "get",
    url: "https://sneakers-staging.herokuapp.com/profile",
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

export { fetchDataUser };
