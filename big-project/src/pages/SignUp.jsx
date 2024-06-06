export default function SignUp() {
    return (
        <div className="signup-page">
            <h1>Create Your Account</h1>
            <form>
                <div className="formContainer">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="formContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="formContainer">
                    <label htmlFor="confirmEmail">Confirm Email</label>
                    <input type="email" id="confirmEmail" name="confirmEmail" />
                </div>
                <div className="formContainer">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="formContainer">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    );
}