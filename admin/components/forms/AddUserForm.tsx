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

export default function AddUserForm() {

    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema)
    })

    const onSubmit = (data: z.infer<typeof UserSchema>) => {
        toast.success("User created successfully")
    }



    return (
        <SheetContent side="right" className="flex p-4">
            <div className="flex flex-col gap-2">
                <SheetTitle>Add New User</SheetTitle>
                <SheetDescription>Add a new user to the system.</SheetDescription>

            </div>


            <form id="payment-form" className="flex flex-col gap-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="fullName"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="fullName">
                                    Full Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter the user's name"
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
                                    placeholder="John@doe.com"
                                    type="email"
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
                                    Phone
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="phone"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="+1 123 456 7890"
                                    type="tel"
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
                                    placeholder="Enter the user's address"
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
                                    placeholder="Enter the user's city"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />





                    <Button type="submit" className="w-full">
                        Update User
                    </Button>


                </FieldGroup>

            </form>



        </SheetContent>
    )
}