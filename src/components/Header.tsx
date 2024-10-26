import React from "react";
import { Link } from "react-router-dom";
import { useWeb3 } from "../contexts/Web3Context";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { account, connectWallet } = useWeb3();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-black border-b border-neon-pink">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-neon-blue hover:text-neon-pink transition-colors"
        >
          CyberMines
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-neon-blue hover:text-neon-pink transition-colors"
          >
            Home
          </Link>
          <Link
            to="/game"
            className="text-neon-blue hover:text-neon-pink transition-colors"
          >
            Play Now
          </Link>
          {!account && (
            <button
              onClick={connectWallet}
              className="text-neon-blue hover:text-neon-pink transition-colors"
            >
              Connect Wallet
            </button>
          )}
          {account && (
            <span className="text-neon-blue">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          )}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neon-blue hover:text-neon-pink transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-neon-pink">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link
              to="/"
              className="text-neon-blue hover:text-neon-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/game"
              className="text-neon-blue hover:text-neon-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Play Now
            </Link>
            {!account && (
              <button
                onClick={connectWallet}
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
