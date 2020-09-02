import React from 'react';
import { useCurrentDate } from '../useCurrentDate';
import { StyledClock } from './styled';

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <>
        <StyledClock>
            Dzisiaj jest {date.day}, {date.time}
        </StyledClock>
        </>

    );
};

