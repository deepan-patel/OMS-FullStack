
import z from "zod";

export const PaymentFormSchema = z.object({
    CardHolderName: z.string().min(1, "Card holder name is required"),
    CardNumber: z.string().min(16, "Card number must be 16 digits").max(16, "Card number must be 16 digits").regex(/^[0-9]{16}$/, "Card number must be 16 digits"),
    CardExpiryDate: z.string().min(1, "Card expiry is required").regex(/^[0-9]{2}\/[0-9]{2}$/, "Card expiry must be in MM/YY format"),
    CardCVV: z.string().min(3, "Card CVV must be 3 digits").max(3, "Card CVV must be 3 digits").regex(/^[0-9]{3}$/, "Card CVV must be 3 digits"),
})

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;