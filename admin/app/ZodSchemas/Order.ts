import z from "zod"

export const OrderSchema = z.object({
    amount: z.number().min(1, "Amount must be at least 1"),
    userId: z.string().min(1, "User ID must be at least 1"),
    status: z.enum(["pending", "processing", "success", "failed"]),
});

export type OrderFormInputs = z.infer<typeof OrderSchema>;