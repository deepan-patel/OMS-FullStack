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


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

import { ArrowRight, Phone } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
} from "@/components/ui/input-group"

import { Input } from "@/components/ui/input"

import { toast } from "sonner"

import { ShippingFormInputs, ShippingFormSchema } from "@/app/ZodSchemas/Shipping";
import { useRouter } from "next/navigation";

type ShippingFormProps = {
    setShippingForm: (data: ShippingFormInputs) => void;
};

export default function ShippingForm({ setShippingForm }: ShippingFormProps) {


    const form = useForm<z.infer<typeof ShippingFormSchema>>({
        resolver: zodResolver(ShippingFormSchema),
        defaultValues: {
            name: "",
            email: "",
            address: "",
            city: "",
            province: "Ontario",
            postalCode: "",
            country: "",
            phone: "",
        },
    })

    const router = useRouter();

    function onSubmit(data: z.infer<typeof ShippingFormSchema>) {
        setShippingForm(data);
        toast.success("Shipping information saved successfully");
        router.push("/cart?step=3", { scroll: false });
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="shipping-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="address"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="address">
                                        Address
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="address"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your address"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="city"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="city">
                                        City
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="city"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your city"
                                    />

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="province"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="province">
                                        Province
                                    </FieldLabel>

                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="province" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {provinces.map((province) => (
                                                    <SelectItem key={province} value={province}>
                                                        {province}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="postalCode"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="postalCode">
                                        Postal Code
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="address"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your address"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="country"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="country">
                                        Country
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="country"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your country"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="phone">
                                        Phone Number
                                    </FieldLabel>

                                    <Input {...field}
                                        id="phone"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your phone number" />

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />



                        <Button type="submit" className="w-full">
                            Continue <ArrowRight data-icon="inline-end" />
                        </Button>

                    </FieldGroup>
                </form>

            </CardContent>
        </Card>
    )
}