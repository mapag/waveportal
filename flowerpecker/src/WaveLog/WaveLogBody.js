import React from 'react'

export default function WaveLogBody(props) {
	return (
		<div className="w-full border-2 border-indigo-600 flex justify-between my-4">
			<div className="flex flex-col p-4">
				<p className="text-xl font-bold">Waver</p>
				<a className="text-lg text-blue-600 p-2" href="https://rinkeby.etherscan.io/address/0x580479F448781a47f634475f08c06581B2531463" target="_blank" rel="noopener noreferrer">{props.wave.address}</a>
			</div>
			<div className="flex flex-col p-4">
				<p className="text-xl font-bold max-w-md">Waved at</p>
				<p className="text-lg p-2">{props.wave.timestamp.toString()}</p>
			</div>
			<div className="flex flex-col p-4 min-w-lg w-64">
				<p className="text-xl font-bold">Message</p>
				<p className="text-lg p-2">{props.wave.message}</p>
			</div>
		</div>
	)
}
