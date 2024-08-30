import styled, { css } from 'styled-components';

import logoDAP from '../../assets/images/logo02.png';

export type headerVariant = 'dap' | 'dap_comemorative';

interface HeaderVariantProps {
    headerVariant: headerVariant;
}

const headerVariants = {
    dap: logoDAP,
}

export const HeaderContainer = styled.div`
    display: flex;
    background-color: white;
    height: 30vh;
    width: auto;
    background-color:${(props) => props.theme.COLORS.gray100};
`;

export const HeaderLogo = styled.div`
    text-align: center;
    justify-content: center;
    position: relative;
    width: 20vw;
    height: 20vh;
`;

export const HeaderTools = styled.div`
   text-align: center;
    font-size: 1.0rem;
    justify-content: center;
    position: relative;
    height: 14vh;
    width: 40vw;
    transform: translateY(45%);
`;

export const HeaderSocial = styled.div`
    text-align: center;
    font-size: 1.2rem;
    position: relative;
    height: 14vh;
    width: 40vw;
    transform: translateY(50%);
`;

export const HeaderList = styled.li`
    display: inline;
    margin: 5px;
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme['--blue-600']};
    font-size: 1.5rem;
`
export const HeaderImg = styled.div<HeaderVariantProps>`
    height: 80px;
    width: 80px;
    margin: auto;
    margin-top:10vh;
    background-image:url(${(props) => headerVariants[props.headerVariant]});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`

