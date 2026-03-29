"use client"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    NativeSelect,
    NativeSelectOptGroup,
    NativeSelectOption,
} from "@/components/ui/native-select"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "../ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"

import { ProductType } from "@/types"

import { toast } from "sonner"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useCartStore from "@/stores/CartStore";
import { Input } from "../ui/input";

export default function ProductCard({ product }: { product: ProductType }) {


    const [productType, setProductType] = useState({
        colour: product.colours?.[0] ?? "",
        size: product.sizes?.[0] ?? "",
    })

    const handleProductType = ({ type, value }: { type: "size" | "colour", value: string }) => {
        setProductType((prev) => ({
            ...prev,
            [type]: value
        }))

        console.log(productType)
    }



    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        addToCart({
            ...product,
            selectedSize: productType.size,
            selectedColor: productType.colour,
            quantity: 1
        })

        toast.success(`${product.name} added to cart`)
    }

    return (

        <Card className="rounded-lg shadow-lg p-0 m-0 flex flex-col h-full">
            <CardHeader className="relative aspect-[2/3]">
                {/* Image goes here */}
                <Link href={`/products/${product.id}?colour=${productType.colour}&size=${productType.size}`}>
                    <Image
                        src={product.images[productType.colour]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </Link>
                <div className="absolute top-2 right-2 bg-accent p-2 rounded-full">
                    <p className="text-lg font-semibold">${product.price}</p>
                </div>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-4 pb-5 flex-1 w-full">
                {/* product name and description */}
                <div className="flex flex-col gap-2 w-full">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.shortDescription}</CardDescription>
                </div>

                {/* sizing and colour options */}
                <div className="w-full flex flex-row justify-between mt-auto">
                    <div className="flex flex-col gap-2">
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
                                            className="flex h-6 w-6 rounded-full border-2 cursor-pointer"
                                            style={{ backgroundColor: colour }}
                                        />
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                    </div>
                </div>


                {/* product pricing and add to cart */}
                <div className="w-full">
                    <Button onClick={handleAddToCart} className="w-full">
                        <ShoppingCart />
                        Add to Cart
                    </Button>
                </div>
            </CardFooter>
        </Card >

    )
}