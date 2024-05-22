import { useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const NavBar = () => {
  const { token } = useContext(AppContext);
  const { setToken } = useContext(AppContext);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className="navbar">
        <div>
          <IconButton
            className="navBtn"
            onClick={() => navigate("/")}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeRoundedIcon></HomeRoundedIcon>
          </IconButton>
        </div>
        <div>
          <Button
            className="navBtn"
            color="inherit"
            onClick={() => navigate("/allScores")}
          >
            All Scores
          </Button>
          {token ? (
            <>
              <Button
                className="navBtn"
                color="inherit"
                onClick={() => navigate(`scores/${userId}`)}
              >
                My Scores
              </Button>
              <Button className="navBtn" color="inherit" onClick={logOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="navBtn"
                color="inherit"
                onClick={() => navigate("register")}
              >
                Register
              </Button>
              <Button
                className="navBtn"
                color="inherit"
                onClick={() => navigate("login")}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
