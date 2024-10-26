import React from "react";
import { Github, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neon-pink py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-neon-blue mb-2">
              CyberMines
            </h3>
            <p className="text-neon-blue opacity-75">
              Experience the thrill of cyberpunk mining.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-neon-blue mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold text-neon-blue mb-2">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-neon-blue opacity-75">
          &copy; 2024 CyberMines. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
