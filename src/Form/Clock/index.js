import React from 'react';
import { useCurrentDate } from '../useCurrentDate'
import './style.css';

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <>
        <div className="clock">
            Dzisiaj jest {date.day}, {date.time}
        </div>
        </>

    );
};

