import './Landing.css';
import Footer from './Footer';


function Landing() {
  return (
    <>
      <div className="hero-div">
        <div className="container">
          <h1 className="hero-title">Study Smarter, Together</h1>
          <p className="hero-content">
            Join thousands of students in collaborative study rooms. Share knowledge, track progress, and ace your competitive exams with our comprehensive learning platform.
          </p>
          <div className='hero-a'>
            <a href="./src/Signup.jsx" className="hero-button">Start Learning Free</a>
            <a href="#" className="hero-button">Watch Demo</a>
          </div>
          {/* <div className='hero-a'>
            <Link to="/learn" className="hero-button">Start Learning Free</Link>
            <Link to="/demo" className="hero-button">Watch Demo</Link>
          </div> */}


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


      <div className='after-hero'>
        <h3 className='afterhero-title'>Everything You Want To Succed</h3>
        <p className='afterhero-content'>Comprehensive tools designed specifically for competitive exam preparation</p>
        <div className='card-div'>
          <div className="card">
            <h2 className='icon-write'>👥</h2>
            <h2 className='card-title'>Study Rooms</h2>
            <p className='card-text'>Join topic-based study rooms and collaborate with peers preparing for the same exams.</p>
          </div>
          <div className="card">
            <h2 className='icon-write'>🕰️</h2>
            <h2 className='card-title'>Pomodoro Timer</h2>
            <p className='card-text'>Stay focused with built-in Pomodoro sessions and track your study productivity.</p>
          </div>
          <div className="card">
            <h2 className='icon-write'>✍️</h2>
            <h2 className='card-title'>Interactive Whiteboard</h2>
            <p className='card-text'>Collaborate visually with shared whiteboards for solving problems together.</p>
          </div>
          <div className="card">
            <h2 className='icon-write'>📖</h2>
            <h2 className='card-title'>Smart Flashcards</h2>
            <p className='card-text'>Create, share, and study with AI-powered flashcards using spaced repetition.</p>
          </div>
          <div className="card">
            <h2 className='icon-write'>🏆</h2>
            <h2 className='card-title'>Mock Tests</h2>
            <p className='card-text'>Practice with timed mock tests and get detailed performance analytics.</p>
          </div>
          <div className="card">
            <h2 className='icon-write'>💬</h2>
            <h2 className='card-title'>Expert Mentorship</h2>
            <p className='card-text'>Connect with verified mentors for personalized guidance and doubt clearing.</p>
          </div>
        </div>
      </div>

      <div className='working-div'>
        <h1 className='working-title'>How StudySync Works ?</h1>
        <p className='working-content'>Simple steps to transform your study experience</p>

        <div className="steps-section">
          <div className="step">
            <div className="circle blue">1</div>
            <h3 className='circle-title'>Join Study Rooms</h3>
            <p className='circle-content'>Find or create study rooms based on your exam and subjects</p>
          </div>
          <div className="step">
            <div className="circle purple">2</div>
            <h3 className='circle-title'>Collaborate & Learn</h3>
            <p className='circle-content'>Share notes, solve problems together, and learn from peers</p>
          </div>
          <div className="step">
            <div className="circle green">3</div>
            <h3 className='circle-title'>Track Progress</h3>
            <p className='circle-content'>Monitor your improvement with analytics and mock tests</p>
          </div>
        </div>
      </div>


      <div className="success-stories">
        <h2 className='success-title'>Success Stories</h2>
        <p className="subtitle">See how StudySync helped students achieve their dreams</p>

        <div className="stories-container">
          {/* Card 1 */}
          <div className="story-card">
            <div className="user-info">
              <div className="avatar">PS</div>
              <div>
                <h4>Priya Sharma</h4>
                <p className="exam">JEE Main 2024</p>
              </div>
              <span className="badge">AIR 247</span>
            </div>
            <p className="review">
              "StudySync helped me stay consistent with my preparation. The study rooms were amazing for doubt clearing!"
            </p>
            <div className="stars">★★★★★</div>
          </div>

          {/* Card 2 */}
          <div className="story-card">
            <div className="user-info">
              <div className="avatar">RK</div>
              <div>
                <h4>Rahul Kumar</h4>
                <p className="exam">NEET 2024</p>
              </div>
              <span className="badge">AIR 156</span>
            </div>
            <p className="review">
              "The mock tests and mentorship program gave me the confidence I needed. Highly recommended!"
            </p>
            <div className="stars">★★★★★</div>
          </div>

          {/* Card 3 */}
          <div className="story-card">
            <div className="user-info">
              <div className="avatar">AV</div>
              <div>
                <h4>Anita Verma</h4>
                <p className="exam">CAT 2023</p>
              </div>
              <span className="badge">99.8 %ile</span>
            </div>
            <p className="review">
              "Collaborative learning at its best. The flashcard system helped me memorize concepts effectively."
            </p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <h2 className='price-title'>Choose Your Plan</h2>
        <p className="subtitle">Start free, upgrade when you need more</p>

        <div className="plans-container">
          {/* Free Plan */}
          <div className="plan-card">
            <h3>Free</h3>
            <p className="price">₹0<span>/month</span></p>
            <ul>
              <li>✅ Join 5 study rooms</li>
              <li>✅ Basic flashcards</li>
              <li>✅ 2 mock tests/month</li>
              <li>✅ Community support</li>
            </ul>
            <button className="plan-button">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="plan-card pro">
            <div className="badge">Most Popular</div>
            <h3>Pro</h3>
            <p className="price">₹999<span>/month</span></p>
            <ul>
              <li>✅ Unlimited study rooms</li>
              <li>✅ Advanced flashcards with AI</li>
              <li>✅ Unlimited mock tests</li>
              <li>✅ Priority mentorship</li>
              <li>✅ Detailed analytics</li>
            </ul>
            <button className="plan-button white">Start Pro Trial</button>
          </div>

          {/* Premium Plan */}
          <div className="plan-card">
            <h3>Premium</h3>
            <p className="price">₹1999<span>/month</span></p>
            <ul>
              <li>✅ Everything in Pro</li>
              <li>✅ 1-on-1 mentorship</li>
              <li>✅ Custom study plans</li>
              <li>✅ 24/7 priority support</li>
              <li>✅ Exam guarantee program</li>
            </ul>
            <button className="plan-button">Go Premium</button>
          </div>
        </div>
      </div>

      <div className="cta-wrapper">
        <h2 className="cta-heading">Ready to Transform Your Study Experience?</h2>
        <p className="cta-subtext">
          Join thousands of successful students who chose StudySync for their exam preparation
        </p>
        <button className="cta-button">Start Your Journey Today</button>
      </div>

      <Footer />
    </>
  );
}

export default Landing;