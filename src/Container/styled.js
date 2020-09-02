import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 100px;
    min-height: 100vh;
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 500px) {
        padding: 10px;
    }
`;