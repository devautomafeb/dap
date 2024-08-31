import { HeaderContainer, HeaderImg, HeaderSocial, HeaderTools, HeaderLogo, Image, StyledFaBars } from "./styles";
import logoDAP from '../../assets/images/logo02.png';

// Import images correctly
import headerRight from '../../assets/images/headerRight.png'; // Adjust the path if necessary
import headerLeft from '../../assets/images/headerLeft.png';

export function Header() {
    return (
        <HeaderContainer>
            <StyledFaBars />
            <HeaderSocial>
                <a href='https://www.instagram.com/dap.marketing'>
                    <Image src={headerLeft} alt="Header Left" style={{height:'25vh'}}/>
                </a>
            </HeaderSocial>

            <HeaderLogo>
                <HeaderImg>
                <img src={logoDAP} style={{height:'50px'}}/>
                </HeaderImg>
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
