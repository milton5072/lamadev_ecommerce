import { ShippingFormInputs, ShippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ShippingForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ShippingFormInputs>({
		resolver: zodResolver(ShippingFormSchema),
	});
	return (
		<form className="flex flex-col gap-4">
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
					className="ring ring-gray-300 rounded px-2 py-1"
				/>
				{errors.name && (
					<span className="text-sm text-red-600">{errors.name.message}</span>
				)}
			</div>
		</form>
	);
};
export default ShippingForm;
