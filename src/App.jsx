import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import LandingPage from './LandingPage';
import GamePage from './GamePage';

const App = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={LandingPage}></Route>
        <Route path='/game' element={GamePage}></Route>
      </Routes>
    </div>
  )
};

export default App;
