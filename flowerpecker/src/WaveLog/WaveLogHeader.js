import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import ABI from '../utils/WavePortal.json'

import WaveLogBody from './WaveLogBody';

function WaveLogHeader() {
	const [waveCount, setWaveCount] = useState(-1);

	const contractAddress = '0x6013fe7E69C85a7aAE7b41e78De2Ca88E74642d6';
	const contractABI = ABI.abi;

	useEffect(() => {
		getTotalWaves();
	}, [])

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
			<WaveLogBody />
		</div>
	)
}

export default WaveLogHeader;