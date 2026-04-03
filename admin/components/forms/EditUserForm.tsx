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

export default function EditUserForm() {

    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            name: "John Doe",
            email: "John@Doe.com",
            phone: "4167892089",
            location: "",
            role: "user",
        },
    })

    const onSubmit = (data: z.infer<typeof UserSchema>) => {
        toast.success("User updated successfully")
    }



    return (
        <SheetContent side="left" className="flex p-4">
            <div className="flex flex-col gap-2">
                <SheetTitle>Edit User's Information</SheetTitle>
                <SheetDescription>Update the user's information.</SheetDescription>

            </div>


            <form id="payment-form" className="flex flex-col gap-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                        name="location"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="location">
                                    Location
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="location"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter the user's location"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />


                    <FieldLabel htmlFor="role">
                        Role
                    </FieldLabel>
                    <RadioGroup defaultValue={userRoles[0]} className="max-w-sm">
                        {userRoles.map((role) => (
                            <FieldLabel key={role} htmlFor={role}>
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>{role}</FieldTitle>
                                        <FieldDescription>
                                            For {role} users.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value={role} id={role} />
                                </Field>
                            </FieldLabel>
                        ))}
                    </RadioGroup>



                    <Button type="submit" className="w-full">
                        Update User
                    </Button>


                </FieldGroup>

            </form>



        </SheetContent>
    )
}