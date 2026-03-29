"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/stores/CartStore";

export default function ShoppingCartIcon() {

    const { cart, hasHydrated } = useCartStore();

    if (!hasHydrated) return null;

    return (
        <div className="relative">
            <Link href="/cart">
                <ShoppingCart className="hover:text-primary w-6 h-6 text-gray-500" />
            </Link>
            {
                cart.length > 0 && (
                    <span className="absolute -right-3 -top-3 flex items-center justify-center bg-primary  text-white rounded-full px-2 py-1 text-xs">
                        {cart.length}
                    </span>
                )
            }

        </div>

    );
}