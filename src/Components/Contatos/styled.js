import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1em;
    h5{
        font-size: 2em;
        letter-spacing: 20px;
        margin-bottom: 3em;
    }

    div{
        width: 100%;
        max-width: 1080px;

        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;
export const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    a{
        padding: 0.9em;
        background-color: #2B384B;
        border-radius: 100%;

        svg{
            font-size: 2em;
            color: ${props => props.theme.contrastColor};
        }
    }
    span{
        margin: 0.5em 0;
        font-weight: bold;
    }

    p{
        color: #828282;
        font-size: 15px;
    }


    &:hover{
        transform: scale(1.15);
    }

    transition: 0.5s;
`;