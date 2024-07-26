import React, { useEffect } from "react";

const ModalThank = ({ modelThank, closeModel }) => {


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modelThank && !e.target.closest('.modalThank')) {
        closeModel(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modelThank, closeModel]); 

  return (
    <div className={`modalThank__wrapper ${modelThank ? 'active' : ''}`}>
      <div className="modalThank">
        <div className="modalThank__close" onClick={closeModel}>
          <i className="large material-icons">close</i>
        </div>
        <div className="modalThank__title">
          <span>Thank you for registering</span>
        </div>
        <div className="modalThank__body">
          We have sent you an email to confirm your email.
        </div>
      </div>
    </div>
  );
};

export default ModalThank;
