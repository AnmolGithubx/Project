import "./Login.css"

function Login() {
    return (
        <>
            <div className="login-modal">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Sign in to continue your learning journey</p>

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

        <button className="sign-in-button">Sign In</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <button className="google-button">
          <img src="./assets/google.png" alt="Google" />
          Google
        </button>

        <div className="footer-text">
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>
      </div>
    </div>
        </>
    );
}
export default Login