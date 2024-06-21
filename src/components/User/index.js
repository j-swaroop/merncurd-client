import { useContext, useState } from 'react'
import {ListItem, UserDetails, ButtonsContainer, DeleteButton, UpdateButton} from './styledComponents'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const User = props => {
    const {isDarkMode} = useContext(ThemeContext)
    const {username, email, age, account_balance, _id} = props.data
    const {onDeleteUser} = props

    

    const onDeleteUserUser = () => {
        onDeleteUser(_id)
    }

    return(
        <ListItem isdarkmode={isDarkMode}> 
            <UserDetails isdarkmode={isDarkMode}> Name: {username}</UserDetails>
            <UserDetails isdarkmode={isDarkMode}> Mail: {email}</UserDetails>
            <UserDetails isdarkmode={isDarkMode}> Age: {age}</UserDetails>
            <UserDetails isdarkmode={isDarkMode}> Account Balance: {account_balance}</UserDetails>
            <ButtonsContainer> 
                <Link to= {`/user/${_id}`}>
                    <UpdateButton isdarkmode={isDarkMode}> Update </UpdateButton>
                </Link>
                <DeleteButton isdarkmode={isDarkMode} onClick={onDeleteUserUser}> Delete </DeleteButton>
            </ButtonsContainer>
        </ListItem>
    )
}


export default User