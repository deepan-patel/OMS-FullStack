"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { CartItemsType } from "@/types";
import { cn } from "@/lib/utils"
import { useState } from "react";

import { Separator } from "@/components/ui/separator"

import { ShippingFormInputs } from "@/app/ZodSchemas/Shipping";

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

import ShippingForm from "@/components/forms/ShippingForm";
import PaymentForm from "@/components/forms/PaymentForm";


import Image from "next/image";
import { Trash2, ArrowRight, Truck, ShoppingBag } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
            price: 39.99,
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
            price: 59.99,
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

    const [shippingForm, setShippingForm] = useState<ShippingFormInputs | null>(null);

    const TodayDate = "2026-03-24";

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

            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl px-4">

                {activeStep !== 4 &&
                    <div className="w-full lg:w-7/12 flex flex-col gap-8">
                        {
                            activeStep === 1 && (
                                <>
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
                                                    <CardContent className="flex flex-1 flex-col text-sm text-muted-foreground justify-between ">
                                                        <div>
                                                            <p className="text-base font-medium text-foreground">{item.name}</p>
                                                            <p>Quantity: {item.quantity}</p>
                                                            <p>Size: {item.selectedSize}</p>
                                                            <p>Color: {item.selectedColor}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-base font-large text-foreground">${item.price}</p>
                                                        </div>

                                                    </CardContent>
                                                    <CardFooter>
                                                        <span className="bg-red-300 p-1 rounded-full hover:animate-pulse"><Trash2 className="text-red-500 cursor-pointer h-5 w-5" /></span>
                                                    </CardFooter>
                                                </Card>
                                            ))
                                        }

                                    </div>

                                </>

                            )
                        }

                        {
                            activeStep === 2 && (
                                <>
                                    <h1 className="text-2xl font-medium flex items-start justify-start">Shipping Information</h1>
                                    <ShippingForm setShippingForm={setShippingForm} />
                                </>
                            )
                        }

                        {
                            activeStep === 3 && (
                                <>
                                    <h1 className="text-2xl font-medium flex items-start justify-start">Payment Information</h1>
                                    <PaymentForm />
                                </>
                            )
                        }


                    </div>
                }

                {
                    activeStep !== 4 && (
                        <div className="w-full lg:w-5/12 flex flex-col gap-8">

                            <h1 className="text-2xl font-medium flex items-start justify-start">Order Summary</h1>

                            <Card>

                                <CardContent className="flex flex-col">


                                    {/* promo code input */}

                                    {
                                        activeStep == 1 && (
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
                                        )
                                    }


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

                                    {
                                        activeStep === 1 && (
                                            <Button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full">
                                                Continue <ArrowRight data-icon="inline-end" />
                                            </Button>
                                        )
                                    }


                                </CardFooter>

                            </Card>
                        </div>
                    )
                }

                {/* CONFIRMATION STEP */}
                {
                    activeStep === 4 && (
                        <div className="w-full flex flex-col gap-8 items-center justify-center">

                            <Truck className="animate-bounce" size={50} />
                            <h1 className="text-2xl font-medium ">Your Order is on its way!</h1>

                            <div className="flex flex-col gap-2">

                                <div className="flex flex-row gap-2">
                                    <span>Confirmation Number: </span>
                                    <span> #123456789</span>

                                </div>

                                <div className="flex flex-row justify-between">
                                    <span>Order Placed On: </span>
                                    <span>{TodayDate}</span>
                                </div>

                                <Link href="/" className={buttonVariants({ variant: "default", className: "w-full flex items-center justify-center gap-2" })}>
                                    Continue Shopping <ShoppingBag />
                                </Link>
                            </div>


                            <p>Thank you for your order. You will receive a confirmation email shortly.</p>

                        </div>
                    )
                }

            </div>
        </div>
    )
}   