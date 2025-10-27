"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import MenuLinks from "./MenuLinks";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<nav className="bg-white shadow-sm fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Left - Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="text-2xl font-bold text-purple-600">
								GiftCard
							</span>
						</Link>
					</div>

					{/* Middle - Navigation Links (Hidden on mobile) */}
					<div className="hidden md:flex">
						<MenuLinks />
					</div>

					{/* Right - Search, Cart, and Account */}
					<div className="flex items-center space-x-4">
						{/* Search Bar (Hidden on mobile) */}
						<div className="hidden md:flex items-center">
							<SearchBar />
						</div>

						{/* Cart */}
						<button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
							<svg
								className="w-6 h-6 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								/>
							</svg>
							<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
								0
							</span>
						</button>

						{/* Account */}
						<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
							<svg
								className="w-6 h-6 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</button>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
						>
							<svg
								className="w-6 h-6 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden ${
					isMobileMenuOpen ? "block" : "hidden"
				} border-t border-gray-200`}
			>
				<div className="px-4 py-3 space-y-4">
					{/* Mobile Search */}
					<SearchBar />
					{/* Mobile Navigation Links */}
					<div className="md:hidden">
						<MenuLinks />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
