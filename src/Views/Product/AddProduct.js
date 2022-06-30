import React from "react";

export const AddProduct = () => {
  const registerBuyer = async () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "email": "cobalagi@mail.com",
      "password": "panjangbet"
    });
    
    var config = {
      method: 'post',
      url: 'https://sneakers-staging.herokuapp.com/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  return (
    <div>
      AddProduct
      <button
        onClick={(e) => {
          registerBuyer();
          e.preventDefault();
        }}
      >
        tes
      </button>
    </div>
  );
};
