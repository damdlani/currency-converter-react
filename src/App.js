import React, { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import { currencies } from './currencies'
import { useAPIrates } from './useAPIRates';




function App() {
  const [result, setResult] = useState()  

  const ratesData = useAPIrates();
  
  const countResult = (amount, currency) => {
    const rate = ratesData.rates[currency];
    
    setResult({
      fromAmount: +amount,
      toAmount: (amount / rate).toFixed(3),
      currency,
    })
  };

  

  return (
    <Container>
      {ratesData.rates ? 
              <Form 
              countResult={countResult} 
              result={result}
              date={ratesData.date}
              rates={Object.keys(ratesData.rates)}
            /> :
            ratesData.loading  
    }
        <Footer name={"Krzysztof Kwieciński 2020"} />
    </Container>
  );
}

export default App;
