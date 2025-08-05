import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">StudySync</span>
          </div>
          <p>Empowering students to achieve their academic goals through collaborative learning.</p>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li>Study Rooms</li>
            <li>Flashcards</li>
            <li>Mock Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

        {/* Exams */}
        <div className="footer-section">
          <h3>Exams</h3>
          <ul>
            <li>JEE Main & Advanced</li>
            <li>NEET</li>
            <li>CAT</li>
            <li>GATE</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="copyright">© 2024 StudySync. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
