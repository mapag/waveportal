import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './utils/Constants';
import WaveLogHeader from './WaveLog/WaveLogHeader';

function App() {
  const [waveMessage, setWaveMessage] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
    * Implement your connectWallet method here
    */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async () => {
    try {
      if (!sendingMessage) {
        setErrorMessage("")
        setSendingMessage(true);
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

          // console.log(`Sending wave msg ${waveMessage}`);
          const waveTxn = await wavePortalContract.wave(waveMessage);
          console.log("Mining...");

          await waveTxn.wait();
          console.log("Mined -- ");
          setSendingMessage(false);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      }
    }
    catch (error) {
      setErrorMessage(error.message);
      setSendingMessage(false);
      console.log("error:::", error.message)
    }
  }



  return (
    <div className="m-auto flex justify-center my-4" style={{ maxWidth: "800px" }}>

      <div className="flex flex-col">
        <p className="text-6xl text-center font-black text-gray-900 py-8">Wave Portal</p>
        <p className="text-xl text-center font-light text-gray-700 py-8">
          Connect your wallet, write your message, and then wave!
        </p>
        <div className="text-center">
          {!currentAccount && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
        <div className="m-auto">
          <div className="flex flex-col justify-center">
            <textarea onChange={event => setWaveMessage(event.target.value)} placeholder="Enter your message here :)" className="resize-none w-96 h-48 border-2 p-2 my-4"></textarea>
            <button className={`p-2 border border-black ${sendingMessage ? "cursor-not-allowed" : ""}`} onClick={wave}><p>Wave at me!</p></button>
          </div>
        </div>
        {errorMessage && (
          <p className="text-xl text-center font-light text-gray-700 py-8">Hola {errorMessage.toString()}</p>
        )}
        < WaveLogHeader sendingMessage={sendingMessage}></WaveLogHeader>
      </div>

    </div >
  );
}

export default App;
