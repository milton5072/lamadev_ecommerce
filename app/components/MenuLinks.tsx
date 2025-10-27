import Link from "next/link";
const MenuLinks = () => {
	return (
		<div className="flex flex-col gap-6 md:flex-row items-center">
			<Link
				href="/categories"
				className="text-gray-600 hover:text-purple-600 transition-colors"
			>
				Categories
			</Link>
			<Link
				href="/deals"
				className="text-gray-600 hover:text-purple-600 transition-colors"
			>
				Deals
			</Link>
			<Link
				href="/popular"
				className="text-gray-600 hover:text-purple-600 transition-colors"
			>
				Popular
			</Link>
			<Link
				href="/contact"
				className="text-gray-600 hover:text-purple-600 transition-colors"
			>
				Contact
			</Link>
		</div>
	);
};
export default MenuLinks;
