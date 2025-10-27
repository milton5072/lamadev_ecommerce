"use client";
import { useState } from "react";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	return (
		<form onSubmit={handleSearch} className="relative ">
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search gift cards..."
				className="w-full md:w-64 px-4 py-1 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all"
			/>
			<button
				type="submit"
				className="absolute right-3 top-1/2 -translate-y-1/2"
			>
				<svg
					className="w-5 h-5 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</form>
	);
};

export default SearchBar;
