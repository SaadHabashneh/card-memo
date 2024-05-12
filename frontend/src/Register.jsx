import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Register = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registerHandler = () => {
        const user = {
            username,
            email,
            password
        };
        
    };

  return (
    <div className="reg-container">
        <div className="reg-form">
            <input onChange={setUsername((e) => e.target.value)} type="text" placeholder="username..."/><br/>
            <input onChange={setEmail((e) => e.target.value)} type="email" placeholder="email..."/><br/>
            <input onChange={setPassword((e) => e.target.value)} type="password" placeholder="password..."/><br/>
            <button onClick={registerHandler}>Register</button><br/>
            {message && <div className="">
                <p className="form-msg"></p>
            </div>}
        </div>
    </div>
  )
};

export default Register;
