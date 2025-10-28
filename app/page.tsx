import Image from "next/image";
import ProductList from "./components/ProductList";
export default function Home() {
	return (
		<div className="">
			<div className="w-full max-h-[500px] mb-12 aspect-video relative">
				<Image
					src="/hero.jpg"
					alt=""
					fill
				/>
			</div>
			<ProductList />
		</div>
	);
}
