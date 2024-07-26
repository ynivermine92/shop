

/* npm install react-input-mask --save */ ///install 
/* https://www.npmjs.com/package/react-input-mask */


/* https://primereact.org/inputmask/  UI customization*/
import { InputMask } from 'primereact/inputmask';

import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const InputMask = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="phone">Phone Number:</label>
      <InputMask
        mask="+7 (999) 999-99-99"
        maskChar="_"
        value={phoneNumber}
        onChange={handlePhoneChange}
      >
        {(inputProps) => <input id="phone" {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default InputMask;
