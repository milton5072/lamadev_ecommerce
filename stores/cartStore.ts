import { create } from "zustand";
import { cartStoreActionsType, cartStoreStateType } from "@/types";

const useCartStore = create<cartStoreStateType & cartStoreActionsType>()(
	(set) => ({
		cart: [],
		addToCart: (product) =>
			set((state) => ({ cart: [...state.cart, product] })),
		removeFromCart: (product) =>
			set((state) => ({
				cart: state.cart.filter(
					(item) =>
						!(
							item.id === product.id &&
							item.selectedSize === product.selectedSize &&
							item.selectedColor === product.selectedColor
						)
				),
			})),
		clearCart: () => set({ cart: [] }),
	})
);
export default useCartStore;
