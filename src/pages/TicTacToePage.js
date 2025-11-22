import { useState } from 'react';
import '../styles/TicTacToe.css';
import { RotateCcw } from 'lucide-react';

function TicTacToePage({ onBack }) {
  const [gameSize, setGameSize] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameActive, setGameActive] = useState(true);

  const generateWinningConditions = (size) => {
    const conditions = [];
    // Rows
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
      }
      conditions.push(row);
    }
    // Columns
    for (let i = 0; i < size; i++) {
      const col = [];
      for (let j = 0; j < size; j++) {
        col.push(j * size + i);
      }
      conditions.push(col);
    }
    // Diagonals
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < size; i++) {
      diag1.push(i * size + i);
      diag2.push(i * size + (size - 1 - i));
    }
    conditions.push(diag1, diag2);
    return conditions;
  };

  const startGame = () => {
    const totalCells = gameSize * gameSize;
    setGameState(Array(totalCells).fill(''));
    setCurrentPlayer('X');
    setGameActive(true);
    setGameStarted(true);
  };

  const handleCellClick = (index) => {
    if (gameState[index] !== '' || !gameActive) return;

    const newState = [...gameState];
    newState[index] = currentPlayer;
    setGameState(newState);
    checkResult(newState);
  };

  const checkResult = (state) => {
    const winningConditions = generateWinningConditions(gameSize);
    let roundWon = false;

    for (let condition of winningConditions) {
      if (condition.every(index => state[index] === currentPlayer)) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setGameActive(false);
      return;
    }

    if (!state.includes('')) {
      setGameActive(false);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleRestartGame = () => {
    startGame();
  };

  const handleBackToSizeSelect = () => {
    setGameStarted(false);
    setGameSize(3);
  };

  const handleGoHome = () => {
    if (onBack) onBack();
  };

  const getStatus = () => {
    const winningConditions = generateWinningConditions(gameSize);
    for (let condition of winningConditions) {
      if (gameState[condition[0]] && condition.every(index => gameState[index] === gameState[condition[0]])) {
        const winner = gameState[condition[0]];
        const color = winner === 'X' ? '#c62828' : '#2e7d32';
        return <>Player <span style={{ color }}>{winner}</span> has won!</>;
      }
    }

    if (!gameState.includes('')) return "It's a draw!";

    const color = currentPlayer === 'X' ? '#c62828' : '#2e7d32';
    return <>It's <span style={{ color }}>{currentPlayer}</span>'s turn</>;
  };

  if (!gameStarted) {
    return (
      <div className="container">
        <div className="header">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="game-wrapper">
          <div className="size-selector">
            <p>Select Game Size:</p>
            <div className="size-buttons">
              {[3, 4, 5, 6].map(size => (
                <button
                  key={size}
                  className={`size-btn ${gameSize === size ? 'active' : ''}`}
                  onClick={() => setGameSize(size)}
                >
                  {size}x{size}
                </button>
              ))}
            </div>
            <button className="start-btn" onClick={startGame}>Start Game</button>
          </div>
        </div>
      </div>
    );
  }

  const cellSize = gameSize > 4 ? 70 : gameSize === 4 ? 80 : 100;

  return (
    <div className="container">
      <div className="header">
        <h1>Tic Tac Toe ({gameSize}x{gameSize})</h1>
      </div>
      <div className="game-wrapper">
        <div className="status">{getStatus()}</div>
        <div className="game-board-container" style={{ '--cell-size': `${cellSize}px` }}>
          {!gameActive && (
            <div className="overlay">
              <button className="restart-icon-btn" onClick={handleRestartGame}>
                <RotateCcw size={48} />
              </button>
            </div>
          )}
          <div className="game-board" style={{ gridTemplateColumns: `repeat(${gameSize}, ${cellSize}px)` }}>
            {gameState.map((cell, index) => (
              <button
                key={index}
                className={`cell ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}`}
                onClick={() => handleCellClick(index)}
                disabled={cell !== '' || !gameActive}
                style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
              >
                {cell}
              </button>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="back-btn" onClick={handleBackToSizeSelect}>New Game</button>
          {onBack && <button className="home-btn" onClick={handleGoHome}>Home</button>}
        </div>
      </div>
    </div>
  );
}

export default TicTacToePage;