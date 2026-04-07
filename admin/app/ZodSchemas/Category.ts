import z from "zod"

export const CategorySchema = z.object({
    name: z.string().min(1, "Name must be at least 1"),

});

export type CategoryFormInputs = z.infer<typeof CategorySchema>;