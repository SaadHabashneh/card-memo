import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import Register from './Register';
import Login from './Login';
import { AppContext } from "./Context";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <div>
      <AppContext.Provider value={{token, setToken}}>
      <NavBar />
      <Routes>
        <Route path='/' element={LandingPage}></Route>
        <Route path='/Game' element={GamePage}></Route>
        <Route path='/Register' element={Register}></Route>
        <Route path='/Login' element={Login}></Route>
      </Routes>
      </AppContext.Provider>
    </div>
  )
};

export default App;
