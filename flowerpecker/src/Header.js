import React from 'react';

export default function Header() {
	
	return (
		<div>
			<div className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">A Buildspace challenge</h2>
						<p className="text-6xl text-center font-black text-gray-900">
							👋 Wave Portal
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Connect your wallet, write your message, and then wave!
						</p>
					</div>
				</div>
			</div>			
		</div>
	)
}
