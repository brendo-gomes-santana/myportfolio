import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
       background-color: ${(props) => { return props.theme.background }};
       color: ${(props) => { return props.theme.colorFont }};
    }
`;

export default GlobalStyle;
