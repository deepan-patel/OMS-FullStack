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
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"

import { ProductType } from "@/types"

import { Label } from "../ui/label"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }: { product: ProductType }) {

    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    return (

        <Card className="rounded-lg shadow-lg p-0 m-0">
            <CardHeader className="relative aspect-[2/3]">
                {/* Image goes here */}
                <Link href={`/products/${product.id}`}>
                    <Image
                        src={product.images[selectedColor]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </Link>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-4 pb-5">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
                <p>Card Footer</p>

                {/* sizing and colour options */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <p>Size</p>
                        <Combobox items={product.sizes} defaultValue={product.sizes[0].toUpperCase()}>
                            <ComboboxInput placeholder="Size" className="w-24" />
                            <ComboboxContent>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {item.toUpperCase()}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>Color</p>
                        <RadioGroup
                            value={selectedColor}
                            onValueChange={setSelectedColor}
                            className="flex flex-row gap-3"
                        >
                            {product.colors.map((color) => (
                                <div key={color}>
                                    <RadioGroupItem
                                        value={color}
                                        id={color}
                                        className="flex h-6 w-6 rounded-full border-2 "
                                        style={{ backgroundColor: color }}
                                    />
                                </div>
                            ))}
                        </RadioGroup>

                    </div>
                </div>

                {/* product pricing and add to cart */}
                <div className="w-full flex items-center justify-between">
                    <p className="text-lg font-semibold">${product.price}</p>
                    <CardAction>
                        <Button>
                            <ShoppingCart />
                            Add to Cart
                        </Button>
                    </CardAction>
                </div>
            </CardFooter>
        </Card>

    )
}