import styled from 'styled-components';


export const Div = styled.div`
    width: 100%;
    padding: 20px 30px;
    background-color: rgb(255, 255, 255, .9);
    border: hsl(0, 0%, 30%) solid 1px;
    border-radius: 30px;
    text-align: center;


    @media (max-width: 767px) {
        padding: 20px;
    }
`;
