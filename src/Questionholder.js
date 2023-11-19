import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Questionholder() {
  const { animeId, difficulty } = useParams();
  const [anime, setAnime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8001/animes/${animeId}`)
      .then((res) => res.json())
      .then((res) => setAnime(res))
      .catch((error) => console.error(error));
  }, [animeId]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < anime[difficulty].length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
      Swal.fire({
        title: "Quiz submitted!",
        text: "Now check your position on the leaderboard !!",
        icon: "success"
      })
      .then(
        
      )
      .then(() => navigate(`/leaderboard`));
    }
    console.log('Final Score:', score);
  };

  const updateScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  return (
    <div className='container'>
      {anime && anime[difficulty] && anime[difficulty].length > 0 && (
        <Question
          question={anime[difficulty][currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
          updateScore={updateScore}
        />
      )}
       {quizCompleted && (
            <div className="container mt-3 text-center">
              <h1>Final Score: {score}</h1>
            </div>
          )}
    </div>
  );
}
