"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { CartItemsType } from "@/types";
import { cn } from "@/lib/utils"

import { Separator } from "@/components/ui/separator"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,

} from "@/components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


import Image from "next/image";
import { Trash2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

            <div className="flex flex-row gap-8 w-full">
                <div className="w-full lg:w-7/12 flex flex-col gap-8">
                    <h1 className="text-2xl font-medium flex items-start justify-start">Cart Items</h1>

                    <div className="flex flex-col gap-2">
                        {
                            cartItems.map((item) => (
                                <Card key={item.id} className="flex flex-row">
                                    <CardHeader className="relative w-[200px] h-[200px] shrink-0">
                                        <Image
                                            src={item.images[item.selectedColor]}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </CardHeader>
                                    <CardContent className="flex-1 flex-col">
                                        <div>
                                            <p className="text-sm ">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                                            <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                                            <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                                        </div>

                                    </CardContent>
                                    <CardFooter>
                                        <span className="bg-red-300 p-1 rounded-full hover:animate-pulse"><Trash2 className="text-red-500 cursor-pointer h-5 w-5" /></span>
                                    </CardFooter>
                                </Card>
                            ))
                        }

                    </div>

                </div>


                <div className="w-full lg:w-5/12 flex flex-col gap-8">
                    <h1 className="text-2xl font-medium flex items-start justify-start gap-2">Order Summary</h1>
                    <Card>

                        <CardContent className="flex flex-col">

                            <div>
                                <Accordion
                                    type="single"
                                    collapsible
                                    defaultValue="Promo"
                                    className="max-w-lg"
                                >

                                    <AccordionItem value="Promo">
                                        <AccordionTrigger>Promo Code</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-row gap-2">
                                                <Input placeholder="Promo Code" />
                                                <Button>Apply</Button>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className="flex flex-row justify-between">
                                <p>Subtotal</p>
                                <span>
                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                </span>
                            </div>

                            <div className="flex flex-row justify-between">
                                <p>Discount (10%)</p>
                                <span className="text-red-500">
                                    -${cartItems.reduce((total, item) => total + item.price * item.quantity * 0.1, 0).toFixed(2)}
                                </span>
                            </div>

                            <div className="flex flex-row justify-between">
                                <p>Shipping Fee</p>
                                <span>
                                    $10.00
                                </span>
                            </div>

                            <div className="flex flex-row justify-between">
                                <p>Tax</p>
                                <span>
                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity * 0.13, 0).toFixed(2)}
                                </span>
                            </div>



                        </CardContent>
                        <CardFooter className="flex flex-col gap-8">
                            <Separator />

                            {/* total */}
                            <div className="w-full flex flex-row justify-between">
                                <p>Total</p>
                                <span>
                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity - item.price * item.quantity * 0.1 + 10 + item.price * item.quantity * 0.13, 0).toFixed(2)}
                                </span>
                            </div>


                            <Button className="w-full">
                                Continue <ArrowRight data-icon="inline-end" />
                            </Button>

                        </CardFooter>

                    </Card>
                </div>

            </div>
        </div>
    )
}   