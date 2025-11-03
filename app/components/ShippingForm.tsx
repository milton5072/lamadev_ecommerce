import { ShippingFormInputs, ShippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ShippingForm = ({
	setShippingForm,
}: {
	setShippingForm: (data: ShippingFormInputs) => void;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ShippingFormInputs>({
		resolver: zodResolver(ShippingFormSchema),
	});
	const router = useRouter();

	const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
		setShippingForm(data);
		router.push("/cart?steps=3", { scroll: false });
	};
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={handleSubmit(handleShippingForm)}
		>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="name"
					className="font-medium text-xs text-gray-500"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					{...register("name")}
					placeholder="John Doe"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.name && (
					<span className="text-sm text-red-600">{errors.name.message}</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="email"
					className="font-medium text-xs text-gray-500"
				>
					email
				</label>
				<input
					type="email"
					id="email"
					{...register("email")}
					placeholder="example@gmail.com"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.email && (
					<span className="text-sm text-red-600">{errors.email.message}</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="phone"
					className="font-medium text-xs text-gray-500"
				>
					Phone
				</label>
				<input
					type="text"
					id="phone"
					{...register("phone")}
					placeholder="01712345678"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.phone && (
					<span className="text-sm text-red-600">{errors.phone.message}</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="address"
					className="font-medium text-xs text-gray-500"
				>
					Address
				</label>
				<input
					type="text"
					id="address"
					{...register("address")}
					placeholder="Kaburhat, Jagati, Kushtia"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.address && (
					<span className="text-sm text-red-600">{errors.address.message}</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="city"
					className="font-medium text-xs text-gray-500"
				>
					City
				</label>
				<input
					type="text"
					id="city"
					{...register("city")}
					placeholder="Kushtia"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.city && (
					<span className="text-sm text-red-600">{errors.city.message}</span>
				)}
			</div>
			<button
				// onClick={}
				type="submit"
				className="w-full bg-purple-400 text-white py-3 rounded-md mt-6 hover:bg-purple-700"
			>
				Continue
			</button>
		</form>
	);
};
export default ShippingForm;
