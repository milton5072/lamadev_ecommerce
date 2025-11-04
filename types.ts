import { email, z } from "zod";
export type ProductType = {
	id: string | number;
	name: string;
	shortDescription: string;
	description: string;
	sizes: string[];
	colors: string[];
	price: number;
	images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
	quantity: number;
	selectedSize: string;
	selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const ShippingFormSchema = z.object({
	name: z.string().min(2, "Full name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z
		.string()
		.min(7, "Phone number must be at least 7 characters")
		.max(11, "Phone number must be at most 15 characters")
		.regex(/^[0-9]+$/, "Phone number must contain only numbers"),
	address: z.string().min(5, "Address must be at least 5 characters"),
	city: z.string().min(2, "City must be at least 2 characters"),
});
export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;

export const PaymentFormSchema = z.object({
	cardHolder: z.string().min(1, "Card holder name is required"),
	cardNumber: z
		.string()
		.min(16, "Card number must be 16 digits")
		.max(16, "Card number must be 16 digits"),
	expirationDate: z
		.string()
		.regex(
			/^(0[1-9]|1[0-2])\/([0-9]{2})$/,
			"Expiration date must be in MM/YY format"
		),
	cvv: z.string().min(3, "CVV must be 3 digits").max(3, "CVV must be 3 digits"),
});
export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;
