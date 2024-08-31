import styled, { css } from 'styled-components';


export type TextVariant = 'toRight' | 'toLeft' | 'none';

interface TextVariantProps {
    variant?: TextVariant;
}

export const CardText = styled.div<TextVariantProps>`
    display: flex;
    justify-content: center;
    text-align: justify;
    margin: auto;
    margin-bottom: 0;
    margin-top: 0;
    align-items: center;
    margin-top: 5%;
    background-color: ${(props) => props.theme.COLORS.gray100};

    ${(props) => (
        (props.variant == 'toLeft') ? (
            css`
        background-position: center;
        margin-bottom: 50px;`
        ) : (
            css`
        flex-direction: row-reverse;    
        background-position: center;`
        ))
    }
    @media(max-width:768px){
        justify-content: center;
        text-align: justify;
        margin: 5%;
        margin-bottom: 0;
        margin-top: 0;
        align-items: center;
        margin-top: 5%;
        display: block;
        box-sizing: border-box;
    }   
`;

export const Img = styled.img<TextVariantProps>`
    height: 70vh;
    margin: 2%;
    margin-right: 10vw;
    margin-left: 5vw;


    ${(props) => (
        (props.variant == 'toLeft') ? (
            css`
        background-position: center;
        margin-bottom: 50px;`
        ) : (
            css`
        flex-direction: row-reverse;    
        background-position: center;
        margin-bottom: 50px;`
        ))
    }   

    @media(max-width:768px){
        max-width:90vw;
        height:auto;
        margin: 0;
        padding: 5px;
    }
`;

