import {z} from "zod";

export const carSchema = z.object({
    brand: z.string()
        .min(1, 'min length must be greater than 0')
        .max(20, 'max length must be 20')
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/),
    price: z.number()
        .int("Price must be an integer")
        .min(0, 'min price must be 0')
        .max(1000000, 'max price must be 1000000'),
    year: z.number()
        .int("Year must be an integer")
        .min(1990, 'min year must be 1990')
        .max(2026, 'max year must be 2026'),
})

export type CarSchemaData = z.infer<typeof carSchema>;