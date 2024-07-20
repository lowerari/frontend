import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                username,
                password
            });

            console.log(response.data);

            if(response.data && response.data.token){
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
            } else {
                console.error("Token not received");
            }
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-image"></div>
                <div className="login-form">
                    <h1>Log In to Your Account</h1>
                    <form>
                        <div className="formContainer">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="formContainer">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        {error && <p className="error">Invalid credentials</p>}
                        <button onClick={handleLogin}>Log In</button>
                    </form>
                    <div className="signUpRedirect">
                        <p>Don&apos;t have an account?</p>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}