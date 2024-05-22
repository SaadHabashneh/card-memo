import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Register = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    useEffect(() => {
        if (message && message.status == "success") {
            setTimeout(() => {
                navigate("/Login");
            }, 1000)
        }
    }, [message, navigate]);

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
        })
        .catch((error) => {
          setMessage({ data: error.response.data.message, status: "error" });
        });
    };

  return (
    <div className="reg-container">
        <div className="reg-form">
            <input onChange={setUsername((e) => e.target.value)} type="text" placeholder="username..."/><br/>
            <input onChange={setEmail((e) => e.target.value)} type="email" placeholder="email..."/><br/>
            <input onChange={setPassword((e) => e.target.value)} type="password" placeholder="password..."/><br/>
            <input type="radio" id="user" value="1" onChange={roleHandler}/>
            <label htmlFor="user">User</label>
            <input type="radio" id="admin" value="2" onChange={roleHandler}/>
            <label htmlFor="admin">Admin</label>
            {message && <div className={`${message.status}`}>
                <p className="form-msg">{message.data}</p>
            </div>}<br/>
            <button onClick={register}>Register</button><br/>
        </div>
    </div>
  )
};

export default Register;
