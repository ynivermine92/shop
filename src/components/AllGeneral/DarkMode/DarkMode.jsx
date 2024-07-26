import React, { useState } from 'react';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('locked');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('locked');
  };

  return (
    <>
      {modalOpen && (
        <div className="modal__wrapper">
          <div className="modal">
            <div className="modal__close" onClick={closeModal}>
              <img src="./img/cancel.svg" alt="cancel" width="10px" height="10px" />
            </div>
            <div className="modal__title"><span>Modal Title</span></div>
            <div className="modal__body">Modal Body</div>
          </div>
        </div>
      )}
      <a href="#" className="btn modal__btn" onClick={openModal}>Open modal</a>
    </>
  );
};

export default Modal;
