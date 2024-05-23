import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./App.css";

const LandingPage = () => {
  
  const navigate = useNavigate();
  const roleId = localStorage.getItem("roleId");

  const startHandler = () => {
    if (roleId == 1) {
      navigate("/game");
    }
    else {
      navigate("/login");
    }
  };

  return (
    <div className="landing">
      <div className="landingDiv">
          <Typography className="welcome" variant="h2">Press start game to play!</Typography>
          <Button className="start" color="secondary" style={{padding: "5%", marginLeft: "36.25%"}} onClick={startHandler}>Start Game</Button>
      </div>
    </div>
  )
};

export default LandingPage;
