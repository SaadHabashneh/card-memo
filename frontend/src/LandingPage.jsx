import { useNavigate } from "react-router-dom";
import "./App.css";

const LandingPage = () => {
  
    const navigate = useNavigate();

  return (
    <div className="landing">
        <h2 className="welcome">Press start game to play!</h2>
        <Link className="start" to={"/game"}>Start Game</Link>
    </div>
  )
};

export default LandingPage;
