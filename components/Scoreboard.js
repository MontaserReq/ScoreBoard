'use client';
import { useState } from "react";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 },
  ]);

  const updateScore = (id, amount) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, score: player.score + amount } : player
    ));
  };

  const updateName = (id, newName) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, name: newName } : player
    ));
  };

  return (
    <div className="scoreboard">
      {players.map((player, index) => (
        <div 
          key={player.id} 
          className={`player-section ${index === 0 ? 'left' : 'right'}`}
        >
          <input
            type="text"
            className="player-name"
            value={player.name}
            onChange={(e) => updateName(player.id, e.target.value)}
          />
          <div className="score">{player.score}</div>
          <div className="buttons">
            <button className="button decrease" onClick={() => updateScore(player.id, -1)}>-</button>
            <button className="button increase" onClick={() => updateScore(player.id, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
