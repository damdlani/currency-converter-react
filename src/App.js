import React, { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Form from './Form';

function App() {
  const [result, setResult] = useState(4)

  const currencies = [
    {
      id: 1, 
      name: "EUR",
      value: 4.3988,
    },
    {
      id: 2, 
      name: "USD",
      value: 3.7227,
    },
    {
      id: 3, 
      name: "GBP",
      value: 4.8692,
    },
    {
      id: 4, 
      name: "CHF",
      value: 4.0906,
    },
  ];



  const countResult = (amount, currency) => {
     return currency === currencies[0].name ? setResult(amount/currencies[0].value)
          : currency === currencies[1].name ? setResult(amount/currencies[1].value)
          : currency === currencies[2].name ? setResult(amount/currencies[2].value)
          : setResult(amount/currencies[3].value)
  };
  console.log(result.toFixed(3))

  return (
    <Container>
        <Form countResult={countResult}/>
        <div className="result">10.50PLN = 50EUR</div>
        <Footer name={"Krzysztof Kwieciński 2020"} />
    </Container>
  );
}

export default App;
