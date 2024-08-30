import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.theme.COLORS.gray200};
`;

export const CustomH1 = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.COLORS.darkGray};
`;
