import Link from "next/link";
const Navbar = () => {
	return (
		<div className=" flex items-center justify-between p-4 border-b border-gray-200">
			{/* left */}
			<Link
				href="/"
				className="tracking-wider font-bold text-xl"
			>
				Logo
			</Link>
			{/* right */}
		</div>
	);
};
export default Navbar;
