import { useState, useEffect } from 'react';

export const useAPIrates = () => {
    const [ratesData, setRatesData] = useState({
      loading: "Trwa pobieranie danych, proszę czekać...",
      error: "Niestety wystąpił błąd, proszę ponownie załadować stronę.",
      errorStatus: false,
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
            .then(response => setRatesData({...ratesData, date: response.date, rates: response.rates}))
            .catch(error => {
                setRatesData({...ratesData, errorStatus: true})
                console.error(error);
            });
          }, 1000);
      }, [])   
     return ratesData;
  };