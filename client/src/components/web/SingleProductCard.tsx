"use client"
import { ProductType } from "@/types"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import useCartStore from "@/stores/CartStore"
import { toast } from "sonner"

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"

import { Button, buttonVariants } from "../ui/button"
import { ShoppingCart, PlusIcon, MinusIcon } from "lucide-react"
import Image from "next/image"
import { useRouter, usePathname, useSearchParams } from "next/navigation"


export default function SingleProductCard({ product, selectedColour, selectedSize }: { product: ProductType, selectedColour: string, selectedSize: string }) {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const { addToCart } = useCartStore();

    const [productType, setProductType] = useState({
        colour: selectedColour,
        size: selectedSize,
        quantity: 1
    })

    const handleProductType = ({ type, value }: { type: "size" | "colour", value: string }) => {

        const URL = new URLSearchParams(searchParams.toString());
        URL.set(type, value);
        router.push(`${pathName}?${URL.toString()}`, { scroll: false });

        setProductType((prev) => ({
            ...prev,
            [type]: value
        }))

        console.log(productType)
    }

    const handleQuantityChange = ({ type }: { type: "increment" | "decrement" }) => {
        setProductType((prev) => ({
            ...prev,
            quantity: type === "increment" ? prev.quantity + 1 : prev.quantity > 1 ? prev.quantity - 1 : 1
        }))
    }


    const handleAddToCart = (redirect: boolean = false) => {
        addToCart({
            ...product,
            selectedSize: productType.size,
            selectedColor: productType.colour,
            quantity: productType.quantity
        })
        setProductType({
            ...productType,
            quantity: 1
        })

        toast.success(`${product.name} added to cart`)

        if (redirect) {
            router.push("/cart");
        }

    }


    return (
        <div className="flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">{product.name}</h1>
                <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
                <p className="text-lg font-large font-bold">${product.price}</p>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
                <p>Size</p>
                <div>
                    {/* native select */}
                    <NativeSelect
                        defaultValue={productType.size}
                        onChange={(e) => handleProductType({ type: "size", value: e.target.value })}
                    >
                        {
                            product.sizes.map((size) => (
                                <NativeSelectOption key={size} value={size}>{size.toUpperCase()}</NativeSelectOption>
                            ))
                        }
                    </NativeSelect>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p>Color</p>
                <div>
                    <RadioGroup
                        value={productType.colour}
                        onValueChange={(value) => handleProductType({ type: "colour", value })}
                        className="flex flex-row gap-3 items-center"
                    >
                        {product.colours.map((colour) => (
                            <div key={colour}>
                                <RadioGroupItem
                                    value={colour}
                                    id={colour}
                                    className="flex h-6 w-6 rounded-none border-2 cursor-pointer"
                                    style={{ backgroundColor: colour }}
                                />
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            {/* quantity input */}
            <div className="flex flex-col gap-2 md:w-1/4">
                <p>Quantity</p>

                <div className="flex flex-row items-center gap-2">
                    <div
                        className="p-1 bg-gray-500 rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
                        onClick={() => handleQuantityChange({ type: "decrement" })}
                    >
                        <MinusIcon className="text-white" />
                    </div>
                    <div className="flex-1 p-2 outline outline-1 outline-gray-500 rounded-md flex justify-center items-center">
                        <span className="text-white font-bold text-lg">{productType.quantity}</span>
                    </div>
                    <div
                        className="p-1 bg-gray-500 rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
                        onClick={() => handleQuantityChange({ type: "increment" })}
                    >
                        <PlusIcon className="text-white" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Button onClick={() => handleAddToCart(false)} className={buttonVariants({ variant: "default", className: "w-full" })}>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>

                <Button onClick={() => handleAddToCart(true)} className={buttonVariants({ variant: "outline", className: "w-full" })}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy This Now
                </Button>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <Image className="rounded-md" src="/klarna.png" alt="Klarna" width={50} height={50} />
                    <Image className="rounded-md" src="/stripe.png" alt="Stripe" width={50} height={50} />
                    <Image className="rounded-md" src="/cards.png" alt="Cards" width={50} height={50} />
                </div>
                <p className="text-gray-500 text-xs">
                    By clicking Pay Now, you agree to our{" "}
                    <span className="underline hover:text-black cursor-pointer dark:hover:text-white">Terms & Conditions</span>{" "}
                    and <span className="underline hover:text-black cursor-pointer dark:hover:text-white">Privacy Policy</span>
                    . You authorize us to charge your selected payment method for the
                    total amount shown. All sales are subject to our return and{" "}
                    <span className="underline hover:text-black cursor-pointer dark:hover:text-white">Refund Policies</span>.
                </p>
            </div>






        </div>


    )
}