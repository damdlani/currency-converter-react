import React from 'react';
import {StyledInput} from '../styled';

const Input = ({amount, changeAmount}) => (
    <StyledInput
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