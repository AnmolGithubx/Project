import React from "react";
import "./MockTest.css";

const tests = [
    {
        id: 1,
        title: "JEE Main Mathematics",
        tag: "Engineering",
        level: "Medium",
        duration: "3 Hours",
        questions: 30,
        rating: 4.8,
        attempts: 1250,
    },
    {
        id: 2,
        title: "NEET Biology Complete",
        tag: "Medical",
        level: "Hard",
        premium: true,
        duration: "2.5 Hours",
        questions: 45,
        rating: 4.9,
        attempts: 890,
    },
    {
        id: 3,
        title: "CAT Quantitative Aptitude",
        tag: "MBA",
        level: "Medium",
        duration: "1 Hour",
        questions: 20,
        rating: 4.7,
        attempts: 2100,
    },
];

const stats = [
    { icon: "🏆", label: "Tests Taken", value: 8 },
    { icon: "📊", label: "Average Score", value: "78%" },
    { icon: "⏰", label: "Study Time", value: "24h" },
    { icon: "⭐", label: "Rank", value: 92 },
];

export default function MockTests() {
    return (
        <div className="mock-tests-container">
            <h2>Mock Tests</h2>
            <p className="subtitle">
                Practice with timed tests to improve your performance
            </p>

            {/* Stats */}
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div>
                            <p className="stat-value">{stat.value}</p>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Available Tests */}
            <h3 className="section-heading">Available Tests</h3>
            <div className="tests-grid">
                {tests.map((test) => (
                    <div key={test.id} className="test-card">
                        <div>
                            <div className="tags">
                                <span className="tag tag-blue">{test.tag}</span>
                                {test.premium && <span className="tag tag-yellow">★ Premium</span>}
                                <span className="tag tag-yellow">{test.level}</span>
                            </div>
                            <h4 className="test-title">{test.title}</h4>
                            <p className="test-detail">Duration: {test.duration}</p>
                            <p className="test-detail">Questions: {test.questions}</p>
                            <p className="test-detail">Rating: {test.rating} ★</p>
                            <p className="test-attempts">{test.attempts} students attempted</p>
                        </div>
                        <button className="start-button">▶ Start Test</button>
                    </div>
                ))}
            </div>

            {/* Premium Banner */}
            <div className="premium-banner">
                <h3>Unlock Premium Tests</h3>
                <ul>
                    <li>Unlimited premium mock tests</li>
                    <li>Detailed performance analytics</li>
                    <li>AI-powered weak area identification</li>
                    <li>Custom test creation</li>
                </ul>
                <div className="premium-cta">
                    <p className="premium-price">
                        ₹999 <span className="monthly">per month</span>
                    </p>
                    <button className="upgrade-button">Upgrade Now</button>
                </div>
            </div>
        </div>
    );
}
