import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import "./App.css";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const roleHandler = (e) => {
    setRole(e.target.value);
  };

  const register = () => {
    const user = {
      username,
      email,
      password,
      role,
    };
    axios
      .post("http://localhost:5000/users", user)
      .then((response) => {
        setMessage({ data: response.data.message, status: "success" });
        setTimeout(() => {
          navigate("/login");
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
            label="Username"
            variant="outlined"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            style={{ marginTop: "3%" }}
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ marginTop: "3%" }}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl component="fieldset" style={{ marginTop: "3%" }}>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={role}
              onChange={roleHandler}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="User"
                style={{ color: "white" }}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Admin"
                style={{ color: "white" }}
              />
            </RadioGroup>
          </FormControl>
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
            onClick={register}
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
