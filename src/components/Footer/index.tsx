import { FooterContainer,FooterSocial, FooterTools, FooterLogo } from "./styles";
import logo from '../../assets/images/logo02.png';
import { FaInstagram } from "react-icons/fa";


export function Footer() {
    return (
        <FooterContainer>
            <FooterSocial>
                <FaInstagram />
            </FooterSocial>
            
            <FooterLogo>
                <img src={logo} />
            </FooterLogo>

            <FooterTools>
           
            </FooterTools>
            
        </FooterContainer>
    )
} 