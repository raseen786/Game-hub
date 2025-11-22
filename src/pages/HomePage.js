import { useState } from 'react';
import TicTacToePage from './TicTacToePage';
import '../styles/HomePage.css';

function HomePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: 1, name: 'Tic Tac Toe', description: 'Classic 3x3 game' },
    { id: 2, name: 'Connect 4', description: 'Coming Soon' },
    { id: 3, name: '2048', description: 'Coming Soon' },
    { id: 4, name: 'Snake', description: 'Coming Soon' }
  ];

  if (selectedGame === 'tictactoe') {
    return <TicTacToePage onBack={() => setSelectedGame(null)} />;
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Game Hub</h1>
        <p>Select a game to play</p>
      </div>
      <div className="games-grid">
        {games.map(game => (
          <div
            key={game.id}
            className={`game-card ${game.id > 1 ? 'disabled' : ''}`}
            onClick={() => game.id === 1 && setSelectedGame('tictactoe')}
          >
            <div className="game-icon">{game.id}</div>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;