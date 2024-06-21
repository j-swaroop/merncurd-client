import { useContext, useState, useEffect } from "react";
import { MainConatiner, ResponsiveContainer, UsersList, Feild, Form, Label, FeildContainer, SubmitButton, AddUserButton, Text } from "./styledComponents";
import ThemeContext from "../../context/ThemeContext";
import axios from 'axios'
import Header from "../Header";
import User from "../User";

const Home = () => {
    const {isDarkMode} = useContext(ThemeContext)
    const [homeData, setHomeData] = useState([])
    const [addUser, setAddUser] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
        account_balance: '',
        isAddUser: false,
        responseText: '',
        required: false
    })

    const fetchHomeData = async () => {
        const response = await axios.get('https://merncurdserver.onrender.com/users')
        setHomeData(response.data)
    }

    useEffect(() => fetchHomeData, [])

    const onSubmitForm = async event => {
        event.preventDefault()

        if (addUser.username !== '' && addUser.password !== '' && addUser.email !== '' && addUser.age !== '' && addUser.account_balance !== ''){
            const response = await axios.post('https://merncurdserver.onrender.com/users', addUser)
            
            setAddUser({
                username: '',
                password: '',
                email: '',
                age: '',
                account_balance: '',
                isAddUser: false,
                responseText: response.data
            })

            fetchHomeData()
        }else{
            setAddUser({
                ...addUser, required: !addUser.required
            })
        }
    }

    const onChangeName = event => {
        setAddUser({...addUser, username: event.target.value})
    }

    const onChangePassword = event => {
        setAddUser({...addUser, password: event.target.value})
    }

    const onChangeEmail = event => {
        setAddUser({...addUser, email: event.target.value})
    }

    const onChangeAge = event => {
        setAddUser({...addUser, age: event.target.value})
    }

    const onChangeAccountBalance = event => {
        setAddUser({...addUser, account_balance: event.target.value})
    }

    const onAddUserBtnClicked = () => {
        setAddUser({...addUser, isAddUser: !addUser.isAddUser})
    } 

    const onDeleteUser = async id => {
        const response = await axios.delete('https://merncurdserver.onrender.com/users', {data: {idd:id}})
        console.log(response)

        setHomeData(homeData.filter(item => item._id !== id))
    }
    
    return(
        <>
            <Header />
            <MainConatiner isdarkmode={isDarkMode}> 
                <ResponsiveContainer> 
                   {addUser.isAddUser &&
                    <Form onSubmit={onSubmitForm}>
                        <FeildContainer> 
                            <Label isdarkmode={isDarkMode} htmlFor="Name"> Name </Label>
                            <Feild isdarkmode={isDarkMode} type='text' placeholder="Name" id='Name'
                                value={addUser.username} onChange={onChangeName} isrequired={addUser.required}/> 
                        </FeildContainer>
                        <FeildContainer>
                            <Label isdarkmode={isDarkMode} htmlFor='Password'> Password </Label>
                            <Feild isdarkmode={isDarkMode} type='password' placeholder="Password" id='Password'
                                value={addUser.password} onChange={onChangePassword} isrequired={addUser.required}/> 
                        </FeildContainer> 
                        <FeildContainer>
                            <Label isdarkmode={isDarkMode} htmlFor="Email"> Email </Label>
                            <Feild isdarkmode={isDarkMode} type='text' placeholder="Email" id='Email'
                                value={addUser.email} onChange={onChangeEmail} isrequired={addUser.required}/> 
                        </FeildContainer>
                        <FeildContainer>
                            <Label isdarkmode={isDarkMode} htmlFor="Age"> Age </Label>
                            <Feild isdarkmode={isDarkMode} type='number' placeholder="Age" id="Age"
                                value={addUser.age} onChange={onChangeAge} isrequired={addUser.required}/> 
                        </FeildContainer>
                        <FeildContainer>
                            <Label isdarkmode={isDarkMode} htmlFor="Account"> Account Balance </Label>
                            <Feild isdarkmode={isDarkMode} type='number' placeholder="Account Balance" id='Account'
                                value={addUser.account_balance} onChange={onChangeAccountBalance} isrequired={addUser.required}/> 
                        </FeildContainer>
                        <SubmitButton isdarkmode={isDarkMode}> Submit </SubmitButton>
                    </Form>}
                    {!addUser.isAddUser && <AddUserButton isdarkmode={isDarkMode} onClick={onAddUserBtnClicked}> Add User </AddUserButton>}
                    {addUser.responseText !== '' && <Text isdarkmode={isDarkMode}> {addUser.responseText} </Text>}
                    <UsersList>
                        {homeData.map(item => <User data={item} key={item._id} onDeleteUser={onDeleteUser}/>)}
                    </UsersList>
                </ResponsiveContainer>
            </MainConatiner>
        </>
        
    )
}


export default Home