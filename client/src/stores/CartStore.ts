import { create } from 'zustand'
import { CartItemsType, CartStoreActionsType, CartStoreType, CartItemType } from '@/types'
import { persist, createJSONStorage } from "zustand/middleware"

const isSameVariant = (a: CartItemType, b: CartItemType) =>
    a.id === b.id &&
    a.selectedSize === b.selectedSize &&
    a.selectedColor === b.selectedColor

const useCartStore = create<CartStoreType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) =>
                set((state) => {
                    const qtyToAdd = product.quantity ?? 1

                    const existingItem = state.cart.find(
                        (item) =>
                            item.id === product.id &&
                            item.selectedSize === product.selectedSize &&
                            item.selectedColor === product.selectedColor
                    )

                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id &&
                                    item.selectedSize === product.selectedSize &&
                                    item.selectedColor === product.selectedColor
                                    ? {
                                        ...item,
                                        quantity: item.quantity + qtyToAdd,
                                    }
                                    : item
                            ),
                        }
                    }

                    return {
                        cart: [...state.cart, { ...product, quantity: qtyToAdd }],
                    }
                }),
            removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => !isSameVariant(item, product)) })),
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage), // uses web storage so now when we refresh the page it will still be there
        }
    ));

export default useCartStore;