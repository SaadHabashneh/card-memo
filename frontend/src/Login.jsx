import {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "./Context";
import axios from 'axios';
import "./App.css";

const Login = () => {
    const {setToken} = useContext(AppContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        if (message && message.status == "success") {
          navigate("/");
        }
      }, [message, navigate]);

    const login = () => {
        const user = {
            email,
            password
        };
        axios
        .post("http://localhost:5000/users/login", user)
        .then((response) => {
          setMessage({ data: response.data.message, status: "success" });
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("userId", response.data.userId);
        })
        .catch((error) => {
          setMessage({ data: error.response.data.message, status: "error" });
        });
    };

  return (
    <div className='login-container'>
        <div className='login-form'>
            <input onChange={setEmail((e) => e.target.value)} type="email" placeholder="email..."/><br/>
            <input onChange={setPassword((e) => e.target.value)} type="password" placeholder="password..."/><br/>
        </div>
        {message && <div className={`${message.status}`}>
        <p className='form-msg'>{message.data}</p>
        </div>}<br/>
        <button onClick={login}>Login</button>
    </div>
  )
};

export default Login;