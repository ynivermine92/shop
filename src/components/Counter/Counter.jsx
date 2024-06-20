import React, { useState } from 'react'

const Counter = () => {
    const [calc, setCalck] = useState(0)


    const plusCalck = () => {
        setCalck(prevCalck => prevCalck + 1)
    }

    const minusCalck = () => {
        calc > 0 ? setCalck(prevCalck => prevCalck - 1) : 0;

    }

    return (
        <div className="counter">
            <div className="counter__btn plus" onClick={minusCalck}></div>
            <div className="counter__input">{calc}</div>
            <div className="counter__btn minus" onClick={plusCalck}></div>
        </div>
    )
}

export default Counter
