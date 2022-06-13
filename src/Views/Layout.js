import React from "react";
// import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "../Routers/Routers";

export const Layout = () => {
  let kondisi = true;
  return (
    <div>
      {kondisi ? (
        <>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </>
      )}
    </div>
  );
};
