import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme.COLORS.black};
    color:  ${(props) => props.theme.COLORS.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, h1 {
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h2, h3,h4, h5{
    font-family: "Arimo", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`
