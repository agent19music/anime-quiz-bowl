import React, { useEffect, useState } from 'react';

export default function Leaderboard({toggle2}) {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch('https://anime-zetu-quiz-bowl-db.onrender.com/leaderboard')
      .then((res) => res.json())
      .then((res) => {
        const sortedBoard = res.sort((a, b) => b.score - a.score);
        setBoard(sortedBoard);
      })
      .catch((error) => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container pt-5 mt-5"  id='leaderboard'>
      <h2>Anime Zetu Quiz Bowl Leaderboard</h2>
      <table className={`table table-striped table-${toggle2}`} >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Waka Points</th>
          </tr>
        </thead>
        <tbody>
          {board !== null &&
            board.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
