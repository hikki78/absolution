import React, { useState, useEffect } from "react";
import { Bomb, Diamond } from "lucide-react";

const GRID_SIZE = 5;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const MINE_COUNT = 3;

const MinesGame = () => {
  const [grid, setGrid] = useState(Array(TOTAL_CELLS).fill(null));
  const [revealedCells, setRevealedCells] = useState(
    Array(TOTAL_CELLS).fill(false),
  );
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [minePositions, setMinePositions] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const mines = [];
    while (mines.length < MINE_COUNT) {
      const position = Math.floor(Math.random() * TOTAL_CELLS);
      if (!mines.includes(position)) {
        mines.push(position);
      }
    }
    setMinePositions(mines);
    setGrid(Array(TOTAL_CELLS).fill(null));
    setRevealedCells(Array(TOTAL_CELLS).fill(false));
    setGameOver(false);
    setWin(false);
  };

  const handleCellClick = (index) => {
    if (gameOver || revealedCells[index]) return;

    const newRevealedCells = [...revealedCells];
    newRevealedCells[index] = true;
    setRevealedCells(newRevealedCells);

    if (minePositions.includes(index)) {
      setGameOver(true);
    } else {
      const revealedCount = newRevealedCells.filter(Boolean).length;
      if (revealedCount === TOTAL_CELLS - MINE_COUNT) {
        setWin(true);
        setGameOver(true);
      }
    }
  };

  const renderCell = (index) => {
    if (!revealedCells[index]) {
      return (
        <button
          onClick={() => handleCellClick(index)}
          className="w-full h-full bg-gray-800 hover:bg-gray-700 transition-colors"
        />
      );
    }

    if (minePositions.includes(index)) {
      return <Bomb className="text-red-500" size={24} />;
    }

    return <Diamond className="text-neon-blue" size={24} />;
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="grid grid-cols-5 gap-2 mb-4">
        {grid.map((_, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            {renderCell(index)}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            {win ? (
              <span className="text-neon-blue">You Win!</span>
            ) : (
              <span className="text-red-500">Game Over!</span>
            )}
          </p>
          <button
            onClick={initializeGame}
            className="bg-neon-pink text-black font-bold py-2 px-4 rounded hover:bg-neon-blue transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MinesGame;
