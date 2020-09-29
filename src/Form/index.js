import React, { useState } from 'react';
import Result from './Result';
import Input from './Input';
import Select from './Select';
import Label from './Label';
import { Clock } from './Clock';
import { StyledForm, Header, Button, Paragraph } from './styled';

const Form = ({countResult, result, date, rates}) => {
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")

    const changeAmount = ({target}) => {
        setAmount(target.value)
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(amount, currency);           
    }
    
    const handleCurrencySelect = ({target}) => {
        setCurrency(target.value);
    }

    return  <StyledForm 
                onSubmit={onFormSubmit}
            >
                <Clock />
                <Header>Przelicznik walut</Header>
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
                                        rates={rates}
                                        currency={currency}
                                        handleCurrencySelect={handleCurrencySelect} 
                                    />
                                    }
                />    
                <Button>Przelicz</Button>
                <Paragraph>Waluty przeliczane są na podstawie danych z Europejskiego Banku Centralnego z&nbsp;dnia&nbsp;{date} </Paragraph>
                <Result result={result} />
            </StyledForm>
    
};

export default Form;