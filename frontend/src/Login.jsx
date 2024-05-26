import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import "./App.css";

const Login = () => {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    const user = {
      email,
      password,
    };
    axios
      .post(`${import.meta.env.VITE_URL}/users/login`, user)
      .then((response) => {
        setMessage({ data: response.data.message, status: "success" });
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("roleId", response.data.roleId);
        localStorage.setItem("userId", response.data.userId);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setMessage({ data: error.response.data.message, status: "error" });
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#1B1212" }}
        style={{ border: "1px solid rgb(93, 2, 2)" }}
      >
        <CardContent>
          <TextField
            style={{ marginTop: "3%" }}
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ marginTop: "3%" }}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && (
            <div className={`${message.status}`}>
              <p className="form-msg">{message.data}</p>
            </div>
          )}
          <br />
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "rgb(93, 2, 2)" }}
            onClick={login}
          >
            Login
          </Button><br/>
          <p className="formMsg">Don't have an account ? <Link to="/register">Register</Link></p>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
