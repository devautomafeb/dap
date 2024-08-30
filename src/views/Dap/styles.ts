
import styled, { css } from 'styled-components';

export const Title = styled.h1`
    padding: 50px;
    text-indent: 100px;
    color: ${(props) => props.theme['--dark-gray']};
    `

export const Container = styled.div`
    display: block;
    background:white;
    justify-content: center;
    text-align: center;
    margin: auto;

    align-items: center;
    margin-top: 5%;
    width:90vw;
    border-radius: 10px 10px 10px 10px;

    background-position: center;
    box-shadow: 0 0 20px ${(props) => props.theme['--dark-gray']};
    margin-bottom: 20px;`