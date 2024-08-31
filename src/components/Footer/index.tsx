import { FooterContainer, FooterSocial, FooterTools, FooterLogo } from "./styles";
import logo from '../../assets/images/logo02.png';
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <FooterContainer>
            <FooterSocial>
                <FaInstagram />
                <FaLinkedin />
                <FaWhatsapp />
            </FooterSocial>
            
            <FooterLogo>
                <img src={logo} alt="Logo" />
            </FooterLogo>

            <FooterTools>
                <div>
                    <FaEnvelope /> dap@dap.co.uk
                </div>
            </FooterTools>
        </FooterContainer>
    );
}
