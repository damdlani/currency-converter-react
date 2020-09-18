import React, { useState, useEffect } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';
import { currencies } from './currencies'

function App() {
  const [result, setResult] = useState()  

  useEffect(() => {
    //https://api.exchangeratesapi.io/latest?base=PLN gdy daje ten link, to ok, ale jak robię w nim literówkę,
    //to nie pokazuje wgl statusu błędu, przez co nie działa wyjątek !response.ok i nie mogę dać swojego błędu
      fetch("data.json")
          .then(response => {
              if(!response.ok) {
                throw new Error();
              }
              
              return response;
          })
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(error => console.error(error));
    }, [])   
   
  
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
