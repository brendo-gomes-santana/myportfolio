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

    /* width */
    ::-webkit-scrollbar {
        width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${(props) => { return props.theme.contrastColor }}; 
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #2B384B; 
    }

`;

export default GlobalStyle;
