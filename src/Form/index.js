import React, { useState } from 'react';
import Result from './Result';
import Input from './Input';
import Select from './Select';
import Label from './Label';
import { Clock } from './Clock';
import './style.css';

const Form = ({countResult, result}) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")

    const changeAmount = ({target}) => {
        setAmount(target.value)
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency);
        setAmount("");   
        setCurrency("");
            
    }
    const handleCurrencySelect = ({target}) => {
        setCurrency(target.value);
    }

    return <form 
                className="form"
                onSubmit={onFormSubmit}
            >
            <Clock />
            <h1 className="form__title">Przelicznik walut</h1>
            <Label 
                spanContent={"Kwota w zł"} 
                userActionField={
                                <Input 
                                    amount={amount}
                                    changeAmount={changeAmount}
                                />
                                }
            />
            <Label 
                spanContent={"Waluta"}
                userActionField={
                                <Select 
                                    currency={currency}
                                    handleCurrencySelect={handleCurrencySelect} 
                                />
                                }
            />    
          <button className="form__button">Przelicz</button>
          <p className="form__info">Waluty przeliczane są na podstawie danych z tabeli nr 158/A/NBP/2020 z dnia 2020-08-14 </p>
          <Result result={result} />
    </form>
    
};

export default Form;