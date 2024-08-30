import { HeaderContainer, headerVariant, HeaderImg,HeaderSocial, HeaderTools, HeaderLogo } from "./styles";
import { Link } from "react-router-dom";

import headerRight from '../../assets/images/header_right.png';
import headerLeft from '../../assets/images/header_left.png';

interface HeaderProps {
    headerVariant: headerVariant;
}

export function Header(props: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderSocial>
                <img src={headerLeft} style={{ height: '100px' }} />
            </HeaderSocial>

            <HeaderLogo>
                <HeaderImg headerVariant = {props.headerVariant} />
            </HeaderLogo>

            <HeaderTools>
                <img src={headerRight} style={{ height: '100px' }} />
            </HeaderTools>

        </HeaderContainer>
    )
} 