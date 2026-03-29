// import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colours: string[];
    images: Record<string, string>;
};

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};


// Cart Store Types
export type CartItemsType = CartItemType[];

export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
};

export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;
}
