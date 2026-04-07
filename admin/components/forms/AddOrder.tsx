"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { UserSchema } from "@/app/ZodSchemas/User"

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldContent,
    FieldTitle,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { userRoles } from "@/data/DataConfig"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { useState } from "react"
import { OrderSchema } from "@/app/ZodSchemas/Order"
import { orderStatus } from "@/data/DataConfig"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddOrderForm() {

    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof OrderSchema>>({
        resolver: zodResolver(OrderSchema)
    })

    const onSubmit = (data: z.infer<typeof OrderSchema>) => {
        toast.success("Order created successfully")
    }



    return (
        <SheetContent side="right" className="flex p-4">
            <div className="flex flex-col gap-2">
                <SheetTitle>Add Order</SheetTitle>
                <SheetDescription>Create an Order!</SheetDescription>

            </div>


            <form id="payment-form" className="flex flex-col gap-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="amount"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="amount">
                                    Amount
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="amount"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter the amount"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="userId"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="userId">
                                    User ID
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="userId"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter the user ID"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />


                    <Controller
                        name="status"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="status">
                                    Status
                                </FieldLabel>

                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="enter the status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {orderStatus.map((status) => (
                                                <SelectItem key={status} value={status}>
                                                    {status}
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


                    <Button type="submit" className="w-full">
                        Create Order
                    </Button>


                </FieldGroup>

            </form>



        </SheetContent>
    )
}