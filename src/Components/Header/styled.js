import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;

    width: 100%;
    min-height: 11vh;
    border-bottom: 2px solid ${props => props.theme.contrastColor};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1em;

    flex-wrap: wrap;
    background-color: #0D1117;
    z-index: 1000;
    h1{
        color: #fff;
    }

    @media screen and (max-width: 644px){
        justify-content: center;
    }
`;

export const Navegacao = styled.nav`
    width: 30em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${props => {return props.theme.colorFont}}
    }

    a{
        font-weight: bold;
    }

    a, button {
        transition: 0.5s;
        color: #fff;
        &:hover{
            transform: translateY(-3px);
        }
    }
`;