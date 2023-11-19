import React, { useState, useEffect } from 'react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Question({ question, onNextQuestion, updateScore }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledChoices, setShuffledChoices] = useState([]);

  useEffect(() => {
    setShuffledChoices(shuffleArray([...question.choices]));
  }, [question]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedAnswer === question.choices[0]) {
      updateScore(question.points);
    }
    onNextQuestion();
    setSelectedAnswer(null);
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="card text-center mt-5">
        <div className="card-header">
          <h3>{question.Question}</h3>
        </div>
        <div className="card-body">
          <form>
            {shuffledChoices.map((choice, index) => (
              <div key={index} className="form-check">
                <input
                  type="radio"
                  id={`choice${index}`}
                  className="form-check-input"
                  value={choice}
                  checked={selectedAnswer === choice}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={`choice${index}`} className="form-check-label">
                  {choice}
                </label>
              </div>
            ))}
          </form>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
