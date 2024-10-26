import React, { useState } from "react";
import { useWeb3 } from "../contexts/Web3Context";
import MinesGame from "../components/MinesGame";

const GamePage = () => {
  const { account, balance, placeBet } = useWeb3();
  const [testBalance, setTestBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = async () => {
    if (!betAmount) return;

    const bet = parseFloat(betAmount);
    if (account) {
      if (bet > balance) return;
      await placeBet(bet);
    } else {
      if (bet > testBalance) return;
      setTestBalance((prev) => prev - bet);
    }
    setGameStarted(true);
  };

  const handleGameEnd = (won: boolean) => {
    if (!account) {
      const winAmount = won ? parseFloat(betAmount) * 2 : 0;
      setTestBalance((prev) => prev + winAmount);
    }
    setGameStarted(false);
    setBetAmount("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-neon-pink mb-8 text-center">
        CyberMines Game
      </h1>
      {!gameStarted ? (
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-neon">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">
            Place Your Bet
          </h2>
          <p className="text-neon-blue mb-4">
            Balance: {account ? `${balance} ETH` : `${testBalance} TEST`}
          </p>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            placeholder="Enter bet amount"
            className="w-full bg-gray-800 text-neon-blue border border-neon-pink rounded px-3 py-2 mb-4"
          />
          <button
            onClick={handleStartGame}
            className="w-full bg-neon-pink text-black font-bold py-2 px-4 rounded hover:bg-neon-blue transition-colors"
          >
            Start Game
          </button>
        </div>
      ) : (
        <MinesGame onGameEnd={handleGameEnd} />
      )}
    </div>
  );
};

export default GamePage;
