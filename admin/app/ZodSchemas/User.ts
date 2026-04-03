import z from "zod"

export const UserSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits long"),
    location: z.string().min(5, "Location must be at least 5 characters long"),
    role: z.enum(["admin", "user"]),
});

export type UserFormInputs = z.infer<typeof UserSchema>;