import styled from "styled-components";
import Box from '@mui/material/Box';

export const ContainerBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);

    max-width: 1080px;
    width: 90%;

    background-color: #0D1117;
    color: #fff;
    border-radius: 13px;
    padding: 0.5em;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
`;

export const ContainerInfor = styled.article`
    max-width: 500px;
    width: 100%;


    video{
        width: 100%;
        border-radius: 13px;
    }

    display: flex;
    flex-direction: column;


    p{
        margin: 1em 0;
        color: #828282;
    }
    a{
        text-align: center;
        width: 10em;
        background-color: ${(props) => { return props.theme.contrastColor }};
        border-radius: 13px;
    }
`;