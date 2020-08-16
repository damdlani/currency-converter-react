import React from 'react'; 
import './style.css';

const Result = ({amount, result, currency}) => (
<div className="result">{amount}PLN = {result}{currency}</div>
);

export default Result;