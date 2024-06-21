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
    padding-top: 20px;
    padding-bottom: 20px;
`

export const UsersList = styled.div`
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Form = styled.form`
    margin-top: 15px;
    magin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
`

export const Feild = styled.input`
    width: 100%;
    height: 40px;
    color: ${props => props.isdarkmode ? '#ffffff': '#000000' };
    border: ${props => props.isdarkmode? '1px solid #ffffff': '1px solid #000000' };
    background-color: ${props => props.isdarkmode ? '#000000': '#ffffff' };
    outline: none;
    padding-left: 12px;
    border-radius: 4px;
    border: ${props => props.isrequired? '2px solid red': '' };
    
    
`

export const Label = styled.label`
    font-family: 'Roboto';
    color: ${props => props.isdarkmode ? '#ffffff': '#323f4b' };
`

export const FeildContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    margin-bottom: 10px;
    @media (max-width: 500px){
        width: 90%;
    }
`

export const SubmitButton = styled.button`
     height: 30px;
    width: 80px;
    border: none;
    color: ${props => props.isdarkmode ? '#000000': '#ffffff'};
    border-radius: 6px;
    background-color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    font-family: 'Roboto';
    &:hover{
        background-color: skyblue;
        color: black;
    }
`

export const AddUserButton = styled(SubmitButton)`
    margin-bottom: 20px;
`

export const Text = styled.p`
    color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    font-size: 24px;
`