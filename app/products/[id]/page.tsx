import { ProductType } from "@/types";
import Image from "next/image";
import { string } from "zod";

const product: ProductType = {
	id: 1,
	name: "Product 1",
	shortDescription: "This is a short description of Product 1.",
	description:
		" This is a detailed description of Product 1. It has many features and benefits that you will find useful.",
	sizes: ["S", "M", "L", "XL"],
	colors: ["red", "blue", "green"],
	price: 29.39,
	images: {
		red: "/products/product1.jpg",
		blue: "/products/product2.jpg",
		green: "/products/product3.jpg",
	},
};

const ProductPage = async ({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ color: string; size: string }>;
}) => {
	const { size, color } = await searchParams;
	const selectedSize = size || product.sizes[0];
	const selectedColor = color || product.colors[0];

	return (
		<div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
			{/* image */}
			<div className="w-full lg:w-5/12 relative aspect-2/3">
				<Image
					src={product.images[selectedColor]}
					alt={product.name}
					fill
					className="object-contain rounded-md"
				/>
			</div>
			<div className="w-full lg:w-7/12 flex flex-col gap-4">
				<h1 className="text-2xl font-medium">{product.name}</h1>
				<p className="text-gray-500">{product.description}</p>
				<h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
				interaction
				<div className="flex items-center gap-2">
					<Image
						src="/cards.png"
						alt=""
						height={25}
						width={50}
						className="rounded"
					/>
					<Image
						src="/express.png"
						alt=""
						height={25}
						width={50}
						className="rounded"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProductPage;
