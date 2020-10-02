import styled from 'styled-components';

export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    padding: 5px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`;

export const Span = styled.span`
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    text-align: left;
    padding-left: 5px;
    padding-top: 5px;

    @media (max-width: 767px) {
        flex-basis: 30px;
    }
`;