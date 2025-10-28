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
