import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(3, { message: 'At Least 3 Letters'}),
    username: z.string().min(3, { message: 'At Least 3 Letters'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password Must Be Atleast 8 characters!'}),
  })