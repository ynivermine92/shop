import React, { useState } from 'react';

const Counter = ({ id, handleCountChange }) => {
    const [calc, setCalc] = useState(1);

    const plusCalc = () => {
        setCalc(prevCalc => {
            const newCount = prevCalc + 1;
            handleCountChange(id, newCount);
            return newCount;
        });
    };

    const minusCalc = () => {
        if (calc > 1) { 
            setCalc(prevCalc => {
                const newCount = prevCalc - 1;
                handleCountChange(id, newCount);
                return newCount;
            });
        }
    };

    return (
        <div className="counter">
            <div className="counter__btn minus" onClick={minusCalc}></div>
            <div className="counter__input">{calc}</div>
            <div className="counter__btn plus" onClick={plusCalc}></div>
        </div>
    );
};

export default Counter;
