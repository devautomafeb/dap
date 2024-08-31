import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export type headerVariant = 'dap' ;


export const StyledFaBars = styled(FaBars)`
    font-size: 24px;
    color: ${(props) => props.theme.COLORS.darkGray};
    margin: 10px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    background-color: white;
    height: 30vh;
    width: auto;
    background-color: ${(props) => props.theme.COLORS.gray100};

    @media (max-width: 768px) {
        justify-content: center; // Centralizar logo em telas pequenas
    }
`;

export const HeaderLogo = styled.div`
    text-align: center;
    justify-content: center;
    position: relative;
    width: 30vw;
    height: 20vh;

    @media (max-width: 768px) {
        width: 100vw;
        height: auto;
    }
`;

export const HeaderTools = styled.div`
    text-align: center;
    font-size: 1.0rem;
    justify-content: center;
    position: relative;
    height: 14vh;
    width: 35vw;
    transform: translateY(45%);

    @media (max-width: 768px) {
        display: none; // Esconder ferramentas em telas pequenas
    }
`;

export const HeaderSocial = styled.div`
    text-align: center;
    font-size: 1.2rem;
    position: relative;
    height: 14vh;
    width: 35vw;
    transform: translateY(50%);

    @media (max-width: 768px) {
        display: none; // Esconder rede social em telas pequenas
    }
`;

export const HeaderImg = styled.div`
    height: 80px;
    width: 80px;
    margin: auto;
    margin-top: 10vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 5vh; // Ajustar margem em telas pequenas
    }
`;

export const Image = styled.img`
    background-position: center;
    min-height: auto;
    min-width: auto;
`;
