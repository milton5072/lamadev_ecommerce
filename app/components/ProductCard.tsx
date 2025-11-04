"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ProductType } from "@/types";
import useCartStore from "@/stores/cartStore";

const ProductCard = ({ product }: { product: ProductType }) => {
	const [productTypes, setProductTypes] = useState({
		size: product.sizes[0],
		color: product.colors[0],
	});

	const handleProductType = ({
		type,
		value,
	}: {
		type: "size" | "color";
		value: string;
	}) => {
		setProductTypes((prev) => ({
			...prev,
			[type]: value,
		}));
	};

	const { cart, addToCart } = useCartStore();

	const handleAddToCart = () => {
		const newProduct = {
			...product,
			quantity: 1,
			selectedSize: productTypes.size,
			selectedColor: productTypes.color,
		};

		// Check if product already exists in cart
		const existingProduct = cart.find(
			(item) =>
				item.id === product.id &&
				item.selectedSize === productTypes.size &&
				item.selectedColor === productTypes.color
		);

		if (!existingProduct) {
			addToCart(newProduct);
		}
	};
	return (
		<div className="shadow-lg rounded-md overflow-hidden">
			<Link href={`/products/${product.id}`}>
				<div className="relative aspect-3/2">
					<Image
						src={product.images[productTypes.color]}
						alt={product.name}
						fill
						className="object-contain hover:scale-105 transition-transform duration-300"
					/>
				</div>
			</Link>
			<div className="flex flex-col gap-4 p-4">
				<p className="font-medium">{product.name}</p>
				<p className="text-sm text-gray-500">{product.shortDescription}</p>
				<div className="flex items-center gap-4 text-xs">
					{/* sizes */}
					<div className="flex flex-col gap-1">
						<span className="text-gray-500">Sizes</span>
						<select
							name="size"
							id="size"
							className="ring ring-gray-300 rounded-md px-2 py-1"
							onChange={(e) =>
								handleProductType({ type: "size", value: e.target.value })
							}
						>
							{product.sizes.map((size) => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</select>
					</div>
					{/* colors */}
					<div className="flex flex-col gap-1">
						<span className="text-gray-500">Colors</span>
						<div className="flex items-center gap-1 justify-center">
							{product.colors.map((color) => (
								<div
									key={color}
									className={`w-6 h-6 rounded-full border-2 border-gray-300 bg-${color}-500 cursor-pointer ${
										productTypes.color === color
											? "border-gray-400"
											: "border-gray-200"
									} `}
									onClick={() =>
										handleProductType({ type: "color", value: color })
									}
								>
									<div
										className="w-full h-full rounded-full "
										style={{ backgroundColor: color }}
									></div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* price and add to cart */}
				<div className="flex items-center justify-between">
					<p className="font-medium">${product.price.toFixed(2)}</p>
					<button
						className="bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-purple-700 transition-colors duration-300"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
