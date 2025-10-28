"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
	{ id: 1, name: "All", slug: "all" },
	{ id: 10, name: "Category 1", slug: "category-1" },
	{ id: 2, name: "Category 2", slug: "category-2" },
	{ id: 3, name: "Category 3", slug: "category-3" },
];

const Categories = () => {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get("category");
	const router = useRouter();
	const pathName = usePathname;
	const handleChange = (value: string | null) => {
		router.push(`/?category=${value}`);
	};
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 bg-gray-100 p-2 rounded-md mb-4 text-sm">
			{categories.map((category) => (
				<div
					className={`cursor-pointer text-center ${
						category.slug === selectedCategory ? "bg-white" : "text-gray-500"
					}`}
					key={category.name}
					onClick={() => handleChange(category.slug)}
				>
					{category.name}
				</div>
			))}
		</div>
	);
};
export default Categories;
