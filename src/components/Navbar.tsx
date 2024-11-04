import React, { useState } from 'react';
import NavLink from "./NavLink.tsx";
import SearchInput from "./SearchInput.tsx";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-neutral-light text-primary-dark shadow-md">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<a href="/" className="text-3xl font-extrabold text-primary-dark hover:text-primary transition duration-300">
							GiveBack
						</a>
					</div>
					<div className="hidden lg:flex space-x-6 text-primary-dark">
						<NavLink href="/" label="Home" />
						<NavLink href="/about" label="O Nas" />
						<NavLink href="/contact" label="Kontakt" />
						<NavLink href="/login" label={<CgProfile size={24} />} />
					</div>
					<div className="flex lg:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="text-primary-dark transition hover:text-secondary-dark focus:outline-none"
						>
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="lg:hidden bg-neutral-dark">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
							<NavLink href="/" label="Home" mobile />
							<NavLink href="/about" label="O Nas" mobile />
							<NavLink href="/services" label="Usługi" mobile />
							<NavLink href="/contact" label="Kontakt" mobile />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
