import styled from "styled-components";

export const NavBar = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isdarkmode? '#000000': '#ffffff'};
    border-bottom: ${props => props.isdarkmode? '1px solid #ffffff': '1px solid #000000'};
`
export const NavList = styled.ul`
    padding-left: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 90%;
`

export const NavItem = styled.li`
    color: ${props => props.isdarkmode? '#ffffff': '#000000'};
    margin-right: 15px;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
`

export const DarkModeBtn = styled.button`
    height: 30px;
    width: 120px;
    border: none;
    color: ${props => props.isdarkmode ? '#000000': '#ffffff'};
    border-radius: 6px;
    background-color: ${props => props.isdarkmode ? '#ffffff': '#000000'};
    font-family: 'Roboto';
    margin-left: auto;
`