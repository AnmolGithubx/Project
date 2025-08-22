function MockTest() {
    const ss = {
        backgroundColor: '#f8fbff',
    }
    return (
        <>
        <div style={ss}>
            <div className="mentor-page">
                <h2 className="mentor-title">Mock Test</h2>
                <p className="mentor-subtitle">
                    Give answers and test your skills
                </p>
            </div>
            <div className="filter-container">
                <select className="filter-select">
                    <option>All Subjects</option>
                </select>
                <select className="filter-select">
                    <option>All Exams</option>
                </select>
                <select className="filter-select">
                    <option>Any Price</option>
                </select>
                <select className="filter-select">
                    <option>Any Time</option>
                </select>
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
        </div>
        </>
    );
}
export default MockTest