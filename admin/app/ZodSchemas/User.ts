import z from "zod"

export const UserSchema = z.object({
    fullName: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits long"),
    address: z.string().min(5, "Address must be at least 5 characters long"),
    city: z.string().min(3, "City must be at least 3 characters long"),
});

export type UserFormInputs = z.infer<typeof UserSchema>;