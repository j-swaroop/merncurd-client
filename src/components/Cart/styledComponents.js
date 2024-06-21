import styled from "styled-components";

export const MainConatiner = styled.div`
    background-color: ${props => props.isdarkmode ? '#000000': '#ffffff'};
    min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 20px;
    @media (max-width: 500px){
        width: 90%;
    }
`

export const Text = styled.p`
    font-size: 20px;
    color: ${props => props.isdarkmode ? '#14c6de': '#323f4b'};
    font-family: 'Roboto';
    margin-top: 15px;
    @media (max-width: 500px){
        font-size: 16px;
    }
`