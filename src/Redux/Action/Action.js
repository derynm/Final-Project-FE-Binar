import axios from "axios";
import { FETCH_DATA_PRODUKL, FETCH_USER_DETAIL } from "./Types";

function fetchDataUser(token) {
  let config = {
    method: "get",
    url: "https://sneakers-staging.herokuapp.com/profile",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_USER_DETAIL,
          userData: response,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export { fetchDataUser };
