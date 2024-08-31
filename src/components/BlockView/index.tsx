import { AdvicesContainer, Img, Informations, BlockContainer } from "./styles";
import fone from '../../assets/images/autoFone.png';
import { FontAsH1, FontAsH4 } from "../Mission/styles";

export function BlockView() {
    return (
        <BlockContainer>
            
            <Informations>
            <h1>BRAND OVERVIEW</h1>
                <AdvicesContainer>
                    <FontAsH1>TARGET AUDIENCE</FontAsH1>
                    <FontAsH4>
                        Small and new businesses, who need
                        digital marketing to start and grow
                        their businesses with a human,
                        personalised approach.
                    </FontAsH4>
                </AdvicesContainer>

                <AdvicesContainer>
                    <FontAsH1>COMPETITORS</FontAsH1>
                    <h4> Bark </h4>
                    <h4> Byter </h4>
                    <h4>The good marketer </h4>
                    <h4> Gripped. </h4>
                    
                </AdvicesContainer>

                <AdvicesContainer>
                    <FontAsH1>OUR ADVANTAGE</FontAsH1>
                    <FontAsH4>
                        Personalised solutions crafted with
                        genuine creativity, not just AI
                        automation, and focus on building
                        lasting connections, ensuring your
                        brand's unique voice shines through
                        every campaign.
                    </FontAsH4>
                </AdvicesContainer>
            </Informations>

            
                <Img src={fone} />
           
        </BlockContainer>
    );
}
