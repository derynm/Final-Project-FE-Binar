import { Button } from "bootstrap";
import React, { useState } from "react";
import { ModalConfirm } from "../../Assets/Components/Modal/ModalConfirm";
import { ModalTwo } from "../../Assets/Components/Modal/ModalTwo";

export const Home = () => {

  const [openModal, setOpenModal] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="mt-5">
        <button className="btn btn-sm btn-primary" onClick={() => { setOpenModal(true) }}>Open Modal 1</button>
        {/* {openModal && <ModalConfirm show={openModal} onHide={() => setOpenModal(false)} />} */}
        {openModal && <ModalConfirm setModalOpen={setOpenModal} />}
      </div>
    </div>
  );
};
