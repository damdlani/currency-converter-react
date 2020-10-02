import React, { useState } from 'react';
import Result from './Result';
import Input from './Input';
import Select from './Select';
import Label from './Label';
import { Clock } from './Clock';
import { StyledForm, Header, Button, Paragraph } from './styled';
import { NoDataDiv } from '../NoDataDiv';
import { useAPIrates } from '../useAPIRates';

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [result, setResult] = useState();
    
    
    const ratesData = useAPIrates();

    const countResult = (amount, currency) => {
        const rate = ratesData.rates[currency];
        
        setResult({
        fromAmount: +amount,
        toAmount: (amount * rate).toFixed(3),
        currency,
        })
    };  


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

    return  ratesData.successStatus ?
                <StyledForm 
                onSubmit={onFormSubmit}
                >
                <Clock />
                <Header>Przelicznik walut</Header>
                <Label 
                    spanContent={"Kwota"} 
                    userActionField=
                    {
                    <Input 
                        amount={amount}
                        changeAmount={changeAmount}
                    />
                    }
                />
                <Label 
                    spanContent={"Waluta"}
                    userActionField=
                    {
                    <Select 
                        rates={ratesData.rates}
                        currency={currency}
                        handleCurrencySelect={handleCurrencySelect} 
                    />
                    }
                />    
                <Button>Przelicz</Button>
                <Paragraph>Waluty przeliczane są na podstawie danych z Europejskiego Banku Centralnego z&nbsp;dnia&nbsp;{ratesData.date} </Paragraph>
                <Result result={result} />
            </StyledForm> :
            <NoDataDiv
            statusInfo={ratesData.errorStatus ? "error" : "loading"}
            />
    
};

export default Form;