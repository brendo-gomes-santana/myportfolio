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
    @media screen and (max-width: 500px){
        
        padding: 3em 1em;

    }
`;

export const ContainerContatos = styled.article`
        width: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        flex-wrap: wrap-reverse;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-width: 400px;
    max-width: 720px;

    padding: 1em;
    border-radius: 13px;
    background-color: ${(props) => { return props.theme.contrastColor }};

    h1{
        margin-bottom: 0.5em;
        color: ${(props) => { return props.theme.background }};
    }

    input{
        margin: 0.5em 0;
        height: 40px;
        outline: none;
        border: none;
        padding: 0 0.5em;
        font-size: 15px;
        border-radius: 13px;
        background-color: ${(props) => { return props.theme.background }};
    }
    label {
        display: flex;
        align-items: center;
        color: ${(props) => { return props.theme.background }};
        input {
            width: 20px;
            height: 20px;
            border: none;
            outline: none;

            margin-right: 0.5em;
            border-radius: 13px;
        }
    }
    textarea{
        height: 50vh;
        resize: none;
        outline: none;
        border: none;
        padding: 0.5em;
        font-size: 15px;

        margin: 0.5em 0;
        border-radius: 13px;

        background-color: ${(props) => { return props.theme.background }};
    }


    button {
        height: 40px;
        border: none;
        border-radius: 13px;
        cursor: pointer;
        background-color: ${(props) => { return props.theme.background }};

        font-weight: bold;
        font-size: 15px;
        color: ${(props) => { return props.theme.contrastColor }};
    }

`;

export const ContainerCards = styled.article`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    margin: 2em 0;
    width: 20em;

    a{
        padding: 0.9em;
        background-color: #2B384B;
        border-radius: 100%;
        margin: 0.5em;
        svg{
            font-size: 2em;
            color: ${props => props.theme.contrastColor};
        }
    }

    div{
        display: flex;
        flex-direction: column;

        span{
            font-weight: bold;
        }

        p{
            color: #828282;
            font-size: 15px;
        }
    }


    &:hover{
        transform: scale(1.15);
    }

    transition: 0.5s;
`;