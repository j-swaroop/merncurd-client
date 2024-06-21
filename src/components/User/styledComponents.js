import styled from "styled-components";


export const ListItem = styled.div`
    margin-bottom: 15px;
    margin-right: 15px;
    padding: 15px;
    width: 300px;
    border: 1px solid;
    border-color: ${props => props.isdarkmode ? 'grey': 'sliver'};
    border-radius: 12px;
    @media (max-width: 500px){
        width: 90%;
        margin-right: 0;
    }
`

export const UserDetails = styled.p`
    font-size: 20px;
    font-family: 'Roboto';
    color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    
`
export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto';

`
export const DeleteButton = styled.button`
    height: 30px;
    width: 80px;
    border: none;
    color: ${props => props.isdarkmode ? '#000000': '#ffffff'};
    border-radius: 6px;
    background-color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    font-family: 'Roboto';
`

export const UpdateButton = styled(DeleteButton)`
    margin-right: 15px;
`