import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-page">
            <h1>Log In to Your Account</h1>
            <form>
                <div className="formContainer">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="formContainer">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button>Log In</button>
            </form>
            <div className="signUpRedirect">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}