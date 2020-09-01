import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {      
        const intervalID = setInterval(() => {
            setDate(date => date = new Date())
        }, 1000);

        return () => { 
            clearInterval(intervalID)
        };
    }, [])

    const day = date.toLocaleDateString("pl-PL", {
                    day: "numeric", 
                    month: "long",
                    weekday: "long"
                });
    const time = date.toLocaleTimeString("pl-PL");
    
    return {day, time};
};