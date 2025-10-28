import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const products: ProductsType = [
	{
		id: 1,
		name: "Product 1",
		shortDescription: "This is a short description of Product 1.",
		description:
			" This is a detailed description of Product 1. It has many features and benefits that you will find useful.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["Red", "Blue", "Green"],
		price: 29.99,
		images: {
			red: "/products/product1.jpg",
			blue: "/products/product1-2.jpg",
			green: "/products/product1-3.jpg",
		},
	},
	{
		id: 2,
		name: "Product 2",
		shortDescription: "This is a short description of Product 1.",
		description:
			" This is a detailed description of Product 1. It has many features and benefits that you will find useful.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["red", "blue", "green"],
		price: 29.99,
		images: {
			red: "/products/product1.jpg",
			blue: "/products/product1-2.jpg",
			green: "/products/product1-3.jpg",
		},
	},
];

const ProductList = () => {
	return (
		<div className="w-full">
			<Categories />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};
export default ProductList;
