"use client";
import { CartItemsType } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import ShippingForm from "../components/ShippingForm";
const steps = [
	{ id: 1, title: "Shopping Cart" },
	{ id: 2, title: "Shipping Information" },
	{ id: 3, title: "Payment Details" },
];

const cartItems: CartItemsType = [
	{
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
		quantity: 1,
		selectedSize: "M",
		selectedColor: "red",
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
			blue: "/products/product2.jpg",
			green: "/products/product3.jpg",
		},
		quantity: 1,
		selectedSize: "L",
		selectedColor: "blue",
	},
	{
		id: 3,
		name: "Product 3",
		shortDescription: "This is a short description of Product 1.",
		description:
			" This is a detailed description of Product 1. It has many features and benefits that you will find useful.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["red", "blue", "green"],
		price: 39.99,
		images: {
			red: "/products/product1.jpg",
			blue: "/products/product2.jpg",
			green: "/products/product3.jpg",
		},
		quantity: 1,
		selectedSize: "S",
		selectedColor: "green",
	},
];

const CartPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const activeStep = parseInt(searchParams.get("steps") || "1");

	const handleNextStep = () => {
		if (activeStep < 3) {
			router.push(`/cart?steps=${activeStep + 1}`);
		}
	};

	return (
		<div className="flex flex-col gap-8 items-center justify-center my-12">
			<h1 className="text-2xl font-medium">Your Shopping Cart</h1>
			{/* steps */}
			<div className="flex flex-col md:flex-row md:items-center gap-8">
				{steps.map((step) => (
					<div
						key={step.id}
						className="flex items-center gap-2"
					>
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center ${
								step.id === activeStep
									? "bg-purple-600 text-white"
									: "bg-gray-200 text-gray-600"
							}`}
						>
							<div>{step.id}</div>
						</div>
						<div
							className={`flex items-center gap-2 border-b-2 pb-4 ${
								step.id === activeStep ? "border-purple-600" : "border-gray-200"
							}`}
						>
							<span className="text-sm">{step.title}</span>
						</div>
					</div>
				))}
			</div>
			{/* steps & details */}
			<div className="w-full flex flex-col lg:flex-row gap-16">
				{/* steps */}
				<div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
					{activeStep === 1 ? (
						<div className="flex flex-col gap-4">
							{cartItems.map((item) => (
								<div
									key={item.id}
									className="flex gap-4 items-center border-b border-gray-100 pb-4"
								>
									<div className="relative w-20 h-20">
										<Image
											src={item.images[item.selectedColor]}
											alt={item.name}
											fill
											className="object-cover rounded-md"
										/>
									</div>
									<div className="flex-1">
										<h3 className="font-medium">{item.name}</h3>
										<p className="text-sm text-gray-500">
											Size: {item.selectedSize} | Color: {item.selectedColor}
										</p>
										<p className="text-purple-600 font-medium">
											${item.price.toFixed(2)}
										</p>
									</div>
									<div className="flex items-center gap-2">
										<button className="px-2 py-1 border rounded">-</button>
										<span>{item.quantity}</span>
										<button className="px-2 py-1 border rounded">+</button>
									</div>
									<div>
										{/* DELETE BUTTON */}
										<button
											// onClick={() => removeFromCart(item)}
											className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
										>
											<p>Delete</p>
										</button>
									</div>
								</div>
							))}
						</div>
					) : activeStep === 2 ? (
						<div>
							<h2 className="text-xl font-medium mb-4">Shipping Information</h2>
							<ShippingForm />
						</div>
					) : activeStep === 3 ? (
						<div>
							<h2 className="text-xl font-medium mb-4">Payment Details</h2>
							<p>Step 3 content will go here</p>
						</div>
					) : null}
				</div>

				{/* Summary */}
				<div className="w-full lg:w-5/12 h-fit shadow-lg border border-gray-100 p-8 rounded-lg">
					<h2 className="text-xl font-medium mb-4">Order Summary</h2>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between">
							<span>Subtotal</span>
							<span>
								$
								{cartItems
									.reduce((acc, item) => acc + item.price * item.quantity, 0)
									.toFixed(2)}
							</span>
						</div>
						<div className="flex justify-between">
							<span>Shipping</span>
							<span>$0.00</span>
						</div>
						<div className="flex justify-between font-medium mt-4 pt-4 border-t">
							<span>Total</span>
							<span>
								$
								{cartItems
									.reduce((acc, item) => acc + item.price * item.quantity, 0)
									.toFixed(2)}
							</span>
						</div>
					</div>
					<button
						onClick={handleNextStep}
						className="w-full bg-purple-600 text-white py-3 rounded-md mt-6 hover:bg-purple-700"
					>
						Proceed to Checkout
					</button>
				</div>
			</div>
		</div>
	);
};
export default CartPage;
