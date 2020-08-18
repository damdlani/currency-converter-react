import React, { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import { currencies } from './currencies'

function App() {
  const [result, setResult] = useState()  

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
        <Form 
          countResult={countResult} 
          result={result}
        />
        <Footer name={"Krzysztof Kwieciński 2020"} />
    </Container>
  );
}

export default App;
