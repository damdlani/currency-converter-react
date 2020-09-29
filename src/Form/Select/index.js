import React from 'react';
import { StyledInput } from '../styled';

const Select = ({currency, handleCurrencySelect, rates}) => {

   return <StyledInput 
        as="select"
        value={currency}
        required
        name="currencies" 
        onChange={handleCurrencySelect}
    >
        <option 
            className="form__currency" 
            value=""
        >
                Rozwiń, aby wybrać walutę
        </option>
        {rates.map(rate => 
            <option 
                className="form__currency" 
                key={rates.indexOf(rate)} 
                value={rate}
            >
                    {rate}
            </option>
        )}
    </StyledInput>
};

export default Select;