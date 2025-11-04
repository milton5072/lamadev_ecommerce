import { PaymentFormInputs, PaymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PaymentFormInputs>({
		resolver: zodResolver(PaymentFormSchema),
	});

	const router = useRouter();

	const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={handleSubmit(handlePaymentForm)}
		>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="cardHolder"
					className="font-medium text-xs text-gray-500"
				>
					Name on Card
				</label>
				<input
					type="text"
					id="cardHolder"
					{...register("cardHolder")}
					placeholder="John Doe"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.cardHolder && (
					<span className="text-sm text-red-600">
						{errors.cardHolder.message}
					</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="cardNumber"
					className="font-medium text-xs text-gray-500"
				>
					Card Number
				</label>
				<input
					type="text"
					id="cardNumber"
					{...register("cardNumber")}
					placeholder="1234567891011"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.cardNumber && (
					<span className="text-sm text-red-600">
						{errors.cardNumber.message}
					</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="expirationDate"
					className="font-medium text-xs text-gray-500"
				>
					Expiration Date
				</label>
				<input
					type="text"
					id="expirationDate"
					{...register("expirationDate")}
					placeholder="01/28"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.expirationDate && (
					<span className="text-sm text-red-600">
						{errors.expirationDate.message}
					</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="cvv" className="font-medium text-xs text-gray-500">
					CVV
				</label>
				<input
					type="text"
					id="cvv"
					{...register("cvv")}
					placeholder="123"
					className="ring ring-gray-300 rounded px-2 py-1 focus:outline-none"
				/>
				{errors.cvv && (
					<span className="text-sm text-red-600">{errors.cvv.message}</span>
				)}
			</div>
			<div className="flex items-center gap-2 mt-2">
				<Image
					src="/cards.png"
					alt=""
					height={25}
					width={50}
					className="rounded"
				/>
				<Image
					src="/express.png"
					alt=""
					height={25}
					width={50}
					className="rounded"
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-purple-400 text-white py-3 rounded-md mt-4 hover:bg-purple-700"
			>
				Check Out
			</button>
		</form>
	);
};
export default PaymentForm;
