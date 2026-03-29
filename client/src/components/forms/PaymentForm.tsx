"use client"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { provinces } from "@/app/data/data-config";

import Image from "next/image";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { ShoppingCart } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
} from "@/components/ui/input-group"

import { Input } from "@/components/ui/input"

import { toast } from "sonner"

import { PaymentFormInputs, PaymentFormSchema } from "@/app/ZodSchemas/Payment";
import { useRouter } from "next/navigation";


export default function PaymentForm() {


    const form = useForm<z.infer<typeof PaymentFormSchema>>({
        resolver: zodResolver(PaymentFormSchema),
        defaultValues: {
            CardHolderName: "",
            CardNumber: "",
            CardExpiryDate: "",
            CardCVV: "",
        },
    })

    const router = useRouter();

    function onSubmit(data: z.infer<typeof PaymentFormSchema>) {
        toast.success("Payment information saved successfully");
        router.push("/cart?step=4", { scroll: false });
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="payment-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="CardHolderName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="CardHolderName">
                                        Card Holder Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="CardHolderName"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the card holder's name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="CardNumber"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="CardNumber">
                                        Card Number
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="CardNumber"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="1234 5678 9101 1121"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="CardExpiryDate"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="CardExpiryDate">
                                        Card Expiry Date
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="CardExpiryDate"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="MM/YY"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="CardCVV"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="CardCVV">
                                        CVV
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="CardExpiryDate"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="MM/YY"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />


                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground">Supported Payment Types</p>
                            <div className="flex gap-2">
                                <Image className="rounded-md" src="/klarna.png" alt="Klarna" width={50} height={50} />
                                <Image className="rounded-md" src="/stripe.png" alt="Stripe" width={50} height={50} />
                                <Image className="rounded-md" src="/cards.png" alt="Cards" width={50} height={50} />
                            </div>

                        </div>




                        <Button type="submit" className="w-full">
                            Checkout <ShoppingCart data-icon="inline-end" />
                        </Button>

                    </FieldGroup>
                </form>

            </CardContent>
        </Card>
    )
}