import React, { useState } from "react";
import { ModalDelete } from "../Assets/Components/Modal/ModalDelete";

export const Dummy = () => {
  const [isClosed, setisClosed] = useState(true);

  const handleModal = () => {
    setisClosed(!isClosed)
  }
  return (
    <div>
      {isClosed ? null : <ModalDelete closed={()=>{handleModal()}}/> }

      <div>aaddsdddddddddddddddddddddd</div>
      <button onClick={()=>{handleModal()}}>cek</button>
    </div>
  );
};
