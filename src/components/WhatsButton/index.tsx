import { FaWhatsapp } from "react-icons/fa"

import { FontH1, WhatsappContainer } from "./style";

function WhatsButton() {
    return (
        <div>
            <a href='https://wa.me/message/5521974569595'>
                <WhatsappContainer>

                    <FontH1><FaWhatsapp /></FontH1>
                </WhatsappContainer>
            </a>
        </div>
    )
}

export default WhatsButton