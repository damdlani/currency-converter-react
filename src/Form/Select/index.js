import React from 'react';
import { currencies } from '../../currencies'
import {StyledInput} from '../styled';

const Select = ({currency, handleCurrencySelect}) => (
    <StyledInput 
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
        {currencies.map(({id, shortname, fullname}) => 
            <option 
                className="form__currency" 
                key={id} 
                value={shortname}
            >
                    {fullname}
            </option>
        )}
    </StyledInput>
);

export default Select;