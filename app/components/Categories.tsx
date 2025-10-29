"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
	{ id: 1, name: "All", slug: "all" },
	{ id: 10, name: "Gaming", slug: "gaming" },
	{ id: 2, name: "Shopping", slug: "shopping" },
	{ id: 3, name: "Entertainment", slug: "entertainment" },
	{ id: 4, name: "Food & Dining", slug: "food-dining" },
	{ id: 5, name: "Travel", slug: "travel" },
];

const Categories = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	// Get selected category, default to "all" if none selected
	const selectedCategory = searchParams.get("category") || "all";

	const handleChange = (value: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("category", value);
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<div className="container mx-auto my-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => handleChange(category.slug)}
						className={`
							py-3 px-4 rounded-lg transition-all duration-200 
							${
								selectedCategory === category.slug
									? "bg-purple-500 text-white shadow-md"
									: "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600"
							}
							font-medium text-sm focus:outline-none 
						`}
					>
						{category.name}
					</button>
				))}
			</div>
		</div>
	);
};
export default Categories;
