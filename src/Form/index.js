import React, { useState } from 'react';
import './style.css';

const Form = ({countResult}) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")

    const changeAmount = (event) => {
        setAmount(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency)
        
    }
    const handleCurrencySelect = (event) => {
        setCurrency(event.target.value);
    }

    return <form 
                className="form"
                onSubmit={onFormSubmit}
            >
                
            <h1 className="form__title">Przelicznik walut</h1>
            <label className="form__label">
                <span className="form__span">Kwota w zł*:</span>
                <input 
                    className="form__input"
                    type="number" 
                    step="0.01" 
                    required 
                    min="0.01" 
                    value={amount}
                    onChange={changeAmount}
                />
            </label>
                  <label className="form__label">
                      <span className="form__span">Waluta*:</span>
                      <select 
                        required
                        name="currencies" 
                        className="form__currencies"
                        onChange={handleCurrencySelect}
                        >
                            <option className="form__currency" value="">Rozwiń, aby wybrać walutę</option>
                            <option className="form__currency" value="EUR">Euro</option>
                            <option className="form__currency" value="USD">Dolar amerykański</option>
                            <option className="form__currency" value="GBP">Funt szterling</option>
                            <option className="form__currency" value="CHF">Frank szwajcarski</option>
                      </select>
                  </label>    
          <button className="form__button">Przelicz</button>
          <p className="form__info">Waluty przeliczane są na podstawie danych z tabeli nr 158/A/NBP/2020 z dnia 2020-08-14 </p>
    </form>
};

export default Form;