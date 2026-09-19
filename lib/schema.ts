import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, 'min 2 char length'),
    email: z.string().email( 'min 2 char length'),
    password: z.string().min(6, 'password must be 6 characters'),
})

export type UserFormData = z.infer<typeof userSchema>;