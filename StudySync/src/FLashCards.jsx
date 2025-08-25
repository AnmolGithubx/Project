import React, { useState } from "react";
import "./FlashCards.css";

const cardStyle = {
    width: "300px",
    height: "180px",
    margin: "40px auto",
    perspective: "1000px",
    cursor: "pointer",
};

const innerStyle = (flipped) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "none",
});

const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    border: "2px solid #333",
    borderRadius: "12px",
    background: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const backStyle = {
    ...faceStyle,
    background: "#e0f7fa",
    transform: "rotateY(180deg)",
};

function Flashcards() {
    const [flipped, setFlipped] = useState(false);
    const question = "What is the capital of France?";
    const answer = "Paris";

    return (
        <>
        <div className="head-title">
            <h2>Test Your Knowledge</h2>
        </div>
            <div style={cardStyle} onClick={() => setFlipped((f) => !f)}>
                <div style={innerStyle(flipped)}>
                    <div style={faceStyle}>
                        {question}
                    </div>
                    <div style={backStyle}>
                        {answer}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Flashcards;