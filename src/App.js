import React, { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import { currencies } from './currencies'
import { useAPIrates } from './useAPIRates';




function App() {
  const [result, setResult] = useState()  

  const API = useAPIrates();
  API.rates ? console.log(Object.keys(API.rates)) : console.log("dupa");
  
  const countResult = (amount, currency) => {
    const rate = currencies.find(({shortname}) => shortname === currency).value;
    
    setResult({
      fromAmount: +amount,
      toAmount: (amount / rate).toFixed(3),
      currency,
    })
  };

  

  return (
    <Container>
      {API.rates ? 
              <Form 
              countResult={countResult} 
              result={result}
              date={API.date}
            /> :
            API.loading  
    }
        <Footer name={"Krzysztof Kwieciński 2020"} />
    </Container>
  );
}

export default App;
