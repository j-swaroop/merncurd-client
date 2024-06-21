import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import ThemeContext  from './context/ThemeContext';
import './App.css';
import { useState } from 'react';
import UpdateUser from './components/UpdateUser/';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const changeDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{isDarkMode, changeDarkMode: changeDarkMode}}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/tabs' element={<Cart/>}/>
          <Route exact path='/user/:id' element={<UpdateUser/>} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}



export default App;
