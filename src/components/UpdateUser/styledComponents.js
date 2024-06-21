import styled from 'styled-components'

export const MainConatiner = styled.div`
    background-color: ${props => props.isdarkmode ? '#000000': '#ffffff' };
    min-height: 90vh;
`

export const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 20px;
`

export const UserDetails = styled.p`
    font-size: 24px;
    font-family: 'Roboto';
    color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    @media (max-width: 500px){
        font-size: 18px;
    }
    
`
export const ListItem = styled.div`
    margin-bottom: 15px;
    margin-right: 15px;
    padding: 15px;
    width: 90%;
    max-width: 500px;
    border: 1px solid;
    border-color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    @media (max-width: 500px){
        width: 90%;
        margin-right: 0;
    }
`

export const Button = styled.p`
    margin-right: 30px;
    border-radius: 6px;
    font-size: 17px;
    border: 0;
    color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    background-color: transparent;
    border: ${props => props.isactivechange && '2px solid grey'};
    padding: 10px;
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    flex-wrap: wrap;
    margin-bottom: 30px;
`

export const Input = styled.input`
    height: 38px;
    width: 90%;
    max-width: 600px;
    color: ${props => props.isdarkmode ? '#ffffff': '#000000' };
    border: ${props => props.isdarkmode? '1px solid #ffffff': '1px solid #000000' };
    background-color: ${props => props.isdarkmode ? '#000000': '#ffffff' };
    margin-bottom: 10px;
    padding-left: 14px;
    border-radius: 6px;
`

export const SaveButton = styled.button`
    height: 30px;
    width: 80px;
    border: none;
    color: ${props => props.isdarkmode ? '#000000': '#ffffff'};
    border-radius: 6px;
    background-color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    font-family: 'Roboto';
    margin-bottom: 20px;
`

export const Text = styled.p`
    color: green;
    font-weight: bold;
`