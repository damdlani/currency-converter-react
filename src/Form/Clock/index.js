import React, { useState } from 'react';
import './style.css';

const Clock = () => {
    let newDate = new Date();
    const [date, setDate] = useState(newDate.toLocaleDateString(undefined, {day: "numeric", month: "long",}));
    const [time, setTime] = useState(newDate.toLocaleTimeString());
    const [day, setDay] = useState(newDate.toLocaleDateString(undefined, {weekday: "long"}))

    const updateDate = () => {
        setDate(newDate.toLocaleDateString(
            undefined, {
                day: "numeric", month: "long",
            }
        ));
    }
    const updateTime = () => {
        setTime(newDate.toLocaleTimeString());
    }
    const updateDay = () => {
        setDay(newDate.toLocaleDateString(
            undefined, {
                weekday: "long"
            }
        ));
    }
    setInterval(() => {
        newDate = new Date();
        updateDate();
        updateTime();
        updateDay();    
    }, 1000)

    return (
        <div className="clock">
            Dzisiaj jest {day},  {date}, {time}
        </div>
    );
};

export default Clock;