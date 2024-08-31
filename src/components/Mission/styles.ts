import styled from 'styled-components';

export const MissionContainerSuper = styled.div`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    direction:row;
    padding:40px;
    

    @media(max-width:768px){
        display: block;
        align-items: center;
     }
`;

export const MissionContainer = styled.div`
    background-color: ${(props) => props.theme.COLORS.pink};
    display: inline-block;
    text-align: center;
    border-radius:15px;
    border-radius: 10px;
    height: auto;
    height: 50vh;
    width: 26vw;
    padding: 20px;
    margin: auto;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.COLORS.darkGray};
    box-shadow: 0 0 40px ${(props) => props.theme.COLORS.gray300};
    transition: transform 0.2s ease, box-shadow 0.2s ease; /* Reduzida a transição */
    
    &:hover {
        cursor: pointer;
        transform: scale(1.02) translateZ(0); /* Escala reduzida e força renderização de alta qualidade */
        box-shadow: 0 0 50px ${(props) => props.theme.COLORS.gray300};
    }

    @media (max-width: 768px) {
        align-items: center;
        display: block;
        width: auto;
        margin-bottom: 30px;
    }
`;

export const Img = styled.img`
    height: 20vh;
    margin: 5px;

    @media(max-width:768px){
        display: none;
     }
`;

export const FontAsH1 = styled.h1`
    font-weight: 600;
    padding: 5px;
    margin-bottom:20%;
`


export const FontAsH4 = styled.h4`
    margin-top:30%;
    padding: 5px;

    
`
