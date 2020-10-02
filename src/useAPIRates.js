import { useState, useEffect } from 'react';

export const useAPIrates = () => {
    const [ratesData, setRatesData] = useState({
      successStatus: false,
    });
  
    useEffect(() => {
          setTimeout(() => {
            fetch("https://api.exchangeratesapi.io/latest?base=PLN")
            .then(response => {
                if(!response.ok) {
                  throw new Error();
                }
                return response;
            })
            .then(response => response.json())
            .then(response => setRatesData({
                successStatus: true,
                date: response.date,
                rates: response.rates
            }))
            .catch(() => setRatesData({errorStatus: true}));
          }, 0);
      }, [])   
     return ratesData;
  };