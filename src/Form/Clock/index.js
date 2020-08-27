import React, { useState, useEffect } from 'react';


import './style.css';

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {      
        const intervalID = setInterval(() => {
            setDate(date => date = new Date())
        }, 1000);

        return () => { 
            clearInterval(intervalID)
        };
    }, [])

    const day = date.toLocaleDateString(undefined, {
                    day: "numeric", 
                    month: "long",
                    weekday: "long"
                });
    const time = date.toLocaleTimeString();

    return (
        <>
        <div className="clock">
            Dzisiaj jest {day}, {time}
        </div>
        </>

    );
};

export default Clock;