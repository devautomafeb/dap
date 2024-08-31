import styled from 'styled-components';

export const BlockContainer = styled.div`
    margin-left: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 10px;

    @media (max-width: 768px) {
        display: block;
        width: 100%; /* Ocupa 100% da largura da tela */
        margin-left: 0; /* Remove o margin-left em telas pequenas */
        padding: 0 5%; /* Adiciona um padding lateral */
        box-sizing: border-box;
    }
`;

export const AdvicesContainer = styled.div`
    background-color: ${(props) => props.theme.COLORS.pink};
    display: block;
    text-align: center;
    border-radius: 15px;
    height: auto;
    width: 20vw;
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.COLORS.darkGray};
    box-shadow: 0 0 40px ${(props) => props.theme.COLORS.gray300};
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.02) translateZ(0);
        box-shadow: 0 0 50px ${(props) => props.theme.COLORS.gray300};
    }

    @media (max-width: 768px) {
        align-items: center;
        display: block;
        width: 90%; /* Ocupa quase toda a largura da tela */
        margin: 0 auto 30px auto; /* Centraliza o bloco e adiciona margin-bottom */
    }
`;

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    text-align: center;

    @media (max-width: 768px) {
        display: block;
        width: 90%; /* Ocupa quase toda a largura da tela */
        margin: 0 auto; /* Centraliza o bloco */
        height: auto;
        box-sizing: border-box;
    }
`;

export const Img = styled.img`
    margin-top: 20%;
    box-sizing: border-box;
    height: 100%;
    width: 60vw;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 768px) {
        height: auto;
        border-radius: 10px;
        max-width: 75vw;
    }
`;

export const FontAsH3 = styled.h3`
    font-weight: 100;
    padding: 5px;

`;

export const FontAsLink = styled.a`

    text-decoration: none;
    font-size: 1em;
    font-weight: 300;
    margin-top: -20px;
`;
