import React from "react";
import { Link } from "react-router-dom";
import { useWeb3 } from "../contexts/Web3Context";

const LandingPage = () => {
  const { connectWallet, account } = useWeb3();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-neon-pink mb-4">
          Welcome to CyberMines
        </h1>
        <p className="text-xl text-neon-blue mb-8">
          Experience the thrill of cyberpunk mining
        </p>
        <div className="space-x-4">
          <Link
            to="/game"
            className="inline-block bg-neon-pink text-black font-bold py-2 px-6 rounded-full hover:bg-neon-blue transition-colors"
          >
            Play with Test Coins
          </Link>
          {!account && (
            <button
              onClick={connectWallet}
              className="inline-block bg-neon-blue text-black font-bold py-2 px-6 rounded-full hover:bg-neon-pink transition-colors"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg shadow-neon">
            <h2 className="text-3xl font-bold text-neon-blue mb-4">
              Test Mode
            </h2>
            <p className="text-neon-blue mb-4">
              Try CyberMines with test coins - no real crypto needed!
            </p>
            <Link
              to="/game"
              className="inline-block bg-neon-blue text-black font-bold py-2 px-6 rounded-full hover:bg-neon-pink transition-colors"
            >
              Start Playing
            </Link>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-neon">
            <h2 className="text-3xl font-bold text-neon-pink mb-4">
              Real Mode
            </h2>
            <p className="text-neon-blue mb-4">
              Ready to play with real crypto? Connect your wallet!
            </p>
            {account ? (
              <Link
                to="/game"
                className="inline-block bg-neon-pink text-black font-bold py-2 px-6 rounded-full hover:bg-neon-blue transition-colors"
              >
                Play Now
              </Link>
            ) : (
              <button
                onClick={connectWallet}
                className="inline-block bg-neon-pink text-black font-bold py-2 px-6 rounded-full hover:bg-neon-blue transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
