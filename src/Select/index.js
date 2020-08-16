import React from 'react';

const Select = ({currency, handleCurrencySelect}) => (
    <select 
        value={currency}
        required
        name="currencies" 
        className="form__userAction"
        onChange={handleCurrencySelect}
    >
        <option className="form__currency" value="">Rozwiń, aby wybrać walutę</option>
        <option className="form__currency" value="EUR">Euro</option>
        <option className="form__currency" value="USD">Dolar amerykański</option>
        <option className="form__currency" value="GBP">Funt szterling</option>
        <option className="form__currency" value="CHF">Frank szwajcarski</option>
    </select>
);

export default Select;