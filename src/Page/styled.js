import styled, { keyframes } from "styled-components";
const animate = keyframes`

  to  {
    border-radius: 100% 50% 100% 50%;
  }
  from {
    border-radius: 50% 100% 50% 100%;
  }
`;
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
            color: #7DA2DA;
        }
    }

    p{
        font-size: 1em;
        letter-spacing: 5px;

    }
`;

export const ContainerImg = styled.figure`

    height: 490px;
    width: 450px;
    
    background-color: ${props => props.theme.contrastColor};
    overflow: hidden;

    animation: ${animate} 3s alternate infinite;

    img{
    width: 500px;
    height: 500px; 

    object-fit: cover;
    object-position: 0px -110px; /* try 20% 10% */
    }
`;

export const Sobre = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1em;

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

export const Contatos = styled.section`
    padding: 1em;
    h5{
        font-size: 2em;
        letter-spacing: 20px;
        margin: 0.5em 0;
    }
`;