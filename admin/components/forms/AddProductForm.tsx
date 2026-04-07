"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { ProductSchema } from "@/app/ZodSchemas/Product"

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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { useState } from "react"
import { categories, sizes, colours } from "@/app/ZodSchemas/Product"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function AddProductForm() {

    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema)
    })

    const onSubmit = (data: z.infer<typeof ProductSchema>) => {
        toast.success("Product created successfully")
    }



    return (
        <SheetContent side="right" className="flex p-4">
            <ScrollArea className="h-screen">
                <div className="flex flex-col gap-2">
                    <SheetTitle>Add New Product</SheetTitle>
                    <SheetDescription>Add a new product to the store.</SheetDescription>

                </div>


                <form id="payment-form" className="flex flex-col gap-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name">
                                        Product Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the product's name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="shortDescription"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="shortDescription">
                                        Short Description
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="shortDescription"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the product's short description"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="description"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="description">
                                        Description
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id="description"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the product's description"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="price"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="price">
                                        Price
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="price"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the product's price"
                                        type="number"
                                        value={field.value ?? ""}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="category"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="category">
                                        Category
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
                                                {categories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
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
                            name="sizes"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="sizes">
                                        Sizes
                                    </FieldLabel>

                                    {/* checkbox */}
                                    <div className="grid grid-cols-3 gap-4 my-2">
                                        {sizes.map((size) => (
                                            <div className="flex items-center gap-2" key={size}>
                                                <Checkbox
                                                    id={size}
                                                    checked={field.value?.includes(size) ?? false}
                                                    onCheckedChange={(checked) => {
                                                        const isChecked = checked === true;

                                                        if (isChecked) {
                                                            field.onChange([...(field.value ?? []), size]);
                                                        } else {
                                                            field.onChange((field.value ?? []).filter((s) => s !== size));
                                                        }
                                                    }}
                                                />
                                                <FieldLabel htmlFor={size}>{size}</FieldLabel>
                                            </div>
                                        ))}
                                    </div>

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />


                        <Controller
                            name="colours"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="colours">
                                        Colours
                                    </FieldLabel>

                                    {/* checkbox */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-4 my-2">
                                            {colours.map((colour) => (
                                                <div className="flex items-center gap-2" key={colour}>
                                                    <Checkbox
                                                        id={colour}
                                                        checked={field.value?.includes(colour) ?? false}
                                                        onCheckedChange={(checked) => {
                                                            const isChecked = checked === true;

                                                            if (isChecked) {
                                                                field.onChange([...(field.value ?? []), colour]);
                                                            } else {
                                                                field.onChange((field.value ?? []).filter((s) => s !== colour));
                                                            }
                                                        }}
                                                    />
                                                    <FieldLabel htmlFor={colour}>{colour}</FieldLabel>
                                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colour }}></div>
                                                </div>
                                            ))}
                                        </div>
                                        {field.value && field.value.length > 0 && (
                                            <div className="mt-8 space-y-4">
                                                <p className="text-sm font-medium">Upload images for selected colors:</p>
                                                {field.value.map((color) => (
                                                    <div className="flex items-center gap-2" key={color}>
                                                        <div
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                        <span className="text-sm min-w-[60px]">{color}</span>
                                                        <Input type="file" accept="image/*" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />


                        <Button type="submit" className="w-full">
                            Create Product
                        </Button>


                    </FieldGroup>

                </form>


            </ScrollArea>
        </SheetContent>
    )
}