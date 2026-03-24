
import z from "zod";

const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
] as const;


export const ShippingFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    province: z.enum(provinces),
    postalCode: z.string().min(1, "Postal code is required"),
    country: z.string().min(1, "Country is required"),
    phone: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits").regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

})

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;