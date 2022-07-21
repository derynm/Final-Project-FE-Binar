import React, { useState } from "react";
import { ModalConfirm } from "../../Assets/Components/Modal/ModalConfirm";
import { ModalConfirmTwo } from "../../Assets/Components/Modal/ModalConfirmTwo";
import { ModalStatus } from "../../Assets/Components/Modal/ModalStatus";

export const Home = () => {

  const [openModal, setOpenModal] = useState(false);

  const [openModalTwo, setOpenModalTwo] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div>
      <div className="mt-5">
        <button className="btn btn-sm btn-primary" onClick={() => { setOpenModal(true) }}>Open Modal 1</button>
        {openModal && <ModalConfirm setModalOpen={setOpenModal} />}
      </div>

      <div className="mt-5">
        <button className="btn btn-sm btn-primary" onClick={() => { setOpenModalTwo(true) }}>Open Modal 2</button>
        {openModalTwo && <ModalConfirmTwo setModalOpenTwo={setOpenModalTwo} />}
      </div>

      <div className="mt-5">
        <button className="btn btn-sm btn-primary" onClick={() => { setModalStatus(true) }}>Open Modal Status</button>
        {modalStatus && <ModalStatus setModalStatus={setModalStatus} />}
      </div>

    </div>
  );
};
