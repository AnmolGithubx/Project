import "./Signup.css"

function Signup() {
    return (
        <>
            <div className="signup-modal">
                <div className="signup-box">
                    <h2>Create an Account</h2>
                    <p>Join us and start your learning journey</p>

                    <label>Full Name</label>
                    <div className="input-field">
                        <span className="icon">👤</span>
                        <input type="text" placeholder="Enter your full name" />
                    </div>

                    <label>Email Address</label>
                    <div className="input-field">
                        <span className="icon">📧</span>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <label>Password</label>
                    <div className="input-field">
                        <span className="icon">🔒</span>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <button className="sign-up-button">Sign Up</button>

                    <div className="divider">
                        <span>Or sign up with</span>
                    </div>

                    <button className="google-button">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                        />
                        Google
                    </button>

                    <div className="footer-text">
                        <p>
                            Already have an account? <a href="#">Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;