import {useState} from "react";
import { Link } from "react-router-dom";
import "./App.css";

const LandingPage = () => {
    
  return (
    <div className="landing">
        <h2 className="welcome">Press start game to play!</h2>
        <Link className="start" to={"/game"}>Start Game</Link>
    </div>
  )
};

export default LandingPage;
