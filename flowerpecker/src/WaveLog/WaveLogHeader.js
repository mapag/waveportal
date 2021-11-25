import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../utils/Constants';

import WaveLogBody from './WaveLogBody';

function WaveLogHeader() {
	const [waveCount, setWaveCount] = useState(-1);
	const [allWaves, setAllWaves] = useState([]);

	useEffect(() => {
		getTotalWaves();
		getAllWaves();
	}, []);

	const getAllWaves = async () => {
		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

				const waves = await wavePortalContract.getAllWaves();

				let wavesCleaned = [];

				waves.forEach(wave => {
					wavesCleaned.push({
						address: wave.waver,
						timestamp: new Date(wave.timestamp * 1000),
						message: wave.message
					});
				});

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
				const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

				let waveCount = await wavePortalContract.getTotalWaves();
				setWaveCount(waveCount.toNumber());
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		let wavePortalContract;

		const onNewWave = (from, timestamp, message) => {
			setAllWaves(prevState => [
				...prevState,
				{
					address: from,
					timestamp: new Date(timestamp * 1000),
					message: message,
				},
			]);
		};

		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();

			wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
			wavePortalContract.on('NewWave', onNewWave);
		}

		return () => {
			if (wavePortalContract) {
				wavePortalContract.off('NewWave', onNewWave);
			}
		};
	}, []);

	return (
		<div className="m-auto flex flex-col justify-center py-8">
			<p className="text-4xl font-extrabold text-gray-800 py-4">Wave log 👀</p>
			<p>Check out all these people out here waving!</p>
			{waveCount !== -1 && <p>We already have {waveCount} waves</p>}
			{allWaves.map((wave, i) => <WaveLogBody wave={wave} key={i} />)}
		</div>
	)
}

export default WaveLogHeader;