import React, { createContext, useContext, useState, useEffect } from "react";
import Web3 from "web3";

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
          updateBalance(accounts[0], web3Instance);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        setWeb3(new Web3(window.web3.currentProvider));
      } else {
        console.log(
          "No Ethereum browser extension detected, please install MetaMask!",
        );
      }
    };

    initWeb3();
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        updateBalance(accounts[0], web3);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    }
  };

  const updateBalance = async (address, web3Instance) => {
    if (web3Instance) {
      const balanceWei = await web3Instance.eth.getBalance(address);
      const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
      setBalance(parseFloat(balanceEth));
    }
  };

  const placeBet = async (amount) => {
    if (!web3 || !account) return;
    try {
      const amountWei = web3.utils.toWei(amount.toString(), "ether");
      await web3.eth.sendTransaction({
        from: account,
        to: "0x1234567890123456789012345678901234567890", // Replace with your contract address
        value: amountWei,
      });
      updateBalance(account, web3);
    } catch (error) {
      console.error("Error placing bet", error);
    }
  };

  const withdraw = async (amount) => {
    if (!web3 || !account) return;
    try {
      const amountWei = web3.utils.toWei(amount.toString(), "ether");
      await web3.eth.sendTransaction({
        from: "0x1234567890123456789012345678901234567890", // Replace with your contract address
        to: account,
        value: amountWei,
      });
      updateBalance(account, web3);
    } catch (error) {
      console.error("Error withdrawing", error);
    }
  };

  const value = {
    web3,
    account,
    balance,
    connectWallet,
    placeBet,
    withdraw,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
