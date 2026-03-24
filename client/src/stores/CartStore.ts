import { create } from 'zustand'
import { CartItemsType, CartStoreActionsType, CartStoreType } from '@/types'

const useCartStore = create<CartStoreType & CartStoreActionsType>()((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
    clearCart: () => set({ cart: [] }),
}))

export default useCartStore;