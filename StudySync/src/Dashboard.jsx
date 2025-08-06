import "./Dashboard.css"

function Dashboard() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo">
                        <img src="https://img.icons8.com/ios-filled/50/graduation-cap.png" alt="logo" />
                        <span>StudySync</span>
                    </div>
                    <ul className="nav-links">
                        <li className="active">
                            <img src="https://img.icons8.com/ios-filled/24/graduation-cap.png" alt="dashboard-icon" />
                            Dashboard
                        </li>
                        <li><img src="https://img.icons8.com/ios/24/book.png" alt="flashcards" /> Flashcards</li>
                        <li><img src="https://img.icons8.com/ios/24/test.png" alt="mock-tests" /> Mock Tests</li>
                        <li><img src="https://img.icons8.com/ios/24/conference-call.png" alt="mentorship" /> Mentorship</li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="notification">
                        <img src="https://img.icons8.com/ios-glyphs/30/appointment-reminders.png" alt="notifications" />
                        <span className="dot"></span>
                    </div>
                    <img src="https://img.icons8.com/ios/24/settings--v1.png" alt="settings" />
                    <div className="profile-circle">JS</div>
                </div>
            </nav>


                <div className="dashboard-container">
      <h1>Welcome back, John!</h1>
      <p className="subtitle">Ready to continue your learning journey?</p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Study Hours</p>
          <h2>127</h2>
        </div>
        <div className="stat-card">
          <p>Rooms Joined</p>
          <h2>12</h2>
        </div>
        <div className="stat-card">
          <p>Flashcards</p>
          <h2>284</h2>
        </div>
        <div className="stat-card">
          <p>Mock Tests</p>
          <h2>8</h2>
        </div>
      </div>

      <div className="room-header">
        <h3>Active Study Rooms</h3>
        <button className="create-room-btn">+ Create Room</button>
      </div>

      <div className="rooms-grid">
        {[
          {
            tag: 'Engineering',
            title: 'JEE Mathematics',
            desc: 'Calculus & Algebra',
            members: 24,
            premium: false,
          },
          {
            tag: 'Medical',
            title: 'NEET Biology',
            desc: 'Human Physiology',
            members: 18,
            premium: true,
          },
          {
            tag: 'MBA',
            title: 'CAT Quantitative',
            desc: 'Data Interpretation',
            members: 32,
            premium: false,
          },
          {
            tag: 'Engineering',
            title: 'GATE Computer Science',
            desc: 'Data Structures',
            members: 15,
            premium: true,
          },
        ].map((room, idx) => (
          <div className="room-card" key={idx}>
            <div className="room-tag">
              <span className="tag">{room.tag}</span>
              {room.premium && <span className="premium">★ Premium</span>}
            </div>
            <h4>{room.title}</h4>
            <p className="room-desc">{room.desc}</p>
            <div className="room-footer">
              <span>👥 {room.members} members</span>
              <a href="#">Join →</a>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-grid">
        <div className="cta flashcards">
          <h4>Study Flashcards</h4>
          <p>Review and create flashcards</p>
        </div>
        <div className="cta tests">
          <h4>Mock Tests</h4>
          <p>Practice with timed tests</p>
        </div>
        <div className="cta mentor">
          <h4>Find Mentor</h4>
          <p>Connect with expert tutors</p>
        </div>
      </div>
    </div>
        </>
    );
}
export default Dashboard