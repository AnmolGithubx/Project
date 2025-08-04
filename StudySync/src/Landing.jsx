import './Landing.css';

function Landing() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-logo">YourLogo</div>
          <div className="navbar-buttons">
            <a href="#" className="nav-button login">Login</a>
            <a href="#" className="nav-button signup">Sign Up</a>
          </div>
        </div>
      </div>

      <div className="hero-div">
        <div className="container">
          <h1 className="hero-title">Study Smarter, Together</h1>
          <p className="hero-content">
            Join thousands of students in collaborative study rooms. Share knowledge, track progress, and ace your competitive exams with our comprehensive learning platform.
          </p>
          <a href="#" className="hero-button">Start Learning Free</a>

          <div className="hero-number">
            <div className="stat-block">
              <h2 className="stat-number">50K+</h2>
              <p className="stat-label">Active Students</p>
            </div>
            <div className="stat-block">
              <h2 className="stat-number">1000+</h2>
              <p className="stat-label">Study Rooms</p>
            </div>
            <div className="stat-block">
              <h2 className="stat-number">95%</h2>
              <p className="stat-label">Success Rate</p>
            </div>
            <div className="stat-block">
              <h2 className="stat-number">24/7</h2>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
