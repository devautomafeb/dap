
import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    justify-content: center;
    text-align: center;
    margin: auto;
    align-items: center;
    margin: auto;
    background-position: center;
    `

export const Container2 = styled.div`
padding: 5%;
display: block;

h1, h4 {
    margin-bottom: 25px; /* Adjust the value as needed */
}
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.COLORS.gray400}; /* Cor da linha */
    margin: 20px 0; /* Espaçamento vertical em torno da linha */
`;