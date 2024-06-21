import Header from "../Header";
import React, { useContext, useEffect, useState } from 'react'
import {ResponsiveContainer, MainConatiner, UserDetails, ListItem, Button, ButtonsContainer, Input, SaveButton, Text} from './styledComponents'
import { useParams } from "react-router-dom";
import axios from "axios";
import ThemeContext from "../../context/ThemeContext";

const buttonList = [
    {
        id: 1,
        name: 'Change Username'
    },
    {
        id: 2,
        name: 'Change Password'
    },
    {
        id: 3,
        name: 'Change Email'
    },
    {
        id: 4,
        name: 'Change Age'
    },
    {
        id: 5,
        name: 'Change AccountBalance'
    }
]

const UpdateUser = () => {
    const {id} = useParams()
    const [userData, setUserData] = useState({})
    const {isDarkMode} = useContext(ThemeContext)
    const [isActive, setIsActive] = useState(buttonList[0])
    const [inputData, setInputData] = useState('')
    const [msg, setMsg] = useState('')
 
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://merncurdserver.onrender.com/users/${id}`)
            // console.log(response.data)
            setUserData(response.data)
        }
        fetchData()
    }, [])

    const onChangeField = event => {
        setInputData(event.target.value)
       switch(isActive.id){
            case 1:
                setUserData({...userData, username: event.target.value})
                break
            case 2:
                setUserData({...userData, password: event.target.value})
                break
            case 3:
                setUserData({...userData, email: event.target.value})
                break
            case 4:
                setUserData({...userData, age: event.target.value})
                break
            case 5:
                setUserData({...userData, account_balance: event.target.value})
                break

       }
    }


    const onClickBtn = item => {
        setIsActive(item)
        setInputData('')
    }

    const placeholderText = buttonList.filter(item => item.id === isActive.id)


    const onClickSave = async () => {
        const response = await axios.put('https://merncurdserver.onrender.com/users', userData)
        setMsg(response.data)
    }
  
    return (
        <>
            <Header/>
            <MainConatiner isdarkmode={isDarkMode}>
                <ResponsiveContainer>
                    <ButtonsContainer>
                        {buttonList.map(item => 
                            <Button isdarkmode={isDarkMode} key={item.id} isactivechange={item.id === isActive.id}
                                onClick={() => onClickBtn(item)}> {item.name}</Button>)}
                    </ButtonsContainer>
                    <Input type='text' placeholder={placeholderText.map(item => item.name)} 
                        isdarkmode={isDarkMode} onChange={onChangeField} value={inputData}/>
                    <SaveButton isdarkmode={isDarkMode} onClick={onClickSave}> Save </SaveButton>
                    {msg !== '' && <Text> {msg} </Text>}
                    <ListItem isdarkmode={isDarkMode}> 
                        <UserDetails isdarkmode={isDarkMode}> Name: {userData.username}</UserDetails>
                        <UserDetails isdarkmode={isDarkMode}> Password: {userData.password} </UserDetails>
                        <UserDetails isdarkmode={isDarkMode}> Mail: {userData.email}</UserDetails>
                        <UserDetails isdarkmode={isDarkMode}> Age: {userData.age}</UserDetails>
                        <UserDetails isdarkmode={isDarkMode}> Account Balance: {userData.account_balance}</UserDetails>
                    </ListItem>
                    
                </ResponsiveContainer>
            </MainConatiner>
        </>
    )
}

export default UpdateUser
