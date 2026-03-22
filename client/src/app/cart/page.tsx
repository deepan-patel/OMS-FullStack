"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { CartItemsType } from "@/types";
import { cn } from "@/lib/utils"


import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Trash, Trash2 } from "lucide-react";

export default function CartPage() {

    // TEMPORARY
    const cartItems: CartItemsType = [
        {
            id: 1,
            name: "Adidas CoreFit T-Shirt",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 39.9,
            sizes: ["s", "m", "l", "xl", "xxl"],
            colours: ["gray", "purple", "green"],
            images: {
                gray: "/products/1g.png",
                purple: "/products/1p.png",
                green: "/products/1gr.png",
            },
            quantity: 1,
            selectedSize: "m",
            selectedColor: "gray",
        },
        {
            id: 2,
            name: "Puma Ultra Warm Zip",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 59.9,
            sizes: ["s", "m", "l", "xl"],
            colours: ["gray", "green"],
            images: { gray: "/products/2g.png", green: "/products/2gr.png" },
            quantity: 1,
            selectedSize: "l",
            selectedColor: "gray",
        },

    ];

    const steps = [
        {
            id: 1,
            title: "Cart"
        },
        {
            id: 2,
            title: "Checkout"
        },
        {
            id: 3,
            title: "Payment"
        },
        {
            id: 4,
            title: "Confirmation"
        }
    ]

    const router = useRouter()
    const searchParams = useSearchParams()

    const activeStep = parseInt(searchParams.get("step") || "1")

    return (

        <div className="flex flex-col gap-8 items-center justify-center mt-12">
            <div className="flex items-center">
                <p className="flex mx-auto text-2xl font-medium">Your Shopping Cart Items</p>
            </div>

            {/* Cart steps */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl px-4 mb-4">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={cn(
                            "flex flex-col md:flex-row items-center gap-2 pb-4 border-b-2 flex-1 justify-center",
                            activeStep === step.id ? "border-primary" : "border-gray-200"
                        )}
                    >
                        <div className={cn("flex items-center justify-center rounded-full w-10 h-10 text-sm", activeStep === step.id ? "bg-primary text-white" : "bg-gray-200 text-gray-500")}>
                            {step.id}
                        </div>
                        <p className={cn("font-medium", activeStep === step.id ? "text-foreground" : "text-gray-500")}>{step.title}</p>
                    </div>
                ))}
            </div>

            {/* main div */}
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-medium flex items-start justify-start">Cart Items</h1>

                <div className="flex flex-col gap-2">
                    {
                        cartItems.map((item) => (
                            <Card key={item.id} className="flex flex-row">
                                <CardHeader>
                                    <Image src={item.images.gray} alt={item.name} width={100} height={100} />
                                </CardHeader>
                                <CardContent className="flex flex-col">
                                    <div>
                                        <p className="text-sm ">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">{item.shortDescription}</p>
                                        <p className="text-sm text-muted-foreground">{item.selectedSize}</p>
                                        <p className="text-sm text-muted-foreground">{item.selectedColor}</p>
                                    </div>

                                </CardContent>
                                <CardFooter>
                                    <span className="bg-red-300 p-1 rounded-full hover:animate-pulse"><Trash2 className="text-red-500 cursor-pointer h-4 w-4" /></span>
                                </CardFooter>
                            </Card>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}   