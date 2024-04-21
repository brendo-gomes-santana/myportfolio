import styled from "styled-components";

export const Container = styled.section`
    padding: 5em;

    h5{
        font-size: 2em;
        letter-spacing: 20px;
        margin-bottom: 0.5em;
    }

    @media screen and (max-width: 500px){
        
        padding: 3em 1em;

    }
`;

export const Lista = styled.ul`
    padding-left: 1em;
    list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"  width="15px" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path  fill="rgb(125, 162, 218)" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>');
    li{
       
        margin: 1em 0;
        color: #828282;
    }
`;