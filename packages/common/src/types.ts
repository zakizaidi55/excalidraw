import {z} from "zod"

export const CreateUserSchema = z.object({
    userName:z.string(),
    password:z.string(),
    name:z.string(),
})

export const SigninSchema = z.object({
    userName:z.string(),
    password:z.string(),
})

export const CreateRoomSchema = z.object({
    name: z.string(),
})