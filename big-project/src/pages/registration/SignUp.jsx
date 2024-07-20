import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            if (!username){
                setErrors({username: "Username is required"});
                return;
            }
            if (!email){
                setErrors({email: "Email is required"});
                return;
            }
            if (confirmEmail !== email){
                setErrors({confirmEmail: "Emails do not match"});
                return;
            }
            if (!password){
                setErrors({password: "Password is required"});
                return;
            }
            if (confirmPassword !== password){
                setErrors({confirmPassword: "Passwords do not match"});
                return;
            }

            setErrors({});

            const response = await axios.post('http://127.0.0.1:8000/signup', {
                username,
                email,
                password
            });


            console.log(response.data);

            if(response.data && response.data.token){
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
            } else {
                console.error("Token not received");
            }
        }catch (error){
            console.log(error);
        }
    };

    return (
        <div className="signup-page">
            <div className="login-card">
                <div className="signup-image"></div>
                <div className="login-form">
                <h1>Create Your Account</h1>
                <form>
                    <div className="formContainer">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {errors.username && <p className="error">{errors.username}</p>}
                    <div className="formContainer">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    {errors.email && <p className="error">{errors.email}</p>}
                    <div className="formContainer">
                        <label htmlFor="confirmEmail">Confirm Email</label>
                        <input 
                            type="email" 
                            id="confirmEmail" 
                            name="confirmEmail"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)} 
                        />
                    </div>
                    {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
                    <div className="formContainer">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                    <div className="formContainer">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    <button onClick={handleSignUp}>Sign Up</button>
                </form>
                </div>
            </div>
        </div>
    );
}