import styled from 'styled-components';

export const StyledClock = styled.div`
    text-align: right;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    padding: 5px 15px;
    margin: 5px 0 40px;

    @media (max-width: 767px) {
        font-size: 10px;        
    }
`;