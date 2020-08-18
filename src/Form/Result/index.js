import React from 'react'; 
import './style.css';

const Result = ({amount, result, currency}) => (
    <div className="form__result">
        {amount}PLN = <strong>{result}{currency}</strong>
    </div>
);

export default Result;