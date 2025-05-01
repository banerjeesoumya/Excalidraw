import { z } from 'zod';

export const SignUpSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    name: z.string().min(2, "Name must be at least 2 characters long"),
})

export const SignInSchema = z.object({
    email: z.string().email("Please enter a vaid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export const CreateRoomSchema = z.object({
    roomName: z.string()
})