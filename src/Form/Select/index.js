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
        {Object.keys(rates).map(currency => 
            <option 
                className="form__currency" 
                key={currency} 
                value={currency}
            >
                    {currency}
            </option>
        )}
    </StyledInput>
};

export default Select;