import React from 'react'

export default function Footer() {
	return (
		<div>
			<p className="text-4xl font-extrabold text-gray-800 py-4">🌊 About</p>
			<div class="mt-10">
				<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
					<div class="relative">
						<dt>
							<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
								</svg>
							</div>
							<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Waves</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-gray-500">
							Waves are sent through Rinkeby testnet, and shown in the list of messages below.
						</dd>
					</div>

					<div class="relative">
						<dt>
							<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
								</svg>
							</div>
							<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Metamask</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-gray-500">
							Metamask is a browser extension that allows you to interact with the Ethereum blockchain. It is required to send Waves.
						</dd>
					</div>

					<div class="relative">
						<dt>
							<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-gray-500">
							It will take less than a minute to see your wave on the list!
						</dd>
					</div>

					<div class="relative">
						<dt>
							<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
								</svg>
							</div>
							<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Inspiration</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-gray-500">
							This challenge was designed by @Buildspace. Really loved learning about the blockchain and how it works. 
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}
