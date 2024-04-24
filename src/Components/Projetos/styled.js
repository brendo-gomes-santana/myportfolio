import styled from "styled-components";

export const Container = styled.section`
    padding: 5em;

    h5{
        font-size: 2em;
        margin: 0.5em 0;
        letter-spacing: 20px;
    }

    article{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

    }
    @media screen and (max-width: 500px){
        
        padding: 3em 1em;

    }
`;

export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    position: relative;
    margin: 1em;

    img{
        border-radius: 13px;
        width: 100%;
    }


    &:hover{
        transform: scale(1.1);

        div{
            opacity: 0;
        }
    }

    transition: 0.5s;
`;

export const Capa = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgba(43,56,75, 0.8);

    border-radius: 13px;

    font-size: 20px;
    cursor: pointer;
    span{
        svg{
            margin: 0 0.2em;
        }
    }
`;
