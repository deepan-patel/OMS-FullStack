import z from "zod"

export const categories = [
    "T-shirts",
    "Shoes",
    "Accessories",
    "Bags",
    "Dresses",
    "Jackets",
    "Gloves",
] as const;

export const colours = [
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
] as const;

export const sizes = [
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "xxl",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
] as const;

export const ProductSchema = z.object({
    name: z.string().min(1, { message: "Product name is required!" }),
    shortDescription: z
        .string()
        .min(1, { message: "Short description is required!" })
        .max(60),
    description: z.string().min(1, { message: "Description is required!" }),
    price: z.number().min(1, { message: "Price is required!" }),
    category: z.enum(categories),
    sizes: z.array(z.enum(sizes)),
    colours: z.array(z.enum(colours)),
    images: z.record(z.enum(colours), z.string()),
});

export type ProductFormInputs = z.infer<typeof ProductSchema>;