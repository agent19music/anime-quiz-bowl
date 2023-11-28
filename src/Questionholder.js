import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Questionholder({ username }) {
  const { animeId, difficulty } = useParams();
  const [anime, setAnime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://anime-zetu-quiz-bowl-db.onrender.com/animes/${animeId}`)
      .then((res) => res.json())
      .then((res) => setAnime(res))
      .catch((error) => console.error(error));
  }, [animeId]);

  const handleNextQuestion = () => {
    // Check if there are more questions
    if (currentQuestionIndex + 1 < anime[difficulty].length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // If no more questions, mark the quiz as completed
      setQuizCompleted(true);
      
      // Show a success message
      Swal.fire({
        title: 'Quiz submitted!',
        text: 'Now check your position on the leaderboard!!',
        icon: 'success',
      })
      .then(() => {
        // Send the score to the leaderboard
        return fetch('https://anime-zetu-quiz-bowl-db.onrender.com/leaderboard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: username,
            score: score,
          }),
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(() => navigate('/leaderboard')) // Navigate to the leaderboard
        .catch((error) => console.error('Error:', error));
      })
      .catch((error) => console.error(error));
    }
    
    console.log('Final Score:', score);
  };
  
  const updateScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  return (
    <div className='container' id='main-container'>
      {anime && anime[difficulty] && anime[difficulty].length > 0 && (
        <Question
          question={anime[difficulty][currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
          updateScore={updateScore}
        />
      )}
      {quizCompleted && (
        <div className='container mt-3 text-center'>
          <h1>Final Score: {score}</h1>
        </div>
      )}
    </div>
  );
}
