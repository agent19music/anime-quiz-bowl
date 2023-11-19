import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Questionholder({count}) {
  const { animeId, difficulty } = useParams();
  const [anime, setAnime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your quiz has been submitted successfully",
        showConfirmButton: false,
        timer: 900
      });
    }
    console.log('Final Score:', score);
  };

  const updateScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  return (
    <div>
      {anime && anime[difficulty] && anime[difficulty].length > 0 && (
        <Question
          question={anime[difficulty][currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
          count={count}
          updateScore={updateScore}
        />
      )}
    </div>
  );
}
