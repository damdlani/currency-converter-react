import { useState, useEffect } from 'react';

export const useAPIrates = () => {
    const [ratesData, setRatesData] = useState({
      loading: "Trwa pobieranie danych, proszę czekać",
      error: "Niestety wystąpił błąd, proszę spróbować ponownie"
    });
  
    useEffect(() => {
          setTimeout(() => {
            fetch("/currency-converter-react/data.json")
            .then(response => {
                if(!response.ok) {
                  throw new Error();
                }
                return response;
            })
            .then(response => response.json())
            .then(response => setRatesData({...ratesData, date: response.date, rates: response.rates}))
            .catch(error => console.error(error));
          }, 500);
      }, [])   
     return ratesData;
  };