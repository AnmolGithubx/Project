import React, { useState } from "react";
import "./Flashcard.css";

const flashcardsData = {
  Math: {
    Easy: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "What is 5 x 1?",
        options: ["1", "10", "5", "6"],
        answer: "5",
      },
    ],
    Hard: [
      {
        question: "What is the square root of 144?",
        options: ["12", "14", "10", "16"],
        answer: "12",
      },
      {
        question: "Solve for x: 2x + 3 = 11",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
    ],
  },
  Science: {
    Easy: [
      {
        question: "What planet do we live on?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        answer: "Earth",
      },
      {
        question: "What do plants need for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
    ],
    Hard: [
      {
        question: "What is Newton's third law?",
        options: [
          "For every action, there is an equal and opposite reaction.",
          "An object in motion stays in motion.",
          "F=ma",
          "Gravity pulls objects down.",
        ],
        answer: "For every action, there is an equal and opposite reaction.",
      },
      {
        question: "Define entropy.",
        options: [
          "The speed of an object.",
          "Measure of disorder in a system.",
          "Energy in motion.",
          "Force applied on a surface.",
        ],
        answer: "Measure of disorder in a system.",
      },
    ],
  },
};

const FlashcardPage = () => {
  const [subject, setSubject] = useState("Math");
  const [difficulty, setDifficulty] = useState("Easy");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const cards = flashcardsData[subject][difficulty];
  const currentCard = cards[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === currentCard.answer);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setSelectedOption("");
    setIsCorrect(false);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    resetCard();
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    resetCard();
  };

  const resetCard = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setIsCorrect(false);
  };

  return (
    <div className="flashcard-page">
      <h1 className="flashcard-title">Flashcards Quiz</h1>

      <div className="flashcard-controls">
        <div className="dropdown-container">
          <label className="dropdown-label">Subject:</label>
          <select
            className="dropdown-select"
            value={subject}
            onChange={handleSubjectChange}
          >
            {Object.keys(flashcardsData).map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-container">
          <label className="dropdown-label">Difficulty:</label>
          <select
            className="dropdown-select"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="flashcard-card">
        <p className="flashcard-question">{currentCard.question}</p>
        <div className="flashcard-options">
          {currentCard.options.map((opt) => (
            <button
              key={opt}
              className={`flashcard-option-button ${
                selectedOption
                  ? opt === currentCard.answer
                    ? "correct"
                    : opt === selectedOption
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleOptionClick(opt)}
              disabled={!!selectedOption}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {selectedOption && (
        <button className="flashcard-next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default FlashcardPage;
