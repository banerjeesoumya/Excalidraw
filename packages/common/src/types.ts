import { z } from 'zod';

export const signupSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    name: z.string().min(2, "Name must be at least 2 characters long"),
})

export type SignUpSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export type SignInSchema = z.infer<typeof signinSchema>;

export const createroomSchema = z.object({
    roomName: z.string()
})

export type CreateRoomSchema = z.infer<typeof createroomSchema>;
