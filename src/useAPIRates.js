import { useState, useEffect } from 'react';

export const useAPIrates = () => {
    const [ratesData, setRatesData] = useState({
      successStatus: false,
    });
  
    useEffect(() => {
          setTimeout(() => {
            fetch("http://api.exchangeratesapi.io/v1/latest?access_key=53fc72141847e9f19f6799b56ddf6d68&symbols=USD,AUD,CAD,PLN,MXN")
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