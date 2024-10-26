import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import { Web3Provider } from "./contexts/Web3Context";

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-neon-blue">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;
