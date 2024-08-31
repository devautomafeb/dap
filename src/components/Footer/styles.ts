import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.COLORS.pink};
    flex-wrap: wrap; /* Permite que os itens se movam para a linha abaixo se não houver espaço suficiente */
    gap: 1rem; /* Espaçamento entre itens para evitar sobreposição */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem; /* Ajusta o padding para dispositivos móveis */
    }
`;

export const FooterSocial = styled.div`
    display: flex;
    gap: 1rem; /* Espaçamento entre os ícones */
    font-size: 1.5rem; /* Ajuste o tamanho do ícone conforme necessário */
    margin: 0 auto; /* Centraliza os ícones se estiver em linha única */

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const FooterLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 1rem 0; /* Adiciona margem para melhorar o layout em telas menores */
    img {
        max-width: 100%; /* Garante que a imagem não ultrapasse o contêiner */
        height: auto; /* Mantém a proporção da imagem */
    }
`;

export const FooterTools = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem; /* Espaçamento entre o ícone e o texto */
    font-size: 1rem; /* Ajuste o tamanho do texto conforme necessário */
    flex: 1;
    justify-content: center; /* Centraliza os itens se estiver em linha única */
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center; 
    }
`;


