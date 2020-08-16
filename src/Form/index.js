import React, { useState } from 'react';
import Result from '../Result';
import Input from '../Input';
import Select from '../Select';
import './style.css';

const Form = ({countResult, result, resultAmount, resultCurrency, saveResultData}) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")
    const [showResult, setShowResult] = useState(false)

    const changeAmount = (event) => {
        setAmount(event.target.value)
    }
    
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency);
        saveResultData(amount, currency);
        setShowResult(true)
        setAmount("");   
        setCurrency("");
            
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
                <Input 
                    amount={amount}
                    changeAmount={changeAmount}
                />
            </label>
            <label className="form__label">
                      <span className="form__span">Waluta*:</span>
                      <Select 
                        currency={currency}
                        handleCurrencySelect={handleCurrencySelect} />
            </label>    
          <button className="form__button">Przelicz</button>
          <p className="form__info">Waluty przeliczane są na podstawie danych z tabeli nr 158/A/NBP/2020 z dnia 2020-08-14 </p>
          {showResult ? <Result amount={resultAmount} result={result} currency={resultCurrency} /> : ""}
    </form>
    
};

export default Form;