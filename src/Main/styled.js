import styled from 'styled-components';

export const StyledForm = styled.form `
    width: 100%;
    padding: 20px 30px;
    background-color: rgb(255, 255, 255, .9);
    border: hsl(0, 0%, 30%) solid 1px;
    border-radius: 30px;

    @media (max-width: 767px) {
        padding: 20px;
    }
`;

export const Header = styled.h1 `
    text-transform: uppercase;
    font-size: 26px;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      margin-bottom: 5px;
    }
`;

export const Button = styled.button `
    width: 100%;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    margin: 30px 0 10px;
    border: 1px solid rgb(5, 5, 5);
    border-radius: 5px;
    background-color: #EB003A;
    transition: .3s;

    &:hover {
        background-color: hsl(345, 100%, 51%);
        transform: scale(1.01);
    }
    @media (max-width: 767px) {
        margin: 0 0 10px;
    }
`;

export const Paragraph = styled.p `
    display: block;
    width: 100%;
    text-align: center;
    font-size: 10px;
    margin: 10px;
`;

export const StyledInput = styled.input`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 5px;
    border-radius: 5px;
    transition: .3s;

    &:hover {
        transform: scale(1.01);
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 15px;
    }
`;