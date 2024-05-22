import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./App.css";

const LandingPage = () => {
  
    const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landingDiv">
          <Typography className="welcome" variant="h2">Press start game to play!</Typography>
          <Button className="start" color="secondary" style={{padding: "5%", marginLeft: "36.25%"}} onClick={() => navigate("/Game")}>Start Game</Button>
      </div>
    </div>
  )
};

export default LandingPage;
