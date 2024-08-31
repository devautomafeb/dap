import styled from 'styled-components';

export const WhatsappContainer = styled.div`
    position: fixed;
    bottom: 15px;
    right: 25px;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: ${(props) => props.theme.COLORS.darkGray};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    border: 5px solid white;
    color: white;

    :hover {
        opacity:0.8;
        cursor: pointer;
    }
`;

export const FontH1 = styled.h1`
    color: white;
    margin: 0;
    padding: 2px;
    font-size: 38px; /* Ajuste o tamanho do ícone aqui */
    :hover {
        opacity:0.8;
        cursor: pointer;

    }
`;
