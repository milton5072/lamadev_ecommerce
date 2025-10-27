import Image from "next/image";
export default function Home() {
	return (
		<div className="h-screen">
			<div className="w-full mb-12 aspect-[16/9] relative">
				<Image src="/hero.jpg" alt="" fill />
			</div>
		</div>
	);
}
