"use client";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";
import { useEffect, useState } from "react";

const ShoppingCartIcon = () => {
	const { cart } = useCartStore();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<Link href="/cart">
				<div className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
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
						{mounted ? cart.length : 0}
					</span>
				</div>
			</Link>
		</div>
	);
};
export default ShoppingCartIcon;
