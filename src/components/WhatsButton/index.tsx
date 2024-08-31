import { FaWhatsapp } from "react-icons/fa";
import { FontH1, WhatsappContainer } from "./style";

function WhatsButton() {
    return (
        <div>
            <a 
                href='https://wa.me/5521974569595'
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Send a message on WhatsApp'
            >
                <WhatsappContainer>
                    <FontH1><FaWhatsapp /></FontH1>
                </WhatsappContainer>
            </a>
        </div>
    );
}

export default WhatsButton;
