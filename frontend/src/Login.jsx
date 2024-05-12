import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"

const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginHandler = () => {
        const user = {
            email,
            password
        };

    };

  return (
    <div className='login-container'>
        <div className='login-form'>
            <input onChange={setEmail((e) => e.target.value)} type="email" placeholder="email..."/><br/>
            <input onChange={setPassword((e) => e.target.value)} type="password" placeholder="password..."/><br/>
            <button onClick={loginHandler}>Login</button>
        </div>
        {message && <div className=''><p className='form-msg'></p></div>}
    </div>
  )
};

export default Login;