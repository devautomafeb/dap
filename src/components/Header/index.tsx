import { HeaderContainer, headerVariant, HeaderImg, HeaderSocial, HeaderTools, HeaderLogo, Image, StyledFaBars } from "./styles";
import { Link } from "react-router-dom";

// Import images correctly
import headerRight from '../../assets/images/headerRight.png'; // Adjust the path if necessary
import headerLeft from '../../assets/images/headerLeft.png';



interface HeaderProps {
    headerVariant: headerVariant; // Ensure headerVariant is a valid type or interface
}

export function Header({ headerVariant }: HeaderProps) {
    return (
        <HeaderContainer>
            <StyledFaBars />
            <HeaderSocial>
                <a href='https://www.instagram.com/dap.marketing'>
                    <Image src={headerLeft} alt="Header Left" style={{height:'25vh'}}/>
                </a>
            </HeaderSocial>

            <HeaderLogo>
                <HeaderImg headerVariant={headerVariant} />
                <h3>We make marketing personal again</h3>
            </HeaderLogo>

            <HeaderTools>
            <a href='https://www.instagram.com/dap.marketing'>
                    <Image src={headerRight} alt="Header Right" style={{height:'25vh'}}/>
                </a>
            </HeaderTools>
        </HeaderContainer>
    );
}
