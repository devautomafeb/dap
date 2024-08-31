
import { Header } from '../../components/Header';
import { TextCard } from '../../components/TextCard';

import WhatsButton from "../../components/WhatsButton";
import { Container, Container2, Separator } from './styles';

import rocket from '../../assets/images/rocket.png';
import { Mission} from '../../components/Mission';
import { BlockView } from '../../components/BlockView';
import { Footer } from '../../components/Footer';

export function Dap() {

    const textA = <Container2><h1>WE’RE HERE TO HELP</h1>
    
    
    <h4>Our journey began from our own struggles with traditional marketing
    companies. We found ourselves making big investments based on
    captivating pitches, only to be forgotten once the contract was signed.
    The content lacked personality and it made us feel disconnected from our
    own brand.</h4>
    
    <h4>We knew there had to be a better way.
    That’s why we started DAP Marketing, to offer a more personalised, human
    approach to marketing. We believe that every business deserves unique and
    engaging content that truly reflects its identity.
    Join us at Dap. Brand and experience marketing that’s crafted with care and
    infused with personality, just like your business.</h4>
    </Container2>

    return (
        <div>
            <Header headerVariant ='dap'/>

            <Container>
                <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={rocket} />
            </Container>

            <Separator />

            <Container>
                <Mission />
            </Container>

            <Separator />

            <Container>
                <BlockView/>
            </Container>
            <Separator />

            <Footer />


            <WhatsButton />

        </div >
    )
}
