import styled from "styled-components";

export const Container = styled.section`

    width: 100%;

    padding: 5em;
    h3{
        font-size: 2em;
        margin: 0.5em 0;
        letter-spacing: 20px;

    }

    @media screen and (max-width: 500px){
        
        padding: 3em 1em;

    }
`;
export const Card = styled.article`

    max-width: 150px;
    height: 100px;


    border-radius: 13px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${props => props.theme.contrastColor};
    transition: 0.5s;

    p{
        text-align: center;
        color: #fff;
        margin-bottom: 0.5em;
        color: ${props => props.theme.colorFontContrast};
    }

    svg{
        font-size: 60px;
        color: ${props => props.theme.colorFontContrast};
    }

    &:hover {
        transform: scale(1.05);
    }
`;