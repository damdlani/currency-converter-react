import React from 'react';
import { currencies } from '../../currencies'

const Select = ({currency, handleCurrencySelect}) => (
    <select 
        value={currency}
        required
        name="currencies" 
        className="form__userAction"
        onChange={handleCurrencySelect}
    >
        <option className="form__currency" value="">Rozwiń, aby wybrać walutę</option>
        {currencies.map(({id, name, fullname}) => 
            <option className="form__currency" key={id} value={name}>{fullname}</option>
        )}
    </select>
);

export default Select;