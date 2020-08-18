import React, { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import { currencies } from './currencies'

function App() {
  const [result, setResult] = useState(0)
  const [resultAmount, setResultAmount] = useState(0)
  const [resultCurrency, setResultCurrency] = useState("")

  

  const saveResultData = (amount, currency) => {
    setResultAmount(amount);
    setResultCurrency(currency);
  }

  const countResult = (amount, currency) => {
     return currency === currencies[0].name ? setResult(amount/currencies[0].value)
          : currency === currencies[1].name ? setResult(amount/currencies[1].value)
          : currency === currencies[2].name ? setResult(amount/currencies[2].value)
          : setResult(amount/currencies[3].value);
  };
  console.log(result.toFixed(3))

  return (
    <Container>
        <Form 
          countResult={countResult} 
          result={result.toFixed(3)} 
          saveResultData={saveResultData}
          resultAmount={resultAmount} 
          resultCurrency={resultCurrency} 
        />
        <Footer name={"Krzysztof Kwieciński 2020"} />
    </Container>
  );
}

export default App;
