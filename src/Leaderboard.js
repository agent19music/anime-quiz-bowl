import React, { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/leaderboard')
      .then((res) => res.json())
      .then((res) => setBoard(res))
      .catch((error) => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container">
      <h2>Anime Quiz Bowl Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
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
