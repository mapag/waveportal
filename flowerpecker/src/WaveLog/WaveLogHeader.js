import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import ABI from '../utils/WavePortal.json'

import WaveLogBody from './WaveLogBody';

function WaveLogHeader() {
	const [waveCount, setWaveCount] = useState(-1);
  const [allWaves, setAllWaves] = useState([]);

	const contractAddress = '0x8981b9bCF4d84a5aBf6eC36d88cFE3C23C684262';
	const contractABI = ABI.abi;

	useEffect(() => {
		getTotalWaves();
		getAllWaves();
	}, [])

	const getAllWaves = async () => {
		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

				/*
				 * Call the getAllWaves method from your Smart Contract
				 */
				const waves = await wavePortalContract.getAllWaves();


				/*
				 * We only need address, timestamp, and message in our UI so let's
				 * pick those out
				 */
				let wavesCleaned = [];
				waves.forEach(wave => {
					wavesCleaned.push({
						address: wave.waver,
						timestamp: new Date(wave.timestamp * 1000),
						message: wave.message
					});
				});

				/*
				 * Store our data in React State
				 */
				setAllWaves(wavesCleaned);
			} else {
				console.log("Ethereum object doesn't exist!")
			}
		} catch (error) {
			console.log(error);
		}
	}

	const getTotalWaves = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

				let waveCount = await wavePortalContract.getTotalWaves();
				setWaveCount(waveCount.toNumber());
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className="m-auto flex flex-col justify-center py-8">
			<p className="text-4xl font-extrabold text-gray-800 py-4">Wave log 👀</p>
			<p>Check out all these people out here waving!</p>
			{waveCount !== -1 && <p>We already have {waveCount} waves</p>}
			{allWaves.map((wave) => <WaveLogBody wave={wave} />)}
		</div>
	)
}

export default WaveLogHeader;