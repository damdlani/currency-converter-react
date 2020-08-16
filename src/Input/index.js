import React from 'react';
// import './style.css';

const Input = ({amount, changeAmount}) => (
    <input 
        className="form__userAction"
        type="number" 
        step="0.01" 
        required 
        autoFocus
        placeholder="Wpisz kwotę"
        min="0.01" 
        value={amount}
        onChange={changeAmount}
    />
);

export default Input;