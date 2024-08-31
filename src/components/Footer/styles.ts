import styled from 'styled-components';

export const FooterContainer = styled.div`
   background-color:${(props) => props.theme.COLORS.pink};
    display: flex;
    height: 40vh;
    width: auto;
`;

export const FooterLogo = styled.div`
    text-align: center;
    justify-content: center;
    position: relative;
    width: 20vw;
    height: 10vh;
   
`;

export const FooterTools = styled.div`
box-sizing:border-box;
   text-align: center;
    font-size: 1.0rem;
    justify-content: center;
    position: relative;
    width: 40vw;
    height: 10vh;
 
    transform: translateY(45%);
`;

export const FooterSocial = styled.div`
box-sizing:border-box;
    text-align: center;
    font-size: 1rem;
    position: relative;
    height: 10vh;

    width: 40vw;
    transform: translateY(50%);
    margin: 0;
`;



