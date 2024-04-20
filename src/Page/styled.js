import styled from "styled-components";

export const Banner = styled.section`
    padding: 20vh 1em 0 1em;

    display: flex;

    width: 100%;



    align-items: center;
    justify-content: space-around;

`;

export const Escrita = styled.article`

    h2{
        font-size: 4em;

        span{
            color: #4D7DF7;
        }
    }

    p{
        font-size: 1em;
        letter-spacing: 5px;

    }
`;

export const ContainerImg = styled.figure`

    border: 2px solid ${props => props.theme.contrastColor};
    border-radius: 100% 10% 120% 120%;

    img{
    width: 500px;
    height: 500px; 
    object-fit: cover;
    object-position: 0% 100%; 
    border-radius: 100%;

    }
`;

export const Sobre = styled.section``;