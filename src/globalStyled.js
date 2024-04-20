import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Slab", serif;;
    }

    body{
       background-color: ${(props) => { return props.theme.background }};
       color: ${(props) => { return props.theme.colorFont }};
    }

    a{
        text-decoration: none;
        color: ${(props) => { return props.theme.colorFont }};
    }
`;

export default GlobalStyle;
