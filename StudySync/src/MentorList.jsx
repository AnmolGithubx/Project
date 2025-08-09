import React from "react";
import "./MentorList.css";

const mentors = [
  {
    initials: "PS",
    name: "Dr. Priya Sharma",
    subject: "JEE Mathematics",
    rating: 4.9,
    reviews: 124,
    experience: "8 years",
    rate: "₹800/hr",
    location: "Mumbai",
    tags: ["Calculus", "Algebra", "+1 more"],
    availability: "Available today",
    availabilityClass: "available-today",
  },
  {
    initials: "RK",
    name: "Prof. Rajesh Kumar",
    subject: "NEET Physics",
    rating: 4.8,
    reviews: 89,
    experience: "12 years",
    rate: "₹1200/hr",
    location: "Delhi",
    tags: ["Mechanics", "Thermodynamics", "+1 more"],
    availability: "Available tomorrow",
    availabilityClass: "available-tomorrow",
  },
  {
    initials: "AV",
    name: "Ms. Anita Verma",
    subject: "CAT Verbal Ability",
    rating: 4.7,
    reviews: 156,
    experience: "6 years",
    rate: "₹600/hr",
    location: "Bangalore",
    tags: ["Reading Comprehension", "Grammar", "+1 more"],
    availability: "Available now",
    availabilityClass: "available-now",
  },
];

export default function MentorList() {
  return (
    <div className="mentor-page">
      <h2 className="mentor-title">Find a Mentor</h2>
      <p className="mentor-subtitle">
        Connect with expert tutors for personalized guidance
      </p>

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

      <div className="mentor-card-container">
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <div className="mentor-avatar">{mentor.initials}</div>
            <div className="mentor-info">
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-subject">{mentor.subject}</p>
              <p className="mentor-rating">
                ⭐ {mentor.rating} • {mentor.reviews} reviews
              </p>
              <p>Experience: {mentor.experience}</p>
              <p>Rate: {mentor.rate}</p>
              <p>Location: {mentor.location}</p>
              <div className="mentor-tags">
                {mentor.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`mentor-availability ${mentor.availabilityClass}`}>
                {mentor.availability}
              </p>
              <button className="view-profile-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>

       <div class="premium-card">
    <div class="premium-left">
      <h2>Premium Mentorship Program</h2>
      <p>Get personalized 1-on-1 guidance from top educators with guaranteed results</p>
      <ul>
        <li>Dedicated mentor assignment</li>
        <li>Unlimited doubt clearing sessions</li>
        <li>Personalized study plans</li>
        <li>Regular progress tracking</li>
      </ul>
    </div>
    <div class="premium-right">
      <div class="price">₹4,999</div>
      <div class="per-month">per month</div>
      <button class="enroll-btn">Enroll Now</button>
    </div>
  </div>
    </div>
  );
}
