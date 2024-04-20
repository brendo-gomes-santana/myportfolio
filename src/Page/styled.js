import styled from "styled-components";

export const Banner = styled.section`
    padding: 20vh 1em 0 1em;
    display: flex;
    width: 100%;
    
    align-items: center;
    justify-content: space-around;

    min-height: 90vh;
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

export const Sobre = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1em;

    h3{
        font-size: 2em;
        letter-spacing: 20px;
        margin-bottom: 0.5em;

    }

    P{
        color: #828282;
        width: 100%;
        max-width: 1080px;
        text-align: center;
        line-height: 2em;
    }
`;