import Image from "next/image";
import ProductList from "./components/ProductList";

const HomePage = async ({
	searchParams,
}: {
	searchParams: Promise<{ category: string }>;
}) => {
	const category = (await searchParams).category;
	return (
		<div className="">
			<div className="w-full max-h-[500px] mb-12 aspect-video relative">
				<Image
					src="/hero.jpg"
					alt=""
					fill
				/>
			</div>
			<ProductList
				category={category}
				params="homepage"
			/>
		</div>
	);
};
export default HomePage;
