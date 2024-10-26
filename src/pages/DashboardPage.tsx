import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useGame } from "../contexts/GameContext";
import { useWeb3 } from "../contexts/Web3Context";

const DashboardPage = () => {
  const { user } = useAuth();
  const { lifetimeBet, totalWinnings } = useGame();
  const { balance } = useWeb3();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-neon-pink mb-8 text-center">
        Your Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-8 rounded-lg shadow-neon">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">
            Account Overview
          </h2>
          <p className="text-neon-blue mb-2">Email: {user?.email}</p>
          <p className="text-neon-blue mb-2">Current Balance: {balance} ETH</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-neon">
          <h2 className="text-2xl font-bold text-neon-pink mb-4">
            Gaming Statistics
          </h2>
          <p className="text-neon-blue mb-2">Lifetime Bet: {lifetimeBet} ETH</p>
          <p className="text-neon-blue mb-2">
            Total Winnings: {totalWinnings} ETH
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
