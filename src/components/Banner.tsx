import React from 'react';

export default function GiveBack() {
	return (
		<section className="relative bg-gradient-to-r from-primary-light to-primary-dark text-white py-20 lg:py-28">
			<div className="container mx-auto px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down animate-once animate-duration-1000 animate-alternate">
					GiveBack
				</h1>
				<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up animate-once animate-duration-[800ms] animate-alternate leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores ipsam nulla placeat repudiandae tempora ullam vel. Accusamus assumenda at corporis cumque deleniti ea expedita ipsam laborum modi, non perspiciatis, possimus quo sapiente tempore voluptatem.
				</p>
				<a
					href="#kontakt"
					className="animate-rotate-x animate-once animate-duration-[800ms] inline-block bg-secondary-dark text-white hover:bg-secondary font-semibold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
				>
					Dołącz do GiveBack
				</a>
			</div>
			{/* Dekoracyjne elementy w tle */}
			<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-light opacity-30 rounded-full filter blur-3xl"></div>
				<div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary opacity-20 rounded-full filter blur-2xl"></div>
			</div>
		</section>
	);
}
