"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { CategorySchema } from "@/app/ZodSchemas/Category"

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

export default function AddCategoryForm() {

    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof CategorySchema>>({
        resolver: zodResolver(CategorySchema)
    })

    const onSubmit = (data: z.infer<typeof CategorySchema>) => {
        toast.success("Category created successfully")
    }



    return (
        <SheetContent side="right" className="flex p-4">
            <div className="flex flex-col gap-2">
                <SheetTitle>Add New Category</SheetTitle>
                <SheetDescription>Add a new category to the system.</SheetDescription>

            </div>


            <form id="payment-form" className="flex flex-col gap-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="name">
                                    Category Name
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="name"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter the category name"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />



                    <Button type="submit" className="w-full">
                        Create Category
                    </Button>


                </FieldGroup>

            </form>



        </SheetContent>
    )
}