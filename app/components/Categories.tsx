"use client";
const categories = [
	{ id: 1, name: "Category 1" },
	{ id: 2, name: "Category 2" },
	{ id: 3, name: "Category 3" },
];

const Categories = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 bg-gray-100 p-2 rounded-md mb-4 text-sm">
			{categories.map((category) => (
				<div key={category.name}>{category.name}</div>
			))}
		</div>
	);
};
export default Categories;
