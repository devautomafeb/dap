import { FontAsH1, FontAsH4, MissionContainer, MissionContainerSuper } from "./styles";

export function Mission() {
    return (
        <MissionContainerSuper>
        
            <MissionContainer>
                
                <FontAsH1>MISSION</FontAsH1>
                <FontAsH4>Our mission is to provide tailored
                    marketing solutions that don’t just
                    look good on paper but resonate with
                    your audience and build lasting
                    connections.</FontAsH4>

            </MissionContainer>

            <MissionContainer>
                
                <FontAsH1>VISION</FontAsH1>
                <FontAsH4>To revolutionize the marketing
                    industry by delivering personalized,
                    creative solutions that empower
                    small and new businesses to connect
                    authentically with their audiences
                    and achieve sustainable growth.</FontAsH4>

            </MissionContainer>

            <MissionContainer>
                
                <FontAsH1>VALUES</FontAsH1>
                <FontAsH4>We strongly believe in being unique.
                    Creativity, collaboration and
                    commitment.</FontAsH4>

            </MissionContainer>
        </MissionContainerSuper>
    );
}
