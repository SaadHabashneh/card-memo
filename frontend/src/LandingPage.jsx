import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./App.css";

const LandingPage = () => {
  
    const navigate = useNavigate();

  return (
    <div className="landing">
        <Typography className="welcome" variant="h1" component="h2">Press start game to play!</Typography>
        <Button className="start" onClick={() => navigate("/Game")}>Start Game</Button>
    </div>
  )
};

export default LandingPage;
