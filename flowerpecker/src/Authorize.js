import React from 'react'

export default function Authorize() {
	return (
		<div>
			<div class="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
				<div class="flex space-x-6 items-center">
					<img src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png" class="w-auto h-24 rounded-lg" />
					<div>
						<p class="font-semibold text-base">Connect Device</p>
						<p class="font-semibold text-sm text-gray-400">Autorize device for transfer</p>
					</div>
				</div>

				<div class="flex space-x-2 items-center">
					<div class="bg-gray-300 rounded-md p-2 flex items-center">
						<i class="fas fa-chevron-right fa-sm text-black"></i>
					</div>
				</div>
			</div>
		</div>
	)
}
