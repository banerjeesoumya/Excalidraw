import { z } from 'zod';

export const SignUpSchema = z.object({
    username: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    name: z.string().min(2, "Name must be at least 2 characters long"),
})

export const SignInSchema = z.object({
    username: z.string().email("Please enter a vaid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export const CreateRoomSchema = z.object({
    roomId: z.string()
})