import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import Register from './Register';
import Login from './Login';
import AllScores from './AllScores';
import MyScores from './MyScores';
import { AppContext } from "./Context";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <div>
      <AppContext.Provider value={{token, setToken}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/game' element={<GamePage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/allScores' element={<AllScores />}></Route>
        <Route path='/scores/:userId' element={<MyScores />}></Route>
      </Routes>
      </AppContext.Provider>
    </div>
  )
};

export default App;
